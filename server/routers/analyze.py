"""Compatibility shim that maps to the new insights router."""

from app.api.routes.insights import router

__all__ = ["router"]

