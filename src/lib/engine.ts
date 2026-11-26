import { monographBySlug, rules } from "@/data";
import { computeExposure } from "./dose";
import type { AuditReport, Finding, Severity, StackItem } from "./types";
import { buildSchedule } from "./protocol";

const SEVERITY_RANK: Record<Severity, number> = {
  critical: 0,
  major: 1,
  moderate: 2,
  minor: 3,
};

const SINGLE_ITEM_RULES = new Set([
  "R005", "R006", "R011", "R012", "R013",
  "R019", "R021", "R022", "R023", "R024", "R027",
]);

function matchedItems(ruleIds: string[], slugs: string[], category: string | undefined): string[] {
  const matches = new Set<string>();
  for (const itemSlug of slugs) {
    const monograph = monographBySlug.get(itemSlug);
    if (ruleIds.includes(itemSlug) || (category !== undefined && monograph?.category === category)) {
      matches.add(itemSlug);
    }
  }
  return [...matches].sort();
}

function evaluate(rule: (typeof rules)[number], items: StackItem[]): Finding | null {
  const slugs = items.map((item) => item.slug);
  const matched = matchedItems(rule.slugs, slugs, rule.categories[0]);
  if (matched.length === 0) return null;

  if (rule.id === "R018") {
    if (!slugs.includes("vitamin-c") && !slugs.some((slug) => slug.includes("vitamin-c"))) {
      return toFinding(rule, matched);
    }
    return null;
  }

  const required = SINGLE_ITEM_RULES.has(rule.id) ? 1 : 2;
  if (matched.length < required) return null;
  return toFinding(rule, matched);
}

function toFinding(rule: (typeof rules)[number], matched: string[]): Finding {
  return {
    ruleId: rule.id,
    severity: rule.severity,
    title: rule.title,
    explanation: rule.explanation,
    action: rule.action,
    citation: rule.citation,
    evidenceGrade: rule.evidenceGrade,
    slugs: matched,
  };
}

export function auditStack(items: StackItem[]): AuditReport {
  const findings: Finding[] = [];

  for (const rule of rules) {
    const finding = evaluate(rule, items);
    if (finding) findings.push(finding);
  }

  findings.sort(
    (a, b) => SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity] || a.ruleId.localeCompare(b.ruleId),
  );

  const exposure = computeExposure(
    items,
    new Map([...monographBySlug].map(([slug, monograph]) => [slug, monograph])),
  );

  return {
    generatedAt: "deterministic",
    itemCount: items.length,
    findings,
    exposure,
    schedule: buildSchedule(items),
  };
}

export function severityCount(report: AuditReport): Record<Severity, number> {
  const counts: Record<Severity, number> = { critical: 0, major: 0, moderate: 0, minor: 0 };
  for (const finding of report.findings) counts[finding.severity] += 1;
  return counts;
}
