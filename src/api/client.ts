import axios from 'axios';

/**
 * Shared axios instance for the Agryn backend (FastAPI).
 *
 * Mirrors agryn-mb: REST endpoints with snake_case JSON under `/api/v1`.
 * In dev, `/api` is proxied by Vite to the FastAPI server (default :8000).
 * The MVP currently persists locally (see `src/store/farmStore.ts`); swap the
 * store actions to these services when the backend is live.
 */
export const api = axios.create({
  baseURL: '/api/v1',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});
