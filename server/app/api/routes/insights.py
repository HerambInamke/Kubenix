from fastapi import APIRouter, Query


router = APIRouter()


@router.get("/insights")
def get_insight(text: str = Query(..., description="Text to analyze")):
    words = text.split()
    length = len(words)
    sentiment = "positive" if "good" in text.lower() else "neutral"
    summary = f"Processed '{text[:50]}...'" if len(text) > 50 else text
    return {"words": length, "sentiment": sentiment, "summary": summary}

