// Generated from supplement-research.md by scripts/generate-data.py.
// Entries 1 to 13. Do not hand edit.

import type { Monograph } from "@/lib/types";

export const batch01: Monograph[] = [
  {
    slug: "collagen-hydrolysate",
    name: "Collagen Peptides Powder",
    aliases: [
      "NOW Foods, Collagen Peptides Powder (hydrolyzed collagen, bovine types I and III), 8 oz",
      "Collagen Peptides Powder",
    ],
    category: "skin/hair/nails",
    mechanism: "Human RCTs show modest improvements in skin elasticity and hydration and some joint pain outcomes at 2.5-10 g/day",
    forms: [
      {
        name: "powder",
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
        name: "tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 2.5, high: 10.0, unit: "g", upperLimit: undefined },
    timing: "any time, mixed into food or drink",
    evidenceGrade: "B",
    summary: "human RCTs show modest improvements in skin elasticity and hydration and some joint pain outcomes at 2.5-10 g/day",
    cautions: [
      "source is bovine, so avoid with beef restriction",
      "no well-established drug interaction",
    ],
    interactionRuleIds: [
      "R018",
    ],
    citations: [
      {
        label: "PubMed search: Collagen Peptides Powder",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=collagen+hydrolysate",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-collagen-peptides-powder-8-oz-227-g/86319",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-collagen-peptides-powder-8-oz-227-g/86319",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "skin elasticity",
      "joint repair",
    ],
    cofactors: [
      "vitamin-c",
    ],
  },
  {
    slug: "nac",
    name: "NAC",
    aliases: [
      "NOW Foods, NAC (N-acetyl cysteine), 1,000 mg, 120 tablets",
      "NAC",
    ],
    category: "amino acids",
    mechanism: "Strong mechanistic rationale plus human trials for acetaminophen overdose and some respiratory/mucous outcomes, weaker evidence for general antioxidant use",
    forms: [
      {
        name: "tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
      {
        name: "pure powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
      {
        name: "effervescent",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
    ],
    doseRange: { low: 600.0, high: 1200.0, unit: "mg", upperLimit: 1200 },
    timing: "empty stomach or between meals; separate from antibiotics by 2 hours",
    evidenceGrade: "A",
    summary: "strong mechanistic rationale plus human trials for acetaminophen overdose and some respiratory/mucous outcomes, weaker evidence for general antioxidant use",
    cautions: [
      "may thin mucus and rarely cause GI upset",
      "caution with anticoagulants and nitroglycerin (unverified interaction magnitude)",
    ],
    interactionRuleIds: [
      "R005",
      "R014",
    ],
    citations: [
      {
        label: "PubMed search: NAC",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=nac",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-nac-1-000-mg-120-tablets/59157",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-nac-1-000-mg-120-tablets/59157",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "longevity",
    ],
  },
  {
    slug: "triple-strength-fish-oil",
    name: "Omega-3 Fish Oil",
    aliases: [
      "NOW Foods, Omega-3 Fish Oil, 1,000 mg, 180 EPA/120 DHA",
      "Omega-3 Fish Oil",
    ],
    category: "fatty acids",
    mechanism: "Strong human evidence for lowering triglycerides at 2-4 g EPA+DHA/day, more mixed for depression, cognition and general cardiovascular prevention",
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
        name: "enteric-coated softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1.0, high: 3.0, unit: "g", upperLimit: undefined },
    timing: "with meals containing fat to improve absorption",
    evidenceGrade: "A",
    summary: "strong human evidence for lowering triglycerides at 2-4 g EPA+DHA/day, more mixed for depression, cognition and general cardiovascular prevention",
    cautions: [
      "caution before surgery and with anticoagulants/antiplatelets at high doses",
      "fish allergy",
    ],
    interactionRuleIds: [
      "R004",
      "R025",
    ],
    citations: [
      {
        label: "PubMed search: Omega-3 Fish Oil",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=triple+strength+fish+oil",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-omega-3-fish-oil-180-softgels-1-000-mg-per-softgel/724",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-omega-3-fish-oil-180-softgels-1-000-mg-per-softgel/724",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "cardiovascular support",
    ],
  },
  {
    slug: "zinc-picolinate",
    name: "Zinc Picolinate",
    aliases: [
      "NOW Foods, Zinc Picolinate, 50 mg, 60 veg capsules",
      "Zinc Picolinate",
    ],
    category: "minerals",
    mechanism: "Human evidence for correcting deficiency and supporting immune function, not for megadosing beyond requirement",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "lozenges",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 15.0, high: 50.0, unit: "mg", upperLimit: 40 },
    timing: "with food if GI sensitive; avoid at the same time as iron or calcium",
    evidenceGrade: "B",
    summary: "human evidence for correcting deficiency and supporting immune function, not for megadosing beyond requirement",
    cautions: [
      "chronic high doses can cause copper deficiency and GI upset",
      "separate from quinolone/tetracycline antibiotics by 2-4 hours",
    ],
    interactionRuleIds: [
      "R001",
      "R002",
      "R003",
      "R015",
    ],
    citations: [
      {
        label: "PubMed search: Zinc Picolinate",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=zinc+picolinate",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-zinc-picolinate-50-mg-60-veg-capsules/117151",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-zinc-picolinate-50-mg-60-veg-capsules/117151",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "liposomal-glutathione",
    name: "Liposomal Glutathione",
    aliases: [
      "NOW Foods, Liposomal Glutathione, 250 mg, 60 veg capsules",
      "Liposomal Glutathione",
    ],
    category: "antioxidants",
    mechanism: "Mechanistic and small human studies show liposomal forms can raise blood glutathione more than plain oral glutathione, but clinical outcome data are limited",
    forms: [
      {
        name: "liposomal veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
      {
        name: "liquid packets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
      {
        name: "non-liposomal capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
    ],
    doseRange: { low: 250.0, high: 500.0, unit: "mg", upperLimit: undefined },
    timing: "between meals or as label directs; liquid liposomal forms often taken on empty stomach",
    evidenceGrade: "B",
    summary: "mechanistic and small human studies show liposomal forms can raise blood glutathione more than plain oral glutathione, but clinical outcome data are limited",
    cautions: [
      "caution in G6PD deficiency is theoretical and unverified",
      "generally well tolerated",
      "no established drug interaction",
    ],
    interactionRuleIds: [
      "R014",
    ],
    citations: [
      {
        label: "PubMed search: Liposomal Glutathione",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=liposomal+glutathione",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-liposomal-glutathione-60-veg-capsules-250-mg-per-capsule/162444",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-liposomal-glutathione-60-veg-capsules-250-mg-per-capsule/162444",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "longevity",
    ],
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu Copper Peptide",
    aliases: [
      "Neurogan Health, GHK-Cu Copper Peptide, 120 mcg, 60 tablets",
      "GHK-Cu Copper Peptide",
    ],
    category: "skin/hair/nails",
    mechanism: "Oral GHK-Cu human evidence is very limited (mechanistic and small topical studies mostly); topical copper peptides have more human cosmetic data than oral",
    forms: [
      {
        name: "oral tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "topical face serum",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "scalp serum",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1.0, high: 2.0, unit: "times", upperLimit: undefined },
    timing: "oral with water; topical on clean skin or scalp",
    evidenceGrade: "B",
    summary: "oral GHK-Cu human evidence is very limited (mechanistic and small topical studies mostly); topical copper peptides have more human cosmetic data than oral",
    cautions: [
      "avoid stacking with high-dose copper without need",
      "topical may sting with acids/retinoids (interaction unverified)",
    ],
    interactionRuleIds: [
      "R015",
    ],
    citations: [
      {
        label: "PubMed search: GHK-Cu Copper Peptide",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=ghk+cu",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/neurogan-health-ghk-cu-copper-peptide-120-mcg-60-tablets/150788",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/neurogan-health-ghk-cu-copper-peptide-120-mcg-60-tablets/150788",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "skin elasticity",
      "mitochondrial energy",
      "longevity",
    ],
  },
  {
    slug: "gold-c-usp-grade-vitamin-c",
    name: "Gold C USP Grade Vitamin C",
    aliases: [
      "California Gold Nutrition, Gold C USP Grade Vitamin C, 1,000 mg, 60 veggie capsules",
      "Gold C USP Grade Vitamin C",
    ],
    category: "vitamins",
    mechanism: "Human evidence for preventing deficiency and modestly shortening common-cold duration, weaker for treatment once symptoms start",
    forms: [
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "tablets",
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
      {
        name: "gummies",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 200.0, high: 2000.0, unit: "mg", upperLimit: undefined },
    timing: "with meals, divided if high dose",
    evidenceGrade: "B",
    summary: "human evidence for preventing deficiency and modestly shortening common-cold duration, weaker for treatment once symptoms start",
    cautions: [
      "high doses can cause diarrhea and increase oxalate stone risk in susceptible people",
      "caution with hemochromatosis",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Gold C USP Grade Vitamin C",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=gold+c+usp+grade+vitamin+c",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/california-gold-nutrition-gold-c-usp-grade-vitamin-c-1-000-mg-60-veggie-capsules/61864",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/california-gold-nutrition-gold-c-usp-grade-vitamin-c-1-000-mg-60-veggie-capsules/61864",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "antioxidant defence",
      "longevity",
    ],
  },
  {
    slug: "c-1000",
    name: "C-1000",
    aliases: [
      "NOW Foods, C-1000, 100 tablets",
      "C-1000",
    ],
    category: "vitamins",
    mechanism: "Same human evidence base as other ascorbic acid products; deficiency correction is well established",
    forms: [
      {
        name: "tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "chewables",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1000.0, high: 1000.0, unit: "mg", upperLimit: undefined },
    timing: "with food to reduce stomach upset",
    evidenceGrade: "A",
    summary: "same human evidence base as other ascorbic acid products; deficiency correction is well established",
    cautions: [
      "GI intolerance above 2 g/day",
      "caution with kidney stone history",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: C-1000",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=c+1000",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-c-1000-100-tablets/39672",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-c-1000-100-tablets/39672",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "c-1000-with-bioflavonoids",
    name: "C-1000 with Bioflavonoids",
    aliases: [
      "NOW Foods, C-1000 with Bioflavonoids, 250 veg capsules",
      "C-1000 with Bioflavonoids",
    ],
    category: "vitamins",
    mechanism: "Human data support vitamin C effect; added bioflavonoids have less independent evidence",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1000.0, high: 1000.0, unit: "mg", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "B",
    summary: "human data support vitamin C effect; added bioflavonoids have less independent evidence",
    cautions: [
      "same GI and stone cautions as plain vitamin C",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: C-1000 with Bioflavonoids",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=c+1000+with+bioflavonoids",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-c-1000-with-bioflavonoids-250-veg-capsules/475",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-c-1000-with-bioflavonoids-250-veg-capsules/475",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "antioxidant defence",
      "longevity",
    ],
  },
  {
    slug: "vitamin-d-3-high-potency",
    name: "Vitamin D-3 High Potency",
    aliases: [
      "NOW Foods, Vitamin D-3 High Potency, 2,000 IU, 240 softgels",
      "Vitamin D-3 High Potency",
    ],
    category: "vitamins",
    mechanism: "Strong human evidence for bone health and correcting deficiency; beyond sufficiency, outcome benefits are mixed",
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
        name: "liquid drops",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 800.0, high: 2000.0, unit: "IU", upperLimit: undefined },
    timing: "with the largest meal containing fat",
    evidenceGrade: "A",
    summary: "strong human evidence for bone health and correcting deficiency; beyond sufficiency, outcome benefits are mixed",
    cautions: [
      "caution with hypercalcemia, sarcoidosis and thiazide diuretics",
      "check blood levels before high doses",
    ],
    interactionRuleIds: [
      "R012",
      "R029",
    ],
    citations: [
      {
        label: "PubMed search: Vitamin D-3 High Potency",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+d+3+high+potency",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-vitamin-d-3-high-potency-2-000-iu-240-softgels/16272",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-vitamin-d-3-high-potency-2-000-iu-240-softgels/16272",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "vitamin-d3-and-k2",
    name: "Vitamin D3 & K2",
    aliases: [
      "NOW Foods, Vitamin D3 & K2, 120 capsules",
      "Vitamin D3 & K2",
    ],
    category: "vitamins",
    mechanism: "D3 has strong bone/deficiency evidence; K2 bone and cardiovascular outcome evidence is promising but still limited in humans",
    forms: [
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1000.0, high: 1000.0, unit: "IU", upperLimit: undefined },
    timing: "with a fat-containing meal",
    evidenceGrade: "A",
    summary: "D3 has strong bone/deficiency evidence; K2 bone and cardiovascular outcome evidence is promising but still limited in humans",
    cautions: [
      "K2 can interfere with warfarin and other vitamin K antagonists",
      "do not combine without medical advice",
    ],
    interactionRuleIds: [
      "R012",
      "R029",
    ],
    citations: [
      {
        label: "PubMed search: Vitamin D3 & K2",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+d3+and+k2",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-vitamin-d3-k2-120-capsules/10056",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-vitamin-d3-k2-120-capsules/10056",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "joint repair",
    ],
  },
  {
    slug: "mega-d3-and-mk-7",
    name: "Mega D3 & MK-7",
    aliases: [
      "NOW Foods, Mega D3 & MK-7, 60 capsules",
      "Mega D3 & MK-7",
    ],
    category: "vitamins",
    mechanism: "Same evidence split as D3 plus K2, with K2 outcome data still limited",
    forms: [
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with a fatty meal",
    evidenceGrade: "C",
    summary: "same evidence split as D3 plus K2, with K2 outcome data still limited",
    cautions: [
      "vitamin K2 caution with warfarin",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Mega D3 & MK-7",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=mega+d3+and+mk+7",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-mega-d3-mk-7-60-capsules/79866",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-mega-d3-mk-7-60-capsules/79866",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "liquid-d3-and-mk-7",
    name: "Liquid D3 & MK-7",
    aliases: [
      "NOW Foods, Liquid D3 & MK-7, 1 fl oz",
      "Liquid D3 & MK-7",
    ],
    category: "vitamins",
    mechanism: "D3 well supported; K2 human outcome evidence limited",
    forms: [
      {
        name: "liquid drops",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 2500.0, high: 2500.0, unit: "IU", upperLimit: undefined },
    timing: "with food, drops can be taken directly or in liquid",
    evidenceGrade: "B",
    summary: "D3 well supported; K2 human outcome evidence limited",
    cautions: [
      "warfarin interaction with K2",
      "do not exceed labeled dose due to higher D3 potency",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Liquid D3 & MK-7",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=liquid+d3+and+mk+7",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-liquid-d3-mk-7-natural-mint-1-fl-oz-30-ml/91613",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-liquid-d3-mk-7-natural-mint-1-fl-oz-30-ml/91613",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
];
