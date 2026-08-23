import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from routers.auth import router as auth_router
from routers.students import router as students_router
from routers.projects import router as projects_router
from routers.referrals import router as referrals_router
from routers.consultations import router as consultations_router
from routers.admin import router as admin_router

load_dotenv(dotenv_path="../.env")

app = FastAPI(title="V Square API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in os.getenv("CORS_ORIGINS", "*").split(",")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(students_router)
app.include_router(projects_router)
app.include_router(referrals_router)
app.include_router(consultations_router)
app.include_router(admin_router)

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "v-square-backend"}

@app.get("/")
def root():
    return {"message": "V Square API is running."}
