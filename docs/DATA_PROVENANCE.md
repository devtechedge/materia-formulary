# Data provenance

## Source research

`supplement-research.md` sits beside this repository at build time. It contains 130 numbered entries assembled on 26 November 2026 from public NOW Foods and iHerb catalog pages. Each entry has a product name, categories, forms, a typical adult dose range, timing, an honest evidence note, a caution and a checked URL.

`nowfoods.com` returned HTTP 403 to direct fetches during research, so the NOW Foods catalog was read through iHerb product pages. No URL was invented. Where a specific potency could not be confirmed, the research note says so.

## Bundling

`scripts/generate-data.py` parses the research file and writes ten TypeScript batches under `src/data`. The generator is deterministic and does not call the network. Each monograph stores its provenance URL and a PubMed search citation in addition to the source listing.

The browser bundle carries this checked snapshot. Nothing is fetched at runtime. Citations are stored links that open in a new tab.

## Fonts

`scripts/fetch-fonts.py` downloads the latin subset woff2 files from Google Fonts once at build time and writes `public/fonts` plus `src/app/fonts.css`. Fraunces, IBM Plex Sans and IBM Plex Mono are licensed under the SIL Open Font License. Files are served from this repository, so the app makes no external font request.

## Artwork

All marks, tables and layout are original code. There is no stock photography and no icon font.
