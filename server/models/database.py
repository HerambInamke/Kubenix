from __future__ import annotations

from dataclasses import dataclass
from typing import Any


@dataclass
class UploadRecord:
    filename: str
    url: str
    metadata: dict[str, Any]


class InMemoryDatabase:
    """Lightweight in-memory persistence for demo purposes."""

    def __init__(self) -> None:
        self._uploads: list[UploadRecord] = []

    def add_upload(self, filename: str, url: str, **metadata: Any) -> UploadRecord:
        record = UploadRecord(filename=filename, url=url, metadata=metadata)
        self._uploads.append(record)
        return record

    def list_uploads(self) -> list[UploadRecord]:
        return list(self._uploads)


db = InMemoryDatabase()

