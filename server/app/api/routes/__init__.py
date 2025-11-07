from fastapi import APIRouter

from . import health, insights, upload


api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(upload.router)
api_router.include_router(insights.router)

__all__ = ["api_router", "health", "upload", "insights"]

