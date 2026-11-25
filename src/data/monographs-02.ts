// Generated from supplement-research.md by scripts/generate-data.py.
// Entries 14 to 26. Do not hand edit.

import type { Monograph } from "@/lib/types";

export const batch02: Monograph[] = [
  {
    slug: "vitamin-d3-k2-as-mk-7",
    name: "Vitamin D3 + K2 as MK-7",
    aliases: [
      "California Gold Nutrition, Vitamin D3 + K2 as MK-7, 180 veggie capsules",
      "Vitamin D3 + K2 as MK-7",
    ],
    category: "vitamins",
    mechanism: "D3 strong for deficiency; K2 cardiovascular and bone outcome trials ongoing and mixed",
    forms: [
      {
        name: "veggie capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 5000.0, high: 5000.0, unit: "IU", upperLimit: undefined },
    timing: "with a fatty meal",
    evidenceGrade: "C",
    summary: "D3 strong for deficiency; K2 cardiovascular and bone outcome trials ongoing and mixed",
    cautions: [
      "warfarin interaction",
      "higher D3 dose needs blood-level monitoring",
    ],
    interactionRuleIds: [
      "R012",
      "R029",
    ],
    citations: [
      {
        label: "PubMed search: Vitamin D3 + K2 as MK-7",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+d3+k2+as+mk+7",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/california-gold-nutrition-vitamin-d3-k2-as-mk-7-180-veggie-capsules/124745",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/california-gold-nutrition-vitamin-d3-k2-as-mk-7-180-veggie-capsules/124745",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "methyl-b-12",
    name: "Methyl B-12",
    aliases: [
      "NOW Foods, Methyl B-12, 1,000 mcg, 100 lozenges",
      "Methyl B-12",
    ],
    category: "vitamins",
    mechanism: "Human evidence strong for correcting B12 deficiency, especially with methylcobalamin; high dose without deficiency has limited benefit",
    forms: [
      {
        name: "lozenges",
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
        name: "sprays",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
    ],
    doseRange: { low: 1000.0, high: 1000.0, unit: "mcg", upperLimit: undefined },
    timing: "sublingually on empty stomach or any time",
    evidenceGrade: "A",
    summary: "human evidence strong for correcting B12 deficiency, especially with methylcobalamin; high dose without deficiency has limited benefit",
    cautions: [
      "may mask folate deficiency if used alone at very high dose",
      "acne-like reactions reported anecdotally",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Methyl B-12",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=methyl+b+12",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-methyl-b-12-1-000-mcg-100-lozenges/449",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-methyl-b-12-1-000-mcg-100-lozenges/449",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "methyl-b-12-2",
    name: "Methyl B-12",
    aliases: [
      "NOW Foods, Methyl B-12, 5,000 mcg, 60 lozenges",
      "Methyl B-12",
    ],
    category: "vitamins",
    mechanism: "Same deficiency-correction evidence; no proven extra benefit of 5,000 mcg in nondeficient adults",
    forms: [
      {
        name: "lozenges",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 5000.0, high: 5000.0, unit: "mcg", upperLimit: undefined },
    timing: "sublingually",
    evidenceGrade: "D",
    summary: "same deficiency-correction evidence; no proven extra benefit of 5,000 mcg in nondeficient adults",
    cautions: [
      "same caution as lower-dose B12",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Methyl B-12",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=methyl+b+12+2",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-methyl-b-12-60-lozenges/448",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-methyl-b-12-60-lozenges/448",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "folic-acid",
    name: "Folic Acid",
    aliases: [
      "NOW Foods, Folic Acid, 800 mcg, 250 tablets",
      "Folic Acid",
    ],
    category: "vitamins",
    mechanism: "Strong human evidence for preventing neural tube defects and correcting folate deficiency",
    forms: [
      {
        name: "tablets",
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
    ],
    doseRange: { low: 400.0, high: 800.0, unit: "mcg", upperLimit: undefined },
    timing: "any time with food",
    evidenceGrade: "A",
    summary: "strong human evidence for preventing neural tube defects and correcting folate deficiency",
    cautions: [
      "high folate can mask B12 deficiency",
      "caution with antifolate drugs (unverified interaction detail)",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Folic Acid",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=folic+acid",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-folic-acid-250-tablets/601",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-folic-acid-250-tablets/601",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "co-enzyme-b-complex",
    name: "Co-Enzyme B-Complex",
    aliases: [
      "NOW Foods, Co-Enzyme B-Complex, 60 veg capsules",
      "Co-Enzyme B-Complex",
    ],
    category: "vitamins",
    mechanism: "Human evidence supports correcting multiple B vitamin deficiencies; high-dose B-complex benefits in well-nourished adults are less certain",
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
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "morning or with breakfast, since B vitamins can be energizing",
    evidenceGrade: "B",
    summary: "human evidence supports correcting multiple B vitamin deficiencies; high-dose B-complex benefits in well-nourished adults are less certain",
    cautions: [
      "high niacin can flush",
      "high B6 long-term can cause neuropathy",
      "check total dose from all sources",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Co-Enzyme B-Complex",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=co+enzyme+b+complex",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://fi.iherb.com/pr/now-foods-co-enzyme-b-complex-60-veg-capsules/71698",
        kind: "vendor",
      },
    ],
    provenance: "https://fi.iherb.com/pr/now-foods-co-enzyme-b-complex-60-veg-capsules/71698",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "bioactive-complete-b-complex",
    name: "BioActive Complete B-Complex",
    aliases: [
      "Life Extension, BioActive Complete B-Complex, 60 vegetarian capsules",
      "BioActive Complete B-Complex",
    ],
    category: "vitamins",
    mechanism: "Same evidence pattern; methylated and coenzyme forms have better absorption in some people",
    forms: [
      {
        name: "vegetarian capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "morning with food",
    evidenceGrade: "D",
    summary: "same evidence pattern; methylated and coenzyme forms have better absorption in some people",
    cautions: [
      "check label for high B6/niacin",
      "avoid doubling with other B complexes",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: BioActive Complete B-Complex",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=bioactive+complete+b+complex",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/life-extension-bioactive-complete-b-complex-60-vegetarian-capsules/67051",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/life-extension-bioactive-complete-b-complex-60-vegetarian-capsules/67051",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "basic-nutrients-2-day",
    name: "Basic Nutrients 2/Day",
    aliases: [
      "Thorne, Basic Nutrients 2/Day, 60 capsules",
      "Basic Nutrients 2/Day",
    ],
    category: "vitamins",
    mechanism: "Human evidence for filling broad micronutrient gaps, not for treating disease in well-nourished people",
    forms: [
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "B",
    summary: "human evidence for filling broad micronutrient gaps, not for treating disease in well-nourished people",
    cautions: [
      "contains vitamin K, caution with warfarin",
      "follow label rather than adding separate high-dose vitamins",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Basic Nutrients 2/Day",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=basic+nutrients+2+day",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/thorne-basic-nutrients-2-day-60-capsules/85476",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/thorne-basic-nutrients-2-day-60-capsules/85476",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "e-400-with-mixed-tocopherols",
    name: "E-400 with Mixed Tocopherols",
    aliases: [
      "NOW Foods, E-400 with Mixed Tocopherols, 400 IU, 250 softgels",
      "E-400 with Mixed Tocopherols",
    ],
    category: "vitamins",
    mechanism: "Human evidence for correcting vitamin E deficiency; supplementation for cardiovascular or cancer prevention is not supported and high dose may be harmful",
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
    ],
    doseRange: { low: 100.0, high: 400.0, unit: "IU", upperLimit: undefined },
    timing: "with a fat-containing meal",
    evidenceGrade: "B",
    summary: "human evidence for correcting vitamin E deficiency; supplementation for cardiovascular or cancer prevention is not supported and high dose may be harmful",
    cautions: [
      "high doses may increase bleeding risk with anticoagulants",
      "caution before surgery",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: E-400 with Mixed Tocopherols",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=e+400+with+mixed+tocopherols",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-e-400-with-mixed-tocopherols-268-mg-400-iu-250-softgels/304",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-e-400-with-mixed-tocopherols-268-mg-400-iu-250-softgels/304",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "antioxidant defence",
      "longevity",
    ],
  },
  {
    slug: "adam-superior-men-s-multi",
    name: "ADAM Superior Men's Multi",
    aliases: [
      "NOW Foods, ADAM Superior Men's Multi, 90 softgels",
      "ADAM Superior Men's Multi",
    ],
    category: "vitamins",
    mechanism: "Multivitamin human evidence supports correcting shortfalls, not disease prevention in well-nourished men",
    forms: [
      {
        name: "softgels",
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
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "B",
    summary: "multivitamin human evidence supports correcting shortfalls, not disease prevention in well-nourished men",
    cautions: [
      "contains vitamin K and iron",
      "caution with warfarin and with separate iron supplements",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: ADAM Superior Men's Multi",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=adam+superior+men+s+multi",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-adam-superior-men-s-multi-90-softgels/76072",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-adam-superior-men-s-multi-90-softgels/76072",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "magnesium-glycinate",
    name: "Magnesium Glycinate",
    aliases: [
      "NOW Foods, Magnesium Glycinate, 100 mg per tablet, 180 tablets",
      "Magnesium Glycinate",
    ],
    category: "minerals",
    mechanism: "Human evidence for correcting deficiency and modest sleep/muscle relaxation benefits; glycine chelate is well absorbed",
    forms: [
      {
        name: "tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "evening",
      },
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "evening",
      },
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "evening",
      },
    ],
    doseRange: { low: 100.0, high: 300.0, unit: "mg", upperLimit: undefined },
    timing: "evening, or split with meals",
    evidenceGrade: "B",
    summary: "human evidence for correcting deficiency and modest sleep/muscle relaxation benefits; glycine chelate is well absorbed",
    cautions: [
      "high doses cause diarrhea",
      "caution in kidney impairment",
      "separate from thyroid meds and bisphosphonates by 4 hours",
    ],
    interactionRuleIds: [
      "R012",
      "R013",
    ],
    citations: [
      {
        label: "PubMed search: Magnesium Glycinate",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=magnesium+glycinate",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-magnesium-glycinate-180-tablets-100-mg-per-tablet/88819",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-magnesium-glycinate-180-tablets-100-mg-per-tablet/88819",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "sleep quality",
    ],
  },
  {
    slug: "magnesium-citrate",
    name: "Magnesium Citrate",
    aliases: [
      "NOW Foods, Magnesium Citrate, 133 mg per capsule, 240 veg capsules",
      "Magnesium Citrate",
    ],
    category: "minerals",
    mechanism: "Human evidence for deficiency correction; constipation relief is a well-accepted use of citrate",
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
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "evening",
      },
      {
        name: "liquid",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "evening",
      },
    ],
    doseRange: { low: 200.0, high: 400.0, unit: "mg", upperLimit: undefined },
    timing: "evening or split doses",
    evidenceGrade: "B",
    summary: "human evidence for deficiency correction; constipation relief is a well-accepted use of citrate",
    cautions: [
      "GI laxative effect",
      "caution in kidney disease",
      "separate from levothyroxine and antibiotics by 2-4 hours",
    ],
    interactionRuleIds: [
      "R012",
      "R013",
    ],
    citations: [
      {
        label: "PubMed search: Magnesium Citrate",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=magnesium+citrate",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-magnesium-citrate-240-veg-capsules-133-mg-per-capsule/78201",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-magnesium-citrate-240-veg-capsules-133-mg-per-capsule/78201",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "iron",
    name: "Iron",
    aliases: [
      "NOW Foods, Iron (Ferrochel bisglycinate), 18 mg, 120 veg capsules",
      "Iron",
    ],
    category: "minerals",
    mechanism: "Strong human evidence for iron-deficiency anemia; bisglycinate is better tolerated than ferrous sulfate",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
      {
        name: "tablets",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
      {
        name: "liquid",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
    ],
    doseRange: { low: 18.0, high: 36.0, unit: "mg", upperLimit: undefined },
    timing: "on empty stomach if tolerated, with vitamin C; avoid with tea/coffee/calcium",
    evidenceGrade: "A",
    summary: "strong human evidence for iron-deficiency anemia; bisglycinate is better tolerated than ferrous sulfate",
    cautions: [
      "constipating and darkens stool",
      "keep away from children (overdose risk)",
      "separate from thyroid meds, calcium and zinc",
    ],
    interactionRuleIds: [
      "R002",
      "R016",
    ],
    citations: [
      {
        label: "PubMed search: Iron",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=iron",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-iron-18-mg-120-veg-capsules/10481",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-iron-18-mg-120-veg-capsules/10481",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
  {
    slug: "zinc",
    name: "Zinc",
    aliases: [
      "NOW Foods, Zinc, 50 mg, 100 tablets",
      "Zinc",
    ],
    category: "minerals",
    mechanism: "Human evidence for deficiency correction and immune support",
    forms: [
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
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 15.0, high: 50.0, unit: "mg", upperLimit: undefined },
    timing: "with food; avoid with iron/calcium",
    evidenceGrade: "B",
    summary: "human evidence for deficiency correction and immune support",
    cautions: [
      "chronic high dose causes copper depletion",
      "interferes with quinolone and tetracycline antibiotics",
    ],
    interactionRuleIds: [
      "R001",
      "R002",
      "R003",
      "R015",
    ],
    citations: [
      {
        label: "PubMed search: Zinc",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=zinc",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-zinc-50-mg-100-tablets/116598",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-zinc-50-mg-100-tablets/116598",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
    ],
  },
];
