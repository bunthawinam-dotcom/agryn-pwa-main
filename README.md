# agryn-pwa

Agryn — Agri Data Platform PWA. Smart data for high-value crops in Thailand.
MVP supports exactly two fruit types: **durian (ทุเรียน)** and **papaya (มะละกอ)**.

PWA counterpart of the Flutter app `agryn-mb` — same tree-management concept
(hole number + variety), extended with farm configuration.

## MVP features

- **Farms** — add / configure / edit / delete a farm, each with a crop **type**
  (durian or papaya only), region and area.
- **Trees per farm** — manage trees (hole number, name, variety) like the
  `agryn-mb` Tree Timeline. Varieties are crop-specific (e.g. durian Monthong,
  Chanee, Kanyao; papaya Holland, Red Lady, Khaek Dam).
- **Farm overview** — growth-cycle stages + live-style sensor snapshot
  (soil pH, moisture, temperature, rainfall) per crop.
- **Knowledge base** — durian/papaya farming guides.

Data persists locally (browser storage) so the frontend runs standalone; a
FastAPI-style service layer (`src/api/`) is ready to swap in when the backend
is live.

The app is **config-driven**: every crop is described once in
`src/config/crops/` (varieties, stages, metrics, knowledge) and the whole UI
adapts. Add a crop by dropping in one more config file.

## Stack

Matches the Dione frontend conventions (`dione-hr`):

- **Vite 6** + **React 18** + **TypeScript**
- **Ant Design 5** + **Tailwind CSS 4**
- **React Router 7**, **TanStack Query**, **Zustand**
- **Recharts** for analytics
- **vite-plugin-pwa** (installable, offline app shell)

Thai-first UI with an EN/TH toggle.

## Getting started

```bash
npm install
npm run generate-pwa-assets   # once, or after changing public/pwa-icon.svg
npm run dev                    # http://localhost:5180
```

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Vite dev server on port 5180 |
| `npm run build` | Type-check (`tsc --noEmit`) + production build |
| `npm run preview` | Preview the production build |
| `npm run type-check` | Type-check only |
| `npm run generate-pwa-assets` | Regenerate PWA icons from `public/pwa-icon.svg` |

## Project structure

```
src/
  api/         axios client (FastAPI /api/v1), farm/tree services, query hooks
  components/  layout, farm/tree cards + form modals, metric snapshot, hero
  config/crops/  durian.ts, papaya.ts + registry  ← add crops here
  data/        deterministic mock sensor data (soil/weather)
  hooks/       useI18n (TH/EN label helper)
  lib/         query client
  pages/       Farms, FarmDetail, Guide, NotFound
  store/       appStore (language), farmStore (farms + trees, persisted)
  types/       crop + farm/tree domain types
  theme.ts     Ant Design green brand theme
```

## Backend

The frontend runs standalone: farms/trees persist in browser storage
(`src/store/farmStore.ts`). In dev, `/api` is proxied to the Agryn FastAPI
backend at `http://localhost:8000` (matches `agryn-mb`). The service layer in
`src/api/farmApi.ts` / `src/api/treeApi.ts` maps to snake_case FastAPI
endpoints — swap the store actions to these when the backend is ready.

## Adding a crop

1. Create `src/config/crops/<crop>.ts` exporting a `CropConfig`.
2. Register it in `src/config/crops/index.ts` (`CROPS`, `CROPS_BY_ID`).

That's it — the crop switcher, dashboard, fields and guide pick it up.
