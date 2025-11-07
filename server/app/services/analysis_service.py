from collections import Counter
from collections.abc import Sequence


def analyze_tokens(tokens: Sequence[str]) -> dict[str, int]:
    """Return a simple frequency analysis for provided tokens."""
    normalized = [token.lower().strip(".,!?") for token in tokens if token]
    return dict(Counter(filter(None, normalized)))

