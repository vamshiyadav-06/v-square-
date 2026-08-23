# Supabase setup

## Step by step

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor**, create a new query, paste all of `schema.sql`, and click **Run**.
3. Open **Authentication > Providers > Email** and keep Email enabled.
4. Open **Authentication > Users > Add user**. Create `v2squareconsole@gmail.com` with the private admin password. Do not place that password in this repository.
5. Copy the admin user's UUID from the Users page.
6. In SQL Editor, run this query after replacing the UUID:

```sql
update public.profiles
set role = 'admin'
where id = 'PASTE_ADMIN_USER_UUID_HERE';
```

7. In **Project Settings > API**, copy the Project URL and anon/public key into Render's **frontend** service:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

8. In Render's **backend** service, set `SUPABASE_URL` to the same Project URL and `SUPABASE_SERVICE_ROLE_KEY` to the secret service-role key from Supabase API settings.
9. Set backend `CORS_ORIGINS` to the complete deployed frontend URL, for example `https://v-square-frontend.onrender.com`.
10. Redeploy both Render services.

Students use **Register**. Their password is handled only by Supabase Auth. Their profile is automatically created by the database trigger. They must log in before `/contact` can be opened. Contact requests are stored in `consultation_requests` and appear in the admin Messages page through realtime updates.

Never put `SUPABASE_SERVICE_ROLE_KEY` in the frontend or commit any `.env` file. The admin password is only used by Supabase Auth and is never stored in `profiles` or displayed by the app.
