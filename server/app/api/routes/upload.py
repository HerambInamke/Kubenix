from fastapi import APIRouter, File, HTTPException, UploadFile

from app.models import UploadResponse, db
from app.services.s3_service import upload_to_s3


router = APIRouter()


@router.post("/upload", response_model=UploadResponse)
async def upload_file(file: UploadFile = File(...)) -> UploadResponse:
    try:
        url = await upload_to_s3(file)
        db.add_upload(filename=file.filename, url=url)
        return UploadResponse(message="File uploaded successfully", url=url)
    except Exception as exc:  # pragma: no cover - broad exception for API surface
        raise HTTPException(status_code=500, detail=str(exc)) from exc

