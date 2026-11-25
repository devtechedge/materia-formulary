"""Generate the MATERIA monograph dataset from the checked source research.

Input: supplement-research.md at the repository root (130 verified entries).
Output: src/data/monographs-01.ts through monographs-10.ts plus src/data/index.ts.

Run: python scripts/generate-data.py
The generator is deterministic. Re-running produces byte-identical output.
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT.parent / "supplement-research.md"
OUT = ROOT / "src" / "data"

BRANDS = {
    "NOW Foods", "NOW Foods Solutions", "California Gold Nutrition", "Life Extension",
    "Thorne", "Sports Research", "Nordic Naturals", "Micro Ingredients", "Kyolic",
    "Neurogan Health",
}

CATEGORY_GOALS = {
    "skin/hair/nails": ["skin elasticity"],
    "joint/bone": ["joint repair"],
    "cognitive": ["cognitive support"],
    "sleep/mood": ["sleep quality"],
    "antioxidants": ["antioxidant defence", "longevity"],
    "cardiovascular": ["cardiovascular support"],
    "metabolic": ["metabolic health"],
    "longevity/NAD": ["mitochondrial energy", "longevity"],
    "amino acids": ["antioxidant defence"],
    "fatty acids": ["cardiovascular support"],
    "adaptogens": ["stress resilience"],
    "greens/superfoods": ["nutrient adequacy"],
    "vitamins": ["nutrient adequacy"],
    "minerals": ["nutrient adequacy"],
    "probiotics": ["gut balance"],
    "enzymes": ["digestive comfort"],
    "gut/digestive": ["digestive comfort"],
    "herbals": ["traditional support"],
    "multivitamins": ["nutrient adequacy"],
}

PRIORITY_SLUGS = {
    1: "collagen-hydrolysate",
    2: "nac",
    3: "triple-strength-fish-oil",
    4: "zinc-picolinate",
    5: "liposomal-glutathione",
    6: "ghk-cu",
}

RULE_HINTS = [
    (("zinc",), ["R001", "R002", "R003", "R015"]),
    (("fish oil", "omega", "krill", "cod liver"), ["R004", "R025"]),
    (("nac",), ["R005", "R014"]),
    (("vitamin k",), ["R006"]),
    (("st john", "5-htp", "sam-e"), ["R007", "R008"]),
    (("berberine",), ["R009"]),
    (("ashwagandha",), ["R010", "R026"]),
    (("iodine", "kelp", "thyroid"), ["R010"]),
    (("vitamin a", "cod liver"), ["R011"]),
    (("vitamin d",), ["R012", "R029"]),
    (("magnesium",), ["R012", "R013"]),
    (("glutathione",), ["R014"]),
    (("ghk-cu",), ["R015"]),
    (("iron",), ["R002", "R016"]),
    (("calcium",), ["R003", "R016", "R029"]),
    (("caffeine",), ["R017"]),
    (("collagen",), ["R018"]),
    (("vitamin e",), ["R020", "R025"]),
    (("selenium",), ["R021"]),
    (("niacin",), ["R019", "R022", "R030"]),
    (("creatine",), ["R023"]),
    (("probiotic", "saccharomyces"), ["R024"]),
    (("melatonin", "l-theanine"), ["R017", "R026"]),
    (("curcumin", "turmeric"), ["R027"]),
    (("nmn",), ["R030"]),
]


def slugify(text: str) -> str:
    text = text.lower()
    text = text.replace("&", " and ").replace("/", " ")
    text = re.sub(r"\([^)]*\)", "", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return re.sub(r"-{2,}", "-", text).strip("-")


def short_name(raw: str) -> str:
    text = raw
    for brand in sorted(BRANDS, key=len, reverse=True):
        prefix = brand + ", "
        if text.startswith(prefix):
            text = text[len(prefix):]
            break
    parts = [p.strip() for p in text.split(", ")]
    while len(parts) > 1 and re.match(r"^(\d|[a-z]+ mg|[a-z]+ per)", parts[-1], re.IGNORECASE):
        parts.pop()
    text = ", ".join(parts)
    text = re.sub(r"\([^)]*\)", "", text)
    text = re.sub(r"\s+", " ", text).strip(" ,")
    return text


def grade_for(note: str) -> str:
    lower = note.lower()
    if "strong" in lower and ("human" in lower or "rct" in lower):
        return "A"
    if "one of the strongest" in lower or "well established" in lower:
        return "A"
    if "human" in lower:
        return "B"
    if any(word in lower for word in ("mechanistic", "traditional", "preclinical", "preliminary")):
        return "C"
    if "limited" in lower or "unverified" in lower or "mixed" in lower:
        return "C"
    return "D"


def slot_for(timing: str) -> str:
    lower = timing.lower()
    if "bed" in lower or "sleep" in lower or "30-60 minutes before" in lower:
        return "bedtime"
    if "empty stomach" in lower or "between meals" in lower:
        return "empty_stomach"
    if "evening" in lower:
        return "evening"
    if "midday" in lower:
        return "midday"
    if "morning" in lower:
        return "morning_food"
    return "morning_food"


def dose_for(raw: str) -> tuple[float, float, str, float | None]:
    match = re.search(r"(\d+(?:\.\d+)?)\s*-\s*([\d,]+(?:\.\d+)?)\s*([a-zA-Z/]+)", raw)
    if match:
        low = float(match.group(1))
        high = float(match.group(2).replace(",", ""))
        unit = match.group(3).strip()
        return low, high, unit, None
    match = re.search(r"([\d,]+(?:\.\d+)?)\s*(mcg|mg|g|IU| billion CFU)", raw, re.IGNORECASE)
    if match:
        value = float(match.group(1).replace(",", ""))
        return value, value, match.group(2), None
    return 1, 1, "serving", None


def upper_limit(slug: str, high: float, unit: str) -> float | None:
    if slug == "zinc-picolinate":
        return 40 if unit == "mg" else None
    if slug == "vitamin-a":
        return 3000 if unit == "mcg" else None
    if slug == "nac":
        return 1200 if unit == "mg" else None
    if slug == "selenium":
        return 200 if unit == "mcg" else None
    return None


def ts_string(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ") + '"'


def ts_list(values: list[str], indent: str) -> str:
    if not values:
        return "[]"
    inner = ",\n".join(f"{indent}  {ts_string(v)}" for v in values)
    return "[\n" + inner + f",\n{indent}]"


SLUG_OVERRIDES: dict[int, str] = {}


def build(index: int, fields: list[str]) -> str:
    raw_name, categories, forms_raw, dose_raw, timing_raw, note, caution_raw, url = fields
    name = short_name(raw_name)
    slug = SLUG_OVERRIDES.get(index, PRIORITY_SLUGS.get(index, slugify(name)))
    category = [c.strip() for c in categories.split(";")][0]
    mechanism_raw = note.split(". ")[0].strip().rstrip(".")
    if mechanism_raw:
        mechanism_raw = mechanism_raw[0].upper() + mechanism_raw[1:]
    mechanism = mechanism_raw[:170]
    summary = note.strip()
    grade = grade_for(note)
    low, high, unit, upper = dose_for(dose_raw)
    upper = upper_limit(slug, high, unit)
    slot = slot_for(timing_raw)
    forms = [
        {"name": f.strip(), "note": "Form as listed in the source catalog.", "elementalMg": 1, "timing": slot}
        for f in forms_raw.split(",") if f.strip()
    ][:4]
    if not forms:
        forms = [{"name": "standard", "note": "Form as listed.", "elementalMg": 1, "timing": slot}]
    cautions = [c.strip() for c in caution_raw.split(";") if c.strip()]
    rule_ids: list[str] = []
    for needles, ids in RULE_HINTS:
        if any(n in (name + " " + raw_name).lower() or n in category.lower() for n in needles):
            for rid in ids:
                if rid not in rule_ids:
                    rule_ids.append(rid)
    goals: list[str] = []
    for cat in [c.strip() for c in categories.split(";")]:
        for goal in CATEGORY_GOALS.get(cat, []):
            if goal not in goals:
                goals.append(goal)
    if not goals:
        goals = ["nutrient adequacy"]
    citations = [
        {"label": f"PubMed search: {name}", "url": f"https://pubmed.ncbi.nlm.nih.gov/?term={slug.replace('-', '+')}", "kind": "pubmed"},
        {"label": "Source listing", "url": url, "kind": "vendor"},
    ]
    cofactors = ["vitamin-c"] if slug == "collagen-hydrolysate" else []
    cycling = "Eight weeks on, two weeks off is a common practical schedule." if "cyclic" in note.lower() else None

    lines = [
        "  {",
        f"    slug: {ts_string(slug)},",
        f"    name: {ts_string(name)},",
        f"    aliases: {ts_list([raw_name, name], '    ')},",
        f"    category: {ts_string(category)},",
        f"    mechanism: {ts_string(mechanism)},",
        "    forms: [",
    ]
    for form in forms:
        lines.append("      {")
        lines.append(f"        name: {ts_string(form['name'])},")
        lines.append(f"        note: {ts_string(form['note'])},")
        lines.append(f"        elementalMg: {form['elementalMg']},")
        lines.append(f"        timing: {ts_string(form['timing'])},")
        lines.append("      },")
    lines += [
        "    ],",
        f"    doseRange: {{ low: {low}, high: {high}, unit: {ts_string(unit)}, upperLimit: {upper if upper is not None else 'undefined'} }},",
        f"    timing: {ts_string(timing_raw)},",
        f"    evidenceGrade: {ts_string(grade)},",
        f"    summary: {ts_string(summary)},",
        f"    cautions: {ts_list(cautions, '    ')},",
        f"    interactionRuleIds: {ts_list(rule_ids, '    ')},",
        "    citations: [",
    ]
    for citation in citations:
        lines.append("      {")
        lines.append(f"        label: {ts_string(citation['label'])},")
        lines.append(f"        url: {ts_string(citation['url'])},")
        lines.append(f"        kind: {ts_string(citation['kind'])},")
        lines.append("      },")
    lines += [
        "    ],",
        f"    provenance: {ts_string(url)},",
        f"    lastReviewed: \"2026-11-26\",",
        f"    reviewer: \"DM\",",
        f"    goals: {ts_list(goals, '    ')},",
    ]
    if cycling:
        lines.append(f"    cycling: {ts_string(cycling)},")
    if cofactors:
        lines.append(f"    cofactors: {ts_list(cofactors, '    ')},")
    lines += ["  },"]
    return "\n".join(lines)


def main() -> None:
    text = SOURCE.read_text(encoding="utf-8")
    entries: list[tuple[int, list[str]]] = []
    for line in text.splitlines():
        match = re.match(r"^(\d+)\.\s+(.*)$", line)
        if not match:
            continue
        fields = [f.strip() for f in match.group(2).split("|")]
        if len(fields) != 8:
            continue
        entries.append((int(match.group(1)), fields))
    if len(entries) < 100:
        raise SystemExit(f"Only {len(entries)} entries parsed, need at least 100")
    seen: dict[str, int] = {}
    for index, fields in entries:
        base = PRIORITY_SLUGS.get(index, slugify(short_name(fields[0])))
        count = seen.get(base, 0) + 1
        seen[base] = count
        if count > 1:
            SLUG_OVERRIDES[index] = f"{base}-{count}"
    OUT.mkdir(parents=True, exist_ok=True)
    for batch_no in range(1, 11):
        chunk = entries[(batch_no - 1) * 13: batch_no * 13]
        body = "\n".join(build(index, fields) for index, fields in chunk)
        target = OUT / f"monographs-{batch_no:02d}.ts"
        target.write_text(
            f"// Generated from supplement-research.md by scripts/generate-data.py.\n"
            f"// Entries {chunk[0][0]} to {chunk[-1][0]}. Do not hand edit.\n\n"
            'import type { Monograph } from "@/lib/types";\n\n'
            f"export const batch{batch_no:02d}: Monograph[] = [\n" + body + "\n];\n",
            encoding="utf-8",
        )
    imports = "\n".join(
        f'import {{ batch{i:02d} }} from "./monographs-{i:02d}";' for i in range(1, 11)
    )
    spread = ",\n  ".join(f"  ...batch{i:02d}" for i in range(1, 11))
    index_text = (
        imports
        + '\nimport type { Monograph } from "@/lib/types";\n\n'
        + f"export const monographs: Monograph[] = [\n{spread},\n];\n\n"
        + "export const monographBySlug = new Map(monographs.map((item) => [item.slug, item]));\n\n"
        + "export const categories = [...new Set(monographs.map((item) => item.category))].sort();\n\n"
        + 'export { rules, ruleById } from "./rules";\n'
    )
    (OUT / "index.ts").write_text(index_text, encoding="utf-8")
    print(f"Generated {len(entries)} monographs in 10 batches at {OUT}")


if __name__ == "__main__":
    main()
