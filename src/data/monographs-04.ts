// Generated from supplement-research.md by scripts/generate-data.py.
// Entries 40 to 52. Do not hand edit.

import type { Monograph } from "@/lib/types";

export const batch04: Monograph[] = [
  {
    slug: "l-phenylalanine",
    name: "L-Phenylalanine",
    aliases: [
      "NOW Foods, L-Phenylalanine, 500 mg, 120 veg capsules",
      "L-Phenylalanine",
    ],
    category: "amino acids",
    mechanism: "Human evidence for mood is weak; phenylalanine is an essential amino acid and precursor to dopamine and norepinephrine",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "evening",
      },
      {
        name: "tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "evening",
      },
    ],
    doseRange: { low: 500.0, high: 1000.0, unit: "mg", upperLimit: undefined },
    timing: "morning or with meals, not late evening",
    evidenceGrade: "B",
    summary: "human evidence for mood is weak; phenylalanine is an essential amino acid and precursor to dopamine and norepinephrine",
    cautions: [
      "contraindicated in phenylketonuria",
      "caution with MAO inhibitors and bipolar disorder (unverified interaction detail)",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: L-Phenylalanine",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=l+phenylalanine",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-l-phenylalanine-500-mg-120-veg-capsules/736",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-l-phenylalanine-500-mg-120-veg-capsules/736",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
    ],
  },
  {
    slug: "5-htp",
    name: "5-HTP",
    aliases: [
      "NOW Foods, 5-HTP, 100 mg, 120 veg capsules",
      "5-HTP",
    ],
    category: "amino acids",
    mechanism: "Small human trials suggest possible mood and sleep benefits, but evidence quality is low and inconsistent",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
      {
        name: "tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
    ],
    doseRange: { low: 100.0, high: 300.0, unit: "mg", upperLimit: undefined },
    timing: "evening for sleep; with meals for mood use",
    evidenceGrade: "B",
    summary: "small human trials suggest possible mood and sleep benefits, but evidence quality is low and inconsistent",
    cautions: [
      "do not combine with SSRIs, SNRIs, MAOIs or tramadol due to serotonin syndrome risk",
      "caution before surgery",
    ],
    interactionRuleIds: [
      "R007",
      "R008",
    ],
    citations: [
      {
        label: "PubMed search: 5-HTP",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=5+htp",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-5-htp-100-mg-120-veg-capsules/306",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-5-htp-100-mg-120-veg-capsules/306",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "sleep quality",
    ],
  },
  {
    slug: "taurine",
    name: "Taurine",
    aliases: [
      "NOW Foods, Taurine, 1,000 mg, 100 veg capsules",
      "Taurine",
    ],
    category: "amino acids",
    mechanism: "Human evidence for bile acid conjugation and some cardiovascular markers; exercise-performance data are mixed",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1.0, high: 3.0, unit: "g", upperLimit: undefined },
    timing: "any time with food",
    evidenceGrade: "B",
    summary: "human evidence for bile acid conjugation and some cardiovascular markers; exercise-performance data are mixed",
    cautions: [
      "no established drug interaction",
      "caution in severe liver disease (unverified)",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Taurine",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=taurine",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/c/now-foods/amino-acids",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/c/now-foods/amino-acids",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "cardiovascular support",
    ],
  },
  {
    slug: "omega-3-fish-oil",
    name: "Omega-3 Fish Oil",
    aliases: [
      "NOW Foods, Omega-3 Fish Oil, 1,000 mg, 200 softgels",
      "Omega-3 Fish Oil",
    ],
    category: "fatty acids",
    mechanism: "Strong evidence for triglyceride lowering at higher EPA+DHA doses",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "liquid",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "enteric coated",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1.0, high: 3.0, unit: "softgels", upperLimit: undefined },
    timing: "with meals containing fat",
    evidenceGrade: "D",
    summary: "strong evidence for triglyceride lowering at higher EPA+DHA doses",
    cautions: [
      "anticoagulant caution at high dose",
      "fish allergy",
      "check total vitamin A if combined with cod liver oil",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
    ],
    citations: [
      {
        label: "PubMed search: Omega-3 Fish Oil",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=omega+3+fish+oil",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-omega-3-fish-oil-1-000-mg-200-softgels/323",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-omega-3-fish-oil-1-000-mg-200-softgels/323",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "tri-3d-omega",
    name: "Tri-3D Omega",
    aliases: [
      "NOW Foods, Tri-3D Omega, 330 EPA/220 DHA with vitamin D3, 90 softgels",
      "Tri-3D Omega",
    ],
    category: "fatty acids",
    mechanism: "Omega-3 evidence for triglycerides plus vitamin D deficiency correction; cardiovascular outcome claims remain mixed",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with a meal",
    evidenceGrade: "C",
    summary: "omega-3 evidence for triglycerides plus vitamin D deficiency correction; cardiovascular outcome claims remain mixed",
    cautions: [
      "contains vitamin D and fish gelatin",
      "caution with anticoagulants at high doses and with other vitamin D products",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
      "R012",
      "R029",
    ],
    citations: [
      {
        label: "PubMed search: Tri-3D Omega",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=tri+3d+omega",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-tri-3d-omega-330-epa-220-dha-90-softgels/39952",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-tri-3d-omega-330-epa-220-dha-90-softgels/39952",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "omega-3-fish-oil-triple-strength",
    name: "Omega-3 Fish Oil Triple Strength",
    aliases: [
      "Sports Research, Omega-3 Fish Oil Triple Strength, 120 softgels",
      "Omega-3 Fish Oil Triple Strength",
    ],
    category: "fatty acids",
    mechanism: "Same EPA/DHA evidence base, higher per-softgel dose makes triglyceride-range dosing easier",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1.0, high: 2.0, unit: "softgels", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "D",
    summary: "same EPA/DHA evidence base, higher per-softgel dose makes triglyceride-range dosing easier",
    cautions: [
      "anticoagulant and surgery caution",
      "fish allergy",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
    ],
    citations: [
      {
        label: "PubMed search: Omega-3 Fish Oil Triple Strength",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=omega+3+fish+oil+triple+strength",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/sports-research-omega-3-fish-oil-triple-strength-120-softgels/109322",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/sports-research-omega-3-fish-oil-triple-strength-120-softgels/109322",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "krill-oil",
    name: "Krill Oil",
    aliases: [
      "NOW Foods, Krill Oil, 500 mg, 60 softgels",
      "Krill Oil",
    ],
    category: "fatty acids",
    mechanism: "Human evidence suggests krill oil omega-3s are bioavailable; clinical outcome evidence is smaller than for fish oil",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1.0, high: 2.0, unit: "softgels", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "B",
    summary: "human evidence suggests krill oil omega-3s are bioavailable; clinical outcome evidence is smaller than for fish oil",
    cautions: [
      "shellfish/crustacean allergy",
      "caution with anticoagulants",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
    ],
    citations: [
      {
        label: "PubMed search: Krill Oil",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=krill+oil",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-krill-oil-500-mg-60-softgels/14424",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-krill-oil-500-mg-60-softgels/14424",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "krill-1000",
    name: "Krill 1000",
    aliases: [
      "NOW Foods, Krill 1000, 1,000 mg, 120 softgels",
      "Krill 1000",
    ],
    category: "fatty acids",
    mechanism: "Same phospholipid omega-3 rationale; outcome evidence limited relative to fish oil",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1000.0, high: 1000.0, unit: "mg", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "C",
    summary: "same phospholipid omega-3 rationale; outcome evidence limited relative to fish oil",
    cautions: [
      "shellfish allergy",
      "anticoagulant caution",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
    ],
    citations: [
      {
        label: "PubMed search: Krill 1000",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=krill+1000",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-krill-1000-120-softgels/73263",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-krill-1000-120-softgels/73263",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "cod-liver-oil",
    name: "Cod Liver Oil",
    aliases: [
      "NOW Foods, Cod Liver Oil, 1,000 mg, 180 softgels",
      "Cod Liver Oil",
    ],
    category: "fatty acids",
    mechanism: "Long traditional use plus omega-3 and vitamin A/D content; human outcome evidence is weaker than purified fish oil",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "liquid",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "B",
    summary: "long traditional use plus omega-3 and vitamin A/D content; human outcome evidence is weaker than purified fish oil",
    cautions: [
      "contains retinol vitamin A, avoid in pregnancy above recommended intake and avoid stacking with other vitamin A",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
      "R011",
    ],
    citations: [
      {
        label: "PubMed search: Cod Liver Oil",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cod+liver+oil",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-cod-liver-oil-1-000-mg-180-softgels/53978",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-cod-liver-oil-1-000-mg-180-softgels/53978",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "flax-oil",
    name: "Flax Oil",
    aliases: [
      "NOW Foods, Flax Oil, 1,000 mg, 100 softgels",
      "Flax Oil",
    ],
    category: "fatty acids",
    mechanism: "ALA is essential and human data support substitution for saturated fat; conversion to EPA/DHA is low, so it is not equivalent to fish oil",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "liquid",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1.0, high: 2.0, unit: "softgels", upperLimit: undefined },
    timing: "with meals, oil can be used cold",
    evidenceGrade: "B",
    summary: "ALA is essential and human data support substitution for saturated fat; conversion to EPA/DHA is low, so it is not equivalent to fish oil",
    cautions: [
      "may cause loose stools",
      "caution with anticoagulants at high intakes (unverified magnitude)",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Flax Oil",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=flax+oil",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-flax-oil-1-000-mg-100-softgels-1-000-mg-per-softgel/117488",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-flax-oil-1-000-mg-100-softgels-1-000-mg-per-softgel/117488",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "omega-800",
    name: "Omega-800",
    aliases: [
      "California Gold Nutrition, Omega-800, 1,000 mg, 30 fish gelatin softgels",
      "Omega-800",
    ],
    category: "fatty acids",
    mechanism: "Omega-3 EPA/DHA evidence applies; dose per softgel must be checked on label",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "D",
    summary: "omega-3 EPA/DHA evidence applies; dose per softgel must be checked on label",
    cautions: [
      "fish allergy",
      "anticoagulant caution",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
    ],
    citations: [
      {
        label: "PubMed search: Omega-800",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=omega+800",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/california-gold-nutrition-omega-800-30-fish-gelatin-softgels-1-000-mg-per-softgel/82845",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/california-gold-nutrition-omega-800-30-fish-gelatin-softgels-1-000-mg-per-softgel/82845",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "ultimate-omega-lemon",
    name: "Ultimate Omega Lemon",
    aliases: [
      "Nordic Naturals, Ultimate Omega Lemon, 640 mg per soft gel, 60 softgels",
      "Ultimate Omega Lemon",
    ],
    category: "fatty acids",
    mechanism: "Human evidence for EPA/DHA repletion and triglyceride lowering at sufficient dose",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "liquid",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "B",
    summary: "human evidence for EPA/DHA repletion and triglyceride lowering at sufficient dose",
    cautions: [
      "fish allergy",
      "anticoagulant caution at high dose",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
    ],
    citations: [
      {
        label: "PubMed search: Ultimate Omega Lemon",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=ultimate+omega+lemon",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/nordic-naturals-ultimate-omega-lemon-60-soft-gels-640-mg-per-soft-gel/43654",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/nordic-naturals-ultimate-omega-lemon-60-soft-gels-640-mg-per-soft-gel/43654",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "coq10",
    name: "CoQ10",
    aliases: [
      "NOW Foods, CoQ10, 100 mg, 50 softgels",
      "CoQ10",
    ],
    category: "antioxidants",
    mechanism: "Human evidence for statin-associated muscle symptoms is mixed but favorable in some trials; heart-failure evidence exists for ubiquinol forms",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 100.0, high: 200.0, unit: "mg", upperLimit: undefined },
    timing: "with a fat-containing meal",
    evidenceGrade: "B",
    summary: "human evidence for statin-associated muscle symptoms is mixed but favorable in some trials; heart-failure evidence exists for ubiquinol forms",
    cautions: [
      "may reduce warfarin effect (structural similarity to vitamin K, interaction unverified in magnitude)",
      "can cause insomnia if taken late",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: CoQ10",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=coq10",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-coq10-100-mg-50-softgels/120076",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-coq10-100-mg-50-softgels/120076",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "longevity",
      "cardiovascular support",
    ],
  },
];
