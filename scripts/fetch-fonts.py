"""Download the three self-hosted OFL font families used by MATERIA.

Fetches the latin subset woff2 files from Google Fonts, writes them to
public/fonts, and generates src/app/fonts.css with local @font-face rules.
No runtime request leaves the app after this script has run.
"""

from __future__ import annotations

import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CSS_URL = (
    "https://fonts.googleapis.com/css2?"
    "family=Fraunces:wght@400;600&"
    "family=IBM+Plex+Sans:wght@400;500;600&"
    "family=IBM+Plex+Mono:wght@400;500&display=swap"
)
UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def fetch(url: str, binary: bool = False) -> str | bytes:
    request = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(request, timeout=30) as response:
        data = response.read()
    return data if binary else data.decode("utf-8")


def main() -> None:
    css = fetch(CSS_URL)
    out_dir = ROOT / "public" / "fonts"
    out_dir.mkdir(parents=True, exist_ok=True)
    faces: list[str] = []

    for block in re.findall(r"@font-face\s*\{(.*?)\}", css, re.DOTALL):
        if "U+0000-00FF" not in block:
            continue
        family = re.search(r"font-family:\s*'([^']+)'", block)
        weight = re.search(r"font-weight:\s*(\d+)", block)
        url = re.search(r"url\((https://[^)]+\.woff2)\)", block)
        if not (family and weight and url):
            continue
        name = family.group(1).replace(" ", "-") + "-" + weight.group(1) + ".woff2"
        target = out_dir / name
        target.write_bytes(fetch(url.group(1), binary=True))
        slug = family.group(1).replace("-", "")
        faces.append(
            "@font-face {\n"
            f"  font-family: \"{family.group(1)}\";\n"
            "  font-style: normal;\n"
            f"  font-weight: {weight.group(1)};\n"
            "  font-display: swap;\n"
            f"  src: url(\"/fonts/{name}\") format(\"woff2\");\n"
            "}\n"
        )
        print(f"saved {name}")

    (ROOT / "src" / "app" / "fonts.css").write_text("\n".join(faces), encoding="utf-8")
    print(f"wrote {len(faces)} font faces")


if __name__ == "__main__":
    main()
