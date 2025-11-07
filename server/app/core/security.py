import hashlib


def hash_token(token: str) -> str:
    """Return a SHA256 hash for the provided token."""
    return hashlib.sha256(token.encode("utf-8")).hexdigest()


def verify_token(token: str, hashed: str) -> bool:
    """Verify a token against a previously hashed value."""
    return hash_token(token) == hashed

