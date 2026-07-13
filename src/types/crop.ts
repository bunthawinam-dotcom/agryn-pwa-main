/** Bilingual label — the UI is Thai-first with English fallback. */
export interface I18nText {
  th: string;
  en: string;
}

export type CropId = 'durian' | 'papaya';

/** A stage in the crop growth cycle (flowering, fruiting, harvest, ...). */
export interface GrowthStage {
  key: string;
  name: I18nText;
  /** Approximate duration in days for progress estimation. */
  durationDays: number;
  icon: string;
}

/** A key metric Agryn tracks for a crop (e.g. soil pH, temperature). */
export interface CropMetric {
  key: string;
  name: I18nText;
  unit: string;
  /** Agronomically healthy range [min, max] for quick status coloring. */
  optimal: [number, number];
  icon: string;
}

/** A knowledge-base article shown in the crop guide. */
export interface KnowledgeArticle {
  id: string;
  category: I18nText;
  emoji: string;
  readMinutes: number;
  title: I18nText;
  excerpt: I18nText;
}

/** A cultivar/variety option for a crop (e.g. durian Monthong). */
export interface CropVariety {
  key: string;
  name: I18nText;
}

/** Full configuration for one crop. Add a crop by adding one of these. */
export interface CropConfig {
  id: CropId;
  name: I18nText;
  emoji: string;
  /** Tailwind-friendly accent (hex) used for charts and highlights. */
  accent: string;
  tagline: I18nText;
  /** Selectable cultivars used when adding trees to a farm of this crop. */
  varieties: CropVariety[];
  stages: GrowthStage[];
  metrics: CropMetric[];
  knowledge: KnowledgeArticle[];
}
