// Generated from supplement-research.md by scripts/generate-data.py.
// Entries 27 to 39. Do not hand edit.

import type { Monograph } from "@/lib/types";

export const batch03: Monograph[] = [
  {
    slug: "kelp",
    name: "Kelp",
    aliases: [
      "NOW Foods, Kelp, 325 mcg iodine, 250 veg capsules",
      "Kelp",
    ],
    category: "minerals",
    mechanism: "Iodine is essential for thyroid hormone synthesis; kelp iodine content varies, so evidence is stronger for defined iodine doses than for whole kelp",
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
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 150.0, high: 325.0, unit: "mcg", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "D",
    summary: "iodine is essential for thyroid hormone synthesis; kelp iodine content varies, so evidence is stronger for defined iodine doses than for whole kelp",
    cautions: [
      "excess iodine can trigger hypo- or hyperthyroidism",
      "caution with thyroid medication and amiodarone",
    ],
    interactionRuleIds: [
      "R010",
    ],
    citations: [
      {
        label: "PubMed search: Kelp",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=kelp",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-kelp-325-mcg-250-veg-capsules/15892",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-kelp-325-mcg-250-veg-capsules/15892",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "traditional support",
    ],
  },
  {
    slug: "thyroid-energy",
    name: "Thyroid Energy",
    aliases: [
      "NOW Foods, Thyroid Energy, 90 veg capsules",
      "Thyroid Energy",
    ],
    category: "minerals",
    mechanism: "Ingredient-level evidence for iodine and tyrosine adequacy; herbal blend outcome evidence in humans is limited",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "morning with food",
    evidenceGrade: "B",
    summary: "ingredient-level evidence for iodine and tyrosine adequacy; herbal blend outcome evidence in humans is limited",
    cautions: [
      "contains iodine and tyrosine",
      "caution with thyroid drugs, amiodarone and iodine sensitivity",
    ],
    interactionRuleIds: [
      "R010",
    ],
    citations: [
      {
        label: "PubMed search: Thyroid Energy",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=thyroid+energy",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-thyroid-energy-90-veg-capsules/843",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-thyroid-energy-90-veg-capsules/843",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "traditional support",
    ],
  },
  {
    slug: "calcium-and-magnesium",
    name: "Calcium & Magnesium",
    aliases: [
      "NOW Foods, Calcium & Magnesium, 250 tablets",
      "Calcium & Magnesium",
    ],
    category: "minerals",
    mechanism: "Human evidence supports adequate calcium plus vitamin D for bone health, not megadosing",
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
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 500.0, high: 1000.0, unit: "mg", upperLimit: undefined },
    timing: "split with meals",
    evidenceGrade: "B",
    summary: "human evidence supports adequate calcium plus vitamin D for bone health, not megadosing",
    cautions: [
      "calcium carbonate needs acid and can cause constipation",
      "separate from levothyroxine, iron, zinc and bisphosphonates",
    ],
    interactionRuleIds: [
      "R012",
      "R013",
      "R003",
      "R016",
      "R029",
    ],
    citations: [
      {
        label: "PubMed search: Calcium & Magnesium",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=calcium+and+magnesium",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-calcium-magnesium-250-tablets/453",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-calcium-magnesium-250-tablets/453",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "joint repair",
    ],
  },
  {
    slug: "boron",
    name: "Boron",
    aliases: [
      "NOW Foods, Boron, 3 mg, 250 veg capsules",
      "Boron",
    ],
    category: "minerals",
    mechanism: "Small human studies suggest boron may support bone mineralization and reduce urinary calcium loss, evidence limited",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 3.0, high: 6.0, unit: "mg", upperLimit: undefined },
    timing: "any time with food",
    evidenceGrade: "B",
    summary: "small human studies suggest boron may support bone mineralization and reduce urinary calcium loss, evidence limited",
    cautions: [
      "no well-established interaction",
      "avoid exceeding label without medical advice",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Boron",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=boron",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/c/now-foods",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/c/now-foods",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "joint repair",
    ],
  },
  {
    slug: "potassium-citrate",
    name: "Potassium Citrate",
    aliases: [
      "NOW Foods, Potassium Citrate, 99 mg, 180 veg capsules",
      "Potassium Citrate",
    ],
    category: "minerals",
    mechanism: "Human evidence for potassium adequacy lowering blood pressure in deficient people; supplement outcome data limited",
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
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 99.0, high: 300.0, unit: "mg", upperLimit: undefined },
    timing: "with meals and plenty of water",
    evidenceGrade: "B",
    summary: "human evidence for potassium adequacy lowering blood pressure in deficient people; supplement outcome data limited",
    cautions: [
      "caution in kidney disease and with ACE inhibitors, ARBs or potassium-sparing diuretics (hyperkalemia risk)",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Potassium Citrate",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=potassium+citrate",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/c/now-foods",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/c/now-foods",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "nutrient adequacy",
      "cardiovascular support",
    ],
  },
  {
    slug: "glycine-pure-powder",
    name: "Glycine Pure Powder",
    aliases: [
      "NOW Foods, Glycine Pure Powder, 1 lb",
      "Glycine Pure Powder",
    ],
    category: "amino acids",
    mechanism: "Small human trials suggest glycine before bed may improve sleep quality and daytime performance; broader claims are mechanistic",
    forms: [
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
      {
        name: "capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
    ],
    doseRange: { low: 3.0, high: 6.0, unit: "g", upperLimit: undefined },
    timing: "30-60 minutes before sleep for sleep use",
    evidenceGrade: "B",
    summary: "small human trials suggest glycine before bed may improve sleep quality and daytime performance; broader claims are mechanistic",
    cautions: [
      "generally well tolerated",
      "no established drug interaction (unverified)",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Glycine Pure Powder",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=glycine+pure+powder",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-glycine-pure-powder-1-lb-454-g/615",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-glycine-pure-powder-1-lb-454-g/615",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "sleep quality",
    ],
  },
  {
    slug: "glycine",
    name: "Glycine",
    aliases: [
      "NOW Foods, Glycine, 1,000 mg, 100 veg capsules",
      "Glycine",
    ],
    category: "amino acids",
    mechanism: "Same limited but real human sleep data",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
    ],
    doseRange: { low: 1.0, high: 3.0, unit: "g", upperLimit: undefined },
    timing: "evening for sleep",
    evidenceGrade: "B",
    summary: "same limited but real human sleep data",
    cautions: [
      "same as glycine powder",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Glycine",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=glycine",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-glycine-100-veg-capsules-1-000-mg-per-capsule/18106",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-glycine-100-veg-capsules-1-000-mg-per-capsule/18106",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "sleep quality",
    ],
  },
  {
    slug: "l-theanine",
    name: "L-Theanine",
    aliases: [
      "NOW Foods, L-Theanine, 200 mg, 120 veg capsules",
      "L-Theanine",
    ],
    category: "amino acids",
    mechanism: "Human trials show relaxation and attention effects, often with caffeine; standalone anxiety evidence is modest",
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
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
    ],
    doseRange: { low: 100.0, high: 400.0, unit: "mg", upperLimit: undefined },
    timing: "any time for calm focus, 30-60 minutes before bed for sleep",
    evidenceGrade: "B",
    summary: "human trials show relaxation and attention effects, often with caffeine; standalone anxiety evidence is modest",
    cautions: [
      "can add to sedative effects of drugs",
      "caution with very low blood pressure (unverified interaction magnitude)",
    ],
    interactionRuleIds: [
      "R017",
      "R026",
    ],
    citations: [
      {
        label: "PubMed search: L-Theanine",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=l+theanine",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-l-theanine-120-veg-capsules/54096",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-l-theanine-120-veg-capsules/54096",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "cognitive support",
      "sleep quality",
    ],
  },
  {
    slug: "l-arginine",
    name: "L-Arginine",
    aliases: [
      "NOW Foods, L-Arginine, 1,000 mg, 120 tablets",
      "L-Arginine",
    ],
    category: "amino acids",
    mechanism: "Human studies show modest blood-pressure and endothelial effects; evidence for exercise performance is mixed",
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
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "empty_stomach",
      },
    ],
    doseRange: { low: 2.0, high: 6.0, unit: "g", upperLimit: undefined },
    timing: "between meals, away from lysine-rich foods if targeting nitric oxide",
    evidenceGrade: "B",
    summary: "human studies show modest blood-pressure and endothelial effects; evidence for exercise performance is mixed",
    cautions: [
      "caution with nitrates, PDE5 inhibitors and low blood pressure",
      "avoid immediately after myocardial infarction without medical advice",
      "can reactivate herpes in susceptible people",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: L-Arginine",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=l+arginine",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-l-arginine-1-000-mg-120-tablets/411",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-l-arginine-1-000-mg-120-tablets/411",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
      "cardiovascular support",
    ],
  },
  {
    slug: "sports-bcaa-powder",
    name: "Sports BCAA Powder",
    aliases: [
      "NOW Foods, Sports BCAA Powder, 12 oz",
      "Sports BCAA Powder",
    ],
    category: "amino acids",
    mechanism: "Human evidence supports muscle protein synthesis when total protein intake is adequate; BCAA alone is less effective than complete protein",
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
    doseRange: { low: 5.0, high: 10.0, unit: "g", upperLimit: undefined },
    timing: "before, during or after exercise",
    evidenceGrade: "B",
    summary: "human evidence supports muscle protein synthesis when total protein intake is adequate; BCAA alone is less effective than complete protein",
    cautions: [
      "caution in kidney disease and with high protein loads",
      "avoid stacking with other amino products without need",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Sports BCAA Powder",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=sports+bcaa+powder",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-sports-branched-chain-amino-acid-powder-12-oz-340-g/3321",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-sports-branched-chain-amino-acid-powder-12-oz-340-g/3321",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
    ],
  },
  {
    slug: "sport-pure-creatine-monohydrate",
    name: "Sport Pure Creatine Monohydrate",
    aliases: [
      "California Gold Nutrition, Sport Pure Creatine Monohydrate, 1 lb",
      "Sport Pure Creatine Monohydrate",
    ],
    category: "amino acids",
    mechanism: "One of the strongest human evidence bases in sports nutrition for strength and lean mass",
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
        name: "gummies",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 3.0, high: 5.0, unit: "g", upperLimit: undefined },
    timing: "any time, with food or post-workout",
    evidenceGrade: "A",
    summary: "one of the strongest human evidence bases in sports nutrition for strength and lean mass",
    cautions: [
      "caution in kidney disease",
      "weight gain from water retention is expected",
      "separate from nephrotoxic drugs only with medical advice",
    ],
    interactionRuleIds: [
      "R023",
    ],
    citations: [
      {
        label: "PubMed search: Sport Pure Creatine Monohydrate",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=sport+pure+creatine+monohydrate",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/california-gold-nutrition-sport-pure-creatine-monohydrate-unflavored-1-lb-454-g/71026",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/california-gold-nutrition-sport-pure-creatine-monohydrate-unflavored-1-lb-454-g/71026",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
    ],
  },
  {
    slug: "creatine",
    name: "Creatine",
    aliases: [
      "Thorne, Creatine, 450 g",
      "Creatine",
    ],
    category: "amino acids",
    mechanism: "Same strong human strength/performance evidence as other creatine monohydrate products",
    forms: [
      {
        name: "powder",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 3.0, high: 5.0, unit: "g", upperLimit: undefined },
    timing: "daily, post-workout is convenient",
    evidenceGrade: "A",
    summary: "same strong human strength/performance evidence as other creatine monohydrate products",
    cautions: [
      "same kidney caution and water-weight note",
    ],
    interactionRuleIds: [
      "R023",
    ],
    citations: [
      {
        label: "PubMed search: Creatine",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=creatine",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/thorne-creatine-16-oz-450-g/70006",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/thorne-creatine-16-oz-450-g/70006",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
    ],
  },
  {
    slug: "sports-amino-complete",
    name: "Sports Amino Complete",
    aliases: [
      "NOW Foods, Sports Amino Complete, 360 capsules",
      "Sports Amino Complete",
    ],
    category: "amino acids",
    mechanism: "Blend of free amino acids and protein; evidence applies more to adequate protein intake than to the blend itself",
    forms: [
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
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with meals or around exercise",
    evidenceGrade: "D",
    summary: "blend of free amino acids and protein; evidence applies more to adequate protein intake than to the blend itself",
    cautions: [
      "caution with kidney disease",
      "avoid doubling with other amino acid formulas",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Sports Amino Complete",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=sports+amino+complete",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-sports-amino-complete-360-capsules/5421",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-sports-amino-complete-360-capsules/5421",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "antioxidant defence",
    ],
  },
];
