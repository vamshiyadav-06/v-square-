# V SQUARE

V Square is a premium full-stack student project consultancy platform for college students. It combines a public marketing website, secure student registration/login, project tracking, referral management, and admin workflows designed for deployment on Render with Supabase.

## Features

- Public website for services, AI solutions, portfolio, pricing, referrals, and contact
- Student registration and login using Supabase Auth
- Student dashboard and profile management
- Project requirement submission and progress tracking
- Deliverables and admin project updates flow
- Referral tracking and earnings logic
- Admin dashboard with student/project/referral management
- React + Vite frontend and FastAPI backend
- Supabase-ready database schema and RLS guidance

## Project structure

```text
v square/
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── routers/
│   ├── services/
│   ├── models/
│   ├── schemas/
│   └── utils/
├── .env.example
├── render.yaml
└── README.md
```

## Local development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Environment variables

Copy `.env.example` and fill the values.

```bash
cp .env.example .env
```

## Supabase setup

1. Create a Supabase project.
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL Editor.
3. Add the public URL and anon key to `frontend/.env`.
4. Create `v2squareconsole@gmail.com` in Supabase Authentication > Users, then assign its profile `role` to `admin` using the UUID shown by Supabase. The password is never stored in the app or profiles table.
5. Enable realtime for `public.profiles` if the SQL Editor does not enable it automatically.

The admin student list queries `public.profiles` and listens for database changes, so newly registered students appear without a page refresh. Row Level Security allows students to access only their own profile and admins to read student profiles.

## Render deployment

1. Push the repo to GitHub.
2. Create a backend service on Render using the `backend` folder and `uvicorn main:app --host 0.0.0.0 --port 10000`.
3. Create a frontend static site using the `frontend` folder and Vite build output.
4. Set environment variables in Render.
5. Configure `VITE_API_URL` and Supabase values.

## Important notes

- Never expose service role keys in the frontend.
- Keep Supabase auth and RLS as the main security layer.
- Use demo records only during local development.
- Student accounts must only access their own data.

## Deployment contact details

- Vamshi: 8074720619
- Thirumal: 7569382452
- Email: v2squareconsole@gmail.com
