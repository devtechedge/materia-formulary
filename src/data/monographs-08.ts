// Generated from supplement-research.md by scripts/generate-data.py.
// Entries 92 to 104. Do not hand edit.

import type { Monograph } from "@/lib/types";

export const batch08: Monograph[] = [
  {
    slug: "sleep",
    name: "Sleep",
    aliases: [
      "NOW Foods, Sleep, 90 veg capsules",
      "Sleep",
    ],
    category: "sleep/mood",
    mechanism: "Valerian, 5-HTP and GABA blend; valerian human evidence is weak and inconsistent",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "30-60 minutes before sleep",
    evidenceGrade: "B",
    summary: "valerian, 5-HTP and GABA blend; valerian human evidence is weak and inconsistent",
    cautions: [
      "5-HTP serotonin-interaction caution with SSRI/SNRI/MAOI drugs",
      "avoid alcohol and driving after use",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Sleep",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=sleep",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-sleep-90-veg-capsules/39374",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-sleep-90-veg-capsules/39374",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "sleep quality",
    ],
  },
  {
    slug: "5-htp-with-glycine-taurine-and-inositol",
    name: "5-HTP with Glycine, Taurine & Inositol",
    aliases: [
      "NOW Foods, 5-HTP with Glycine, Taurine & Inositol, 60 veg capsules",
      "5-HTP with Glycine, Taurine & Inositol",
    ],
    category: "sleep/mood",
    mechanism: "Glycine has small human sleep data; 5-HTP evidence is low quality",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "bedtime",
      },
    ],
    doseRange: { low: 1.0, high: 2.0, unit: "capsules", upperLimit: undefined },
    timing: "before bed",
    evidenceGrade: "B",
    summary: "glycine has small human sleep data; 5-HTP evidence is low quality",
    cautions: [
      "same serotonin-syndrome caution with serotonergic drugs",
    ],
    interactionRuleIds: [
      "R007",
      "R008",
    ],
    citations: [
      {
        label: "PubMed search: 5-HTP with Glycine, Taurine & Inositol",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=5+htp+with+glycine+taurine+and+inositol",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-5-htp-with-glycine-taurine-inositol-60-veg-capsules/593",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-5-htp-with-glycine-taurine-inositol-60-veg-capsules/593",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "sleep quality",
    ],
  },
  {
    slug: "berberine-hcl",
    name: "Berberine HCl",
    aliases: [
      "NOW Foods, Berberine HCl, 500 mg, 90 veg capsules",
      "Berberine HCl",
    ],
    category: "metabolic",
    mechanism: "Human meta-analyses show modest fasting glucose and lipid improvements, but trials vary in quality",
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
    doseRange: { low: 500.0, high: 500.0, unit: "mg", upperLimit: undefined },
    timing: "with meals to reduce GI upset",
    evidenceGrade: "B",
    summary: "human meta-analyses show modest fasting glucose and lipid improvements, but trials vary in quality",
    cautions: [
      "can inhibit CYP3A4/2D6 and affect many drugs",
      "caution with diabetes medications due to hypoglycemia",
      "avoid in pregnancy",
    ],
    interactionRuleIds: [
      "R009",
    ],
    citations: [
      {
        label: "PubMed search: Berberine HCl",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=berberine+hcl",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-berberine-hcl-500-mg-90-veg-capsules/148551",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-berberine-hcl-500-mg-90-veg-capsules/148551",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "metabolic health",
      "cardiovascular support",
    ],
  },
  {
    slug: "chromium-picolinate",
    name: "Chromium Picolinate",
    aliases: [
      "NOW Foods, Chromium Picolinate, 200 mcg, 250 veg capsules",
      "Chromium Picolinate",
    ],
    category: "metabolic",
    mechanism: "Human evidence for glucose metabolism is modest and most evident in chromium-deficient people",
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
    doseRange: { low: 200.0, high: 400.0, unit: "mcg", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "B",
    summary: "human evidence for glucose metabolism is modest and most evident in chromium-deficient people",
    cautions: [
      "caution with insulin and oral hypoglycemics (unverified magnitude)",
      "high doses may affect kidney/liver (rare)",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Chromium Picolinate",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=chromium+picolinate",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-chromium-picolinate-200-mcg-250-veg-capsules/508",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-chromium-picolinate-200-mcg-250-veg-capsules/508",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "metabolic health",
    ],
  },
  {
    slug: "berberine-glucose-support",
    name: "Berberine Glucose Support",
    aliases: [
      "NOW Foods, Berberine Glucose Support, 60 softgels",
      "Berberine Glucose Support",
    ],
    category: "metabolic",
    mechanism: "Berberine ingredient-level evidence applies; blend outcome data limited",
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
    evidenceGrade: "C",
    summary: "berberine ingredient-level evidence applies; blend outcome data limited",
    cautions: [
      "same berberine CYP and glucose-lowering cautions",
    ],
    interactionRuleIds: [
      "R009",
    ],
    citations: [
      {
        label: "PubMed search: Berberine Glucose Support",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=berberine+glucose+support",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-berberine-glucose-support-60-softgels/151146",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-berberine-glucose-support-60-softgels/151146",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "metabolic health",
    ],
  },
  {
    slug: "glucose-metabolic-support",
    name: "Glucose Metabolic Support",
    aliases: [
      "NOW Foods, Glucose Metabolic Support, 90 veg capsules",
      "Glucose Metabolic Support",
    ],
    category: "metabolic",
    mechanism: "Ingredient-level evidence only; product-specific human data not established",
    forms: [
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
    summary: "ingredient-level evidence only; product-specific human data not established",
    cautions: [
      "caution with diabetes drugs",
      "check label for multiple glucose-active ingredients",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Glucose Metabolic Support",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=glucose+metabolic+support",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-glucose-metabolic-support-90-veg-capsules/628",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-glucose-metabolic-support-90-veg-capsules/628",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "metabolic health",
    ],
  },
  {
    slug: "clinically-advanced-hair-skin-and-nails",
    name: "Clinically Advanced Hair Skin & Nails",
    aliases: [
      "NOW Foods Solutions, Clinically Advanced Hair Skin & Nails, 90 veg capsules",
      "Clinically Advanced Hair Skin & Nails",
    ],
    category: "skin/hair/nails",
    mechanism: "Contains Cynatine solubilized keratin, biotin, hyaluronic acid and vitamins; keratin has small human trials for hair and nails",
    forms: [
      {
        name: "veg capsules",
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
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "B",
    summary: "contains Cynatine solubilized keratin, biotin, hyaluronic acid and vitamins; keratin has small human trials for hair and nails",
    cautions: [
      "high biotin can interfere with thyroid and troponin lab assays",
      "stop 2-3 days before blood tests if advised",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Clinically Advanced Hair Skin & Nails",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=clinically+advanced+hair+skin+and+nails",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-solutions-clinically-advanced-hair-skin-nails-90-veg-capsules/53196",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-solutions-clinically-advanced-hair-skin-nails-90-veg-capsules/53196",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "skin elasticity",
    ],
  },
  {
    slug: "vegan-hair-skin-and-nails",
    name: "Vegan Hair Skin & Nails",
    aliases: [
      "NOW Foods Solutions, Vegan Hair Skin & Nails, 90 veg capsules",
      "Vegan Hair Skin & Nails",
    ],
    category: "skin/hair/nails",
    mechanism: "Vegan formula with biotin, vitamin C and E; biotin deficiency correction is evidence-based, cosmetic effects in nondeficient people are not",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 1, high: 1, unit: "serving", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "D",
    summary: "vegan formula with biotin, vitamin C and E; biotin deficiency correction is evidence-based, cosmetic effects in nondeficient people are not",
    cautions: [
      "biotin lab assay interference as above",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Vegan Hair Skin & Nails",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=vegan+hair+skin+and+nails",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-solutions-vegan-hair-skin-nails-90-veg-capsules/86316",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-solutions-vegan-hair-skin-nails-90-veg-capsules/86316",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "skin elasticity",
    ],
  },
  {
    slug: "liquid-hyaluronic-acid-berry",
    name: "Liquid Hyaluronic Acid Berry",
    aliases: [
      "NOW Foods, Liquid Hyaluronic Acid Berry, 100 mg, 16 fl oz",
      "Liquid Hyaluronic Acid Berry",
    ],
    category: "skin/hair/nails",
    mechanism: "Small human trials support skin hydration with oral hyaluronic acid",
    forms: [
      {
        name: "liquid",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 100.0, high: 100.0, unit: "mg", upperLimit: undefined },
    timing: "any time, can be taken straight or in water",
    evidenceGrade: "B",
    summary: "small human trials support skin hydration with oral hyaluronic acid",
    cautions: [
      "no established drug interaction",
      "caution in pregnancy (insufficient data)",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Liquid Hyaluronic Acid Berry",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=liquid+hyaluronic+acid+berry",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/now-foods-liquid-hyaluronic-acid-berry-100-mg-16-fl-oz-473-ml/39054",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/now-foods-liquid-hyaluronic-acid-berry-100-mg-16-fl-oz-473-ml/39054",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "skin elasticity",
      "joint repair",
    ],
  },
  {
    slug: "biotin-with-hyaluronic-acid",
    name: "Biotin with Hyaluronic Acid",
    aliases: [
      "Micro Ingredients, Biotin with Hyaluronic Acid, 365 softgels",
      "Biotin with Hyaluronic Acid",
    ],
    category: "skin/hair/nails",
    mechanism: "Biotin works for deficiency-related hair/nail problems; 10,000 mcg exceeds need and cosmetic benefit in nondeficient adults is unverified",
    forms: [
      {
        name: "softgels",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 10000.0, high: 10000.0, unit: "mcg", upperLimit: undefined },
    timing: "with meals",
    evidenceGrade: "C",
    summary: "biotin works for deficiency-related hair/nail problems; 10,000 mcg exceeds need and cosmetic benefit in nondeficient adults is unverified",
    cautions: [
      "biotin strongly interferes with troponin and thyroid lab tests",
      "stop before blood draws per lab guidance",
    ],
    interactionRuleIds: [],
    citations: [
      {
        label: "PubMed search: Biotin with Hyaluronic Acid",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=biotin+with+hyaluronic+acid",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/micro-ingredients-biotin-with-hyaluronic-acid-365-softgels/146522",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/micro-ingredients-biotin-with-hyaluronic-acid-365-softgels/146522",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "skin elasticity",
    ],
  },
  {
    slug: "nmn",
    name: "NMN",
    aliases: [
      "Micro Ingredients, NMN, 100 mg per capsule, 120 vegetarian capsules",
      "NMN",
    ],
    category: "longevity/NAD",
    mechanism: "NMN raises blood NAD+ in humans (pharmacodynamic), clinical disease outcomes remain unproven",
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
    doseRange: { low: 100.0, high: 300.0, unit: "mg", upperLimit: undefined },
    timing: "morning with food",
    evidenceGrade: "B",
    summary: "NMN raises blood NAD+ in humans (pharmacodynamic), clinical disease outcomes remain unproven",
    cautions: [
      "no established drug interaction",
      "avoid combining multiple NAD precursors without need",
    ],
    interactionRuleIds: [
      "R030",
    ],
    citations: [
      {
        label: "PubMed search: NMN",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=nmn",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/micro-ingredients-nmn-120-vegetarian-capsules-100-mg-per-capsule/152169",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/micro-ingredients-nmn-120-vegetarian-capsules-100-mg-per-capsule/152169",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "mitochondrial energy",
      "longevity",
    ],
  },
  {
    slug: "nmn-optimized-nad",
    name: "NMN Optimized NAD+",
    aliases: [
      "Life Extension, NMN Optimized NAD+, 90 vegetarian capsules",
      "NMN Optimized NAD+",
    ],
    category: "longevity/NAD",
    mechanism: "NAD+ precursor pharmacodynamics are human-supported, health-span outcomes are not",
    forms: [
      {
        name: "veg capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 300.0, high: 300.0, unit: "mg", upperLimit: undefined },
    timing: "morning with food",
    evidenceGrade: "B",
    summary: "NAD+ precursor pharmacodynamics are human-supported, health-span outcomes are not",
    cautions: [
      "resveratrol/quercetin CYP interaction theoretical",
      "anticoagulant caution (unverified significance)",
    ],
    interactionRuleIds: [
      "R030",
    ],
    citations: [
      {
        label: "PubMed search: NMN Optimized NAD+",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=nmn+optimized+nad",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/life-extension-nmn-optimized-nad-90-vegetarian-capsules/162458",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/life-extension-nmn-optimized-nad-90-vegetarian-capsules/162458",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "mitochondrial energy",
      "longevity",
    ],
  },
  {
    slug: "nmn-complex-with-trans-resveratrol-and-quercetin",
    name: "NMN Complex with trans-Resveratrol and Quercetin",
    aliases: [
      "California Gold Nutrition, NMN Complex with trans-Resveratrol and Quercetin, 60 veggie capsules",
      "NMN Complex with trans-Resveratrol and Quercetin",
    ],
    category: "longevity/NAD",
    mechanism: "Ingredient-level NAD+ and antioxidant rationale; combination outcomes not established",
    forms: [
      {
        name: "veggie capsules",
        note: "Form as listed in the source catalog.",
        elementalMg: 1,
        timing: "morning_food",
      },
    ],
    doseRange: { low: 150.0, high: 150.0, unit: "mg", upperLimit: undefined },
    timing: "morning with food",
    evidenceGrade: "D",
    summary: "ingredient-level NAD+ and antioxidant rationale; combination outcomes not established",
    cautions: [
      "resveratrol and quercetin drug-metabolism interactions (unverified clinical significance)",
    ],
    interactionRuleIds: [
      "R030",
    ],
    citations: [
      {
        label: "PubMed search: NMN Complex with trans-Resveratrol and Quercetin",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=nmn+complex+with+trans+resveratrol+and+quercetin",
        kind: "pubmed",
      },
      {
        label: "Source listing",
        url: "https://www.iherb.com/pr/california-gold-nutrition-nmn-complex-with-trans-resveratrol-quercetin-phytosome-complex-apigenin-and-luteolin-60-veggie-capsules/137778",
        kind: "vendor",
      },
    ],
    provenance: "https://www.iherb.com/pr/california-gold-nutrition-nmn-complex-with-trans-resveratrol-quercetin-phytosome-complex-apigenin-and-luteolin-60-veggie-capsules/137778",
    lastReviewed: "2026-11-26",
    reviewer: "DM",
    goals: [
      "mitochondrial energy",
      "longevity",
    ],
  },
];
