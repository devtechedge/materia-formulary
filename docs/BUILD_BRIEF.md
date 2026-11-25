You are expert fullstack engineers at maximum reasoning effort with the full one million token context window. Build MATERIA, a production-grade, independent, evidence-graded clinical formulary and supplement stack audit workbench. All requirements are binding; where silent, use judgment in service of the mission, never importing another category's feature.

ROLE AND MISSION
Build the reference desk an integrative clinician, dietitian, pharmacist, researcher, or careful self-educator opens before changing a supplement routine. MATERIA sells nothing and does not diagnose or prescribe. It organises what is known about holistic healthcare supplements, grades that knowledge honestly, and checks a proposed stack for deterministic, explainable problems. The core artifact is a Protocol Card: a time-phased, evidence-linked dosing schedule a human can print and take to a qualified professional. The second is a Stack Audit: severity-ranked findings, each tied to a rule id, two monographs, a source, and a concrete action.

AUDIENCE AND FEELING
The user is literate, cautious, tired of marketing copy. Aim for a quiet medical reading room: calm, exact, slightly archival. A page should look like a maintained formulary, not a shop or a blog.

DIFFERENTIATION, AS NEGATIVES
Share no domain with any existing project. No storefront, buy button, cart, checkout, payment, wishlist, coupon, GST invoice, or shipping estimate. No patient record, symptom history tied to identity, clinician handoff, consent brief, or stored protected health information. No procurement, supplier dossier, request for quotation, purchase order, lot passport, or approval workflow. No chat advisor, LLM recommendation, symptom checker, or diagnostic engine. No map, atlas, timeline, storyboard, audio mixer, whiteboard, flowchart IDE, block editor, notes app, job board, crypto interface, or generic admin panel. Do not reuse any prior palette, type trio, layout, or interaction model. If such a shape appears, return to the formulary model.

FIRST VISIT
The landing screen is a formulary desk with three starting states, usable without an account. Browse opens a searchable shelf of at least one hundred monographs with category filters and an evidence grade on every row. Draft opens a goal-first builder with chips for joint repair, cognitive support, antioxidant defence, skin elasticity, sleep quality, and mitochondrial energy. Audit opens a stack input where the visitor lists or pastes what they take. Within thirty seconds of typing a name, show a real result: a monograph card with common forms, typical dose range, best timing, evidence grade, one caution, and a source link. Preload a sample stack with collagen hydrolysate, NAC, triple strength fish oil, zinc picolinate, liposomal glutathione, and GHK-Cu.

CORE LOOP
Search a monograph, compare forms, add a form and dose to a working stack, run the deterministic audit, read findings, adjust, export the Protocol Card. The loop is deterministic: the same stack yields the same findings, order, and wording. A visitor completes the loop signed out. An optional account saves named stacks, scoped to that account.

DATASET AND FEATURES
Ship at least one hundred monographs from real top-selling NOW Foods and iHerb products. Each has slug, name, aliases, category, one-sentence mechanism, forms with elemental versus compound distinctions, adult dose range with units, timing relative to food, evidence grade A through D, an honest summary, cautions, interaction rule ids, a public citation, a vendor provenance URL, and a reviewed date with reviewer initials. Include collagen hydrolysate, NAC, triple strength fish oil EPA and DHA, zinc picolinate, liposomal glutathione, and GHK-Cu copper peptide as first-class entries with accurate forms and doses. Cover vitamins, minerals, amino acids, fatty acids, antioxidants, adaptogens, digestive, joint and bone, cognitive, sleep and mood, cardiovascular, metabolic, skin hair and nails, NAD and longevity, greens, probiotics, enzymes, and herbal extracts.

Compare forms side by side: why zinc picolinate differs from zinc oxide, liposomal glutathione from reduced glutathione, triglyceride fish oil from ethyl ester, collagen hydrolysate from undenatured collagen, magnesium glycinate from oxide, and GHK-Cu from GHK without copper. Label mechanistic claims as mechanistic.

The interaction engine has at least twenty-five deterministic rules, each with id, severity from critical through minor, involved slugs or categories, a plain explanation, an evidence grade, a citation, and a suggested action. Cover at least: zinc and copper balance under long-term high-dose zinc; zinc spaced from iron and calcium; fish oil with anticoagulants and before surgery; NAC with nitroglycerin; vitamin K with warfarin; St John's wort with serotonergic drugs; five-HTP with SSRIs; berberine with glucose-lowering drugs; ashwagandha with thyroid medication; high-dose vitamin A in pregnancy; vitamin D with thiazides; magnesium with kidney impairment; glutathione and chemotherapy timing; GHK-Cu spaced from chelating agents; iron with tea or calcium; caffeine with late-evening sleep targets. Dose arithmetic distinguishes elemental from compound weight, sums exposure across the stack, compares against upper limits where stated, and shows the arithmetic behind each flagged number. Timing checks produce conflicts such as two minerals competing in one window.

