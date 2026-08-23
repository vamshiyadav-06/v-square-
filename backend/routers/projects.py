from fastapi import APIRouter

router = APIRouter(prefix="/projects", tags=["projects"])

@router.get("/health")
def projects_health():
    return {"status": "ok", "module": "projects"}
