import type { CropId } from '@app/types/crop';
import { getCrop } from '@app/config/crops';

export interface MetricPoint {
  date: string;
  value: number;
}

export interface MetricSeries {
  key: string;
  points: MetricPoint[];
}

/** Deterministic pseudo-random so charts are stable across reloads. */
function seeded(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h) + 1;
}

/**
 * 30-day sensor series per metric, oscillating around the optimal midpoint.
 * Seeded by farm + crop so each farm shows stable but distinct readings.
 */
export function metricHistory(cropId: CropId, seedKey = ''): MetricSeries[] {
  const crop = getCrop(cropId);
  return crop.metrics.map((metric) => {
    const rand = seeded(hash(seedKey + cropId + metric.key));
    const [min, max] = metric.optimal;
    const mid = (min + max) / 2;
    const spread = (max - min) * 0.9;
    const points: MetricPoint[] = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const value = mid + (rand() - 0.5) * spread;
      points.push({
        date: d.toISOString().slice(0, 10),
        value: Math.round(value * 10) / 10,
      });
    }
    return { key: metric.key, points };
  });
}
