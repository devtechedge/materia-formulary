export type EvidenceGrade = "A" | "B" | "C" | "D";
export type Severity = "critical" | "major" | "moderate" | "minor";
export type TimingSlot = "morning_food" | "empty_stomach" | "midday" | "evening" | "bedtime";

export interface Citation {
  label: string;
  url: string;
  kind: "pubmed" | "doi" | "guideline" | "vendor";
}

export interface FormOption {
  name: string;
  note: string;
  elementalMg: number;
  timing: TimingSlot;
}

export interface DoseRange {
  low: number;
  high: number;
  unit: string;
  upperLimit?: number;
  note?: string;
}

export interface Monograph {
  slug: string;
  name: string;
  aliases: string[];
  category: string;
  mechanism: string;
  forms: FormOption[];
  doseRange: DoseRange;
  timing: string;
  evidenceGrade: EvidenceGrade;
  summary: string;
  cautions: string[];
  interactionRuleIds: string[];
  citations: Citation[];
  provenance: string;
  lastReviewed: string;
  reviewer: string;
  goals: string[];
  cycling?: string;
  cofactors?: string[];
}

export interface InteractionRule {
  id: string;
  severity: Severity;
  slugs: string[];
  categories: string[];
  title: string;
  explanation: string;
  evidenceGrade: EvidenceGrade;
  citation: Citation;
  action: string;
}

export interface StackItem {
  slug: string;
  form: string;
  doseMg: number;
  servings: number;
  timing: TimingSlot;
}

export interface Stack {
  id: string;
  name: string;
  items: StackItem[];
}

export interface Finding {
  ruleId: string;
  severity: Severity;
  title: string;
  explanation: string;
  action: string;
  citation: Citation;
  evidenceGrade: EvidenceGrade;
  slugs: string[];
}

export interface AuditReport {
  generatedAt: string;
  itemCount: number;
  findings: Finding[];
  exposure: Array<{
    slug: string;
    name: string;
    elementalMg: number;
    upperLimit?: number;
    overLimit: boolean;
  }>;
  schedule: ProtocolEntry[];
}

export interface ProtocolEntry {
  slot: TimingSlot;
  slug: string;
  name: string;
  form: string;
  doseMg: number;
  note?: string;
}
