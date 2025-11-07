from __future__ import annotations

from pathlib import Path

import boto3
from botocore.exceptions import BotoCoreError, NoCredentialsError
from fastapi import UploadFile

from app.core.config import settings


UPLOADS_DIR = Path("uploads")


async def upload_to_s3(file: UploadFile) -> str:
    if not settings.AWS_ACCESS_KEY_ID or not settings.AWS_BUCKET_NAME:
        return await _save_locally(file)

    s3 = boto3.client(
        "s3",
        aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
        aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        region_name=settings.AWS_REGION,
    )

    try:
        file.file.seek(0)
        s3.upload_fileobj(file.file, settings.AWS_BUCKET_NAME, file.filename)
    except (BotoCoreError, NoCredentialsError) as exc:
        raise RuntimeError("Failed to upload file to S3") from exc

    return (
        f"https://{settings.AWS_BUCKET_NAME}.s3.{settings.AWS_REGION}.amazonaws.com/"
        f"{file.filename}"
    )


async def _save_locally(file: UploadFile) -> str:
    UPLOADS_DIR.mkdir(parents=True, exist_ok=True)
    local_path = UPLOADS_DIR / file.filename
    file.file.seek(0)
    with open(local_path, "wb") as buffer:
        buffer.write(await file.read())
    return f"http://localhost:8000/{local_path.as_posix()}"

