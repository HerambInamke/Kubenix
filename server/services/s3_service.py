"""Compatibility shim that proxies to the application service."""

from app.services.s3_service import upload_to_s3

__all__ = ["upload_to_s3"]

