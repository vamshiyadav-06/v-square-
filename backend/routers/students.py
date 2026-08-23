from fastapi import APIRouter

router = APIRouter(prefix="/students", tags=["students"])

@router.get("/health")
def students_health():
    return {"status": "ok", "module": "students"}
