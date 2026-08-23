create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text not null,
  phone text not null default '',
  college text not null default '',
  course text not null default '',
  branch text not null default '',
  year text not null default '',
  city text not null default '',
  role text not null default 'student' check (role in ('student', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  phone text not null,
  email text not null,
  college text not null default '',
  project_idea text not null,
  technology text not null default '',
  deadline text not null default '',
  message text not null,
  status text not null default 'new' check (status in ('new', 'reviewing', 'in_progress', 'completed', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.profiles replica identity full;
alter table public.consultation_requests enable row level security;
alter table public.consultation_requests replica identity full;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

drop policy if exists "Students can read their own profile" on public.profiles;
create policy "Students can read their own profile"
on public.profiles for select
to authenticated
using (id = auth.uid() or public.is_admin());

drop policy if exists "Students can create their own profile" on public.profiles;
create policy "Students can create their own profile"
on public.profiles for insert
to authenticated
with check (id = auth.uid() and role = 'student');

drop policy if exists "Students can update their own profile" on public.profiles;
create policy "Students can update their own profile"
on public.profiles for update
to authenticated
using (id = auth.uid() or public.is_admin())
with check (id = auth.uid() or public.is_admin());

drop policy if exists "Students can create their consultation requests" on public.consultation_requests;
create policy "Students can create their consultation requests"
on public.consultation_requests for insert
to authenticated
with check (student_id = auth.uid());

drop policy if exists "Students can read their consultation requests" on public.consultation_requests;
create policy "Students can read their consultation requests"
on public.consultation_requests for select
to authenticated
using (student_id = auth.uid() or public.is_admin());

drop policy if exists "Admins can update consultation requests" on public.consultation_requests;
create policy "Admins can update consultation requests"
on public.consultation_requests for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email, phone, college, course, branch, year, city)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    new.email,
    coalesce(new.raw_user_meta_data ->> 'phone', ''),
    coalesce(new.raw_user_meta_data ->> 'college', ''),
    coalesce(new.raw_user_meta_data ->> 'course', ''),
    coalesce(new.raw_user_meta_data ->> 'branch', ''),
    coalesce(new.raw_user_meta_data ->> 'year', ''),
    coalesce(new.raw_user_meta_data ->> 'city', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- Run once after creating the admin user in Authentication > Users.
-- Replace the UUID with that user's id; never put the admin password in SQL or frontend code.
-- update public.profiles set role = 'admin' where id = 'ADMIN_USER_UUID';

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'profiles'
  ) then
    alter publication supabase_realtime add table public.profiles;
  end if;
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'consultation_requests'
  ) then
    alter publication supabase_realtime add table public.consultation_requests;
  end if;
end;
$$;
