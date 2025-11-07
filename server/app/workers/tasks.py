from __future__ import annotations

from typing import Any


def enqueue_task(name: str, payload: dict[str, Any]) -> None:
    """Placeholder background task dispatcher."""
    # TODO: integrate with Celery or RQ
    print(f"Enqueued task {name}: {payload}")

