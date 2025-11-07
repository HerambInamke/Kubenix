from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = Field(default="ok")
    service: str


class UploadResponse(BaseModel):
    message: str
    url: str


class InsightResponse(BaseModel):
    words: int
    sentiment: str
    summary: str
    frequencies: dict[str, int] | None = None

