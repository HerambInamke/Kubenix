from collections.abc import Sequence


def analyze_tokens(tokens: Sequence[str]) -> dict[str, int]:
    """Return a simple frequency analysis for provided tokens."""
    frequencies: dict[str, int] = {}
    for token in tokens:
        frequencies[token] = frequencies.get(token, 0) + 1
    return frequencies

