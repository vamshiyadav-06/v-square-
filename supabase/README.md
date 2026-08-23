# Supabase setup

1. Create a Supabase project.
2. Open SQL Editor and run `schema.sql`.
3. In Authentication > Users, create the admin user with email `v2squareconsole@gmail.com` and the private password supplied by the owner.
4. Copy the admin user's UUID and run the commented `update public.profiles` statement in `schema.sql` with that UUID.
5. Copy the project URL and anon key into `frontend/.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Do not put a service-role key in frontend environment variables. The admin password is only used by Supabase Auth and is never stored in `profiles` or displayed by the app.
