from fastapi import APIRouter, Query

from app.models import InsightResponse
from app.services.analysis_service import analyze_tokens


router = APIRouter()


@router.get("/insights", response_model=InsightResponse)
def get_insight(text: str = Query(..., description="Text to analyze")) -> InsightResponse:
    words = text.split()
    length = len(words)
    sentiment = "positive" if "good" in text.lower() else "neutral"
    summary = f"Processed '{text[:50]}...'" if len(text) > 50 else text
    frequencies = analyze_tokens(words) if words else {}
    return InsightResponse(
        words=length,
        sentiment=sentiment,
        summary=summary,
        frequencies=frequencies or None,
    )