The Protocol Card compiler turns the accepted stack into a daily schedule with slots for morning with food, empty stomach, midday, evening, and bedtime. It attaches cofactors where supported, for example vitamin C with collagen and vitamin B6 with magnesium, applies cycling windows such as eight weeks on and two weeks off where common, and prints to one clean page. The audit report lists findings in severity order, expands each on demand, and exports as Markdown and a print view.

An optional, clearly separated outcome journal stores only a local symptom score from zero to ten against a named stack revision. It states on screen that correlation is not causation and never sends scores to the server. A methodology page defines the A to D rubric, review process, source hierarchy, and limitations. An append-only review log records every monograph change with reviewer initials, timestamp, and previous value.

VISUAL DIRECTION
Use a clinical parchment identity: bone white #F3F0E7, ink navy #13202E, signal vermilion #C4482F, sage #7F9C8B, plus a deep midnight theme. Self-host exactly three fonts: Fraunces for display, IBM Plex Sans for body, IBM Plex Mono for data, doses, labels, and rule ids. Use code-drawn SVG marks, hairline rules, tables with aligned numeric columns, and a persistent left formulary index on wide screens. Evidence grades are small mono chips, never stars or glowing badges. Severity uses type weight and a vermilion rule, not traffic-light gradients. Dense tables stay readable at 320 pixels.

INTERACTION AND ACCESSIBILITY
Every control is a real button or link, keyboard reachable, with visible focus and a clear name. Tables have captions and scoped headers. Filters do not hide the result count. Audit findings are a disclosure group with correct expanded state. Motion is a short fade on result changes and honours prefers-reduced-motion. Both themes meet WCAG AA. The print stylesheet removes navigation and fits one sheet.

ARCHITECTURE
Use Next.js 16 App Router, React 19, strict TypeScript 5.9, Tailwind 4, Drizzle with Neon Postgres plus a deterministic embedded Postgres fallback for local and demo use, Zod 4, Vitest, and Playwright with axe. Server components read; route handlers write. Every table carries an indexed account_ref set from an httpOnly cookie and filtered on all reads and writes. Visitors without a cookie get the demo dataset and see no other account's rows. Pages claiming current data are force dynamic. No runtime network request leaves the product; citations are stored links, not fetches. One setup route creates tables idempotently and backfills later columns. Keep runtime small and data deterministic.

VERIFICATION
Unit test dose arithmetic, evidence grading, every interaction rule, spacing conflicts, and the compiler. Integration test account isolation, audit determinism, and append-only review logs. End to end test browse, draft, audit, export, and print, with axe in both themes. Run a production build and smoke every public path. CI runs lint, typecheck, unit, integration, build, and e2e on Node 22.

CONTENT VOICE
Short declarative sentences. Name ingredient, form, dose, grade, and limitation. No hype, promises, miracle language, vague wellness claims, lorem ipsum, or AI filler. Every factual claim links to a stored source. State plainly this is an educational reference, not medical advice.

DELIVERY PLAN
Deliver sixty-five to seventy-five granular conventional commits in build order: scaffold and ignores, domain types, dataset batches, rules and citations, schema and account scoping, deterministic libraries, API routes, tokens and fonts, components, pages, tests, CI and docs, deploy config. Stage explicit paths so history reads as the journey. No em dashes in comments, UI copy, commits, README, or metadata. No issue-reference syntax in subjects.

ACCEPTANCE CRITERIA
At least one hundred monographs are searchable. The six named ingredients are present with accurate forms and doses. At least twenty-five rules fire deterministically. Three starting states work signed out. A first result appears within thirty seconds. The same stack produces byte-identical audit output twice. No external request occurs at runtime. Both themes pass axe at WCAG AA. The repository is public under devtechedge, history has at least sixty-five commits, CI is green, and the app is live on Vercel with an honestly labelled demo dataset.

FINAL INSTRUCTION
Use maximum reasoning effort and the full context window. Prioritise the deterministic core, then a quiet, exact surface. When done, report the monograph count, rule count, commit count, test results, and live URL.
