from fastapi import APIRouter, File, HTTPException, UploadFile

from app.services.s3_service import upload_to_s3


router = APIRouter()


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        url = await upload_to_s3(file)
        return {"message": "File uploaded successfully", "url": url}
    except Exception as exc:  # pragma: no cover - broad exception for API surface
        raise HTTPException(status_code=500, detail=str(exc)) from exc

