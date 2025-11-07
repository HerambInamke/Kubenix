from fastapi import APIRouter

from . import health, insights, upload


api_router = APIRouter()
api_router.include_router(health.router, tags=["health"])
api_router.include_router(upload.router, tags=["uploads"])
api_router.include_router(insights.router, tags=["insights"])

__all__ = ["api_router", "health", "upload", "insights"]

