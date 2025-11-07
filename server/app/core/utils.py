from datetime import datetime, timezone


def current_timestamp() -> str:
    """Return an ISO formatted timestamp in UTC."""
    return datetime.now(timezone.utc).isoformat()

