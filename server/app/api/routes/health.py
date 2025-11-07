from fastapi import APIRouter

from app.models import HealthResponse


router = APIRouter()


@router.get("/health", response_model=HealthResponse)
def health_check() -> HealthResponse:
    return HealthResponse(status="ok", service="InsightForge API")

