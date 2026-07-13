import type { CropConfig, CropId } from '@app/types/crop';
import { durian } from './durian';
import { papaya } from './papaya';

/** Ordered registry of supported crops. Add a crop here to light it up app-wide. */
export const CROPS: CropConfig[] = [durian, papaya];

export const CROPS_BY_ID: Record<CropId, CropConfig> = {
  durian,
  papaya,
};

export const DEFAULT_CROP_ID: CropId = 'durian';

export function getCrop(id: CropId): CropConfig {
  return CROPS_BY_ID[id] ?? CROPS_BY_ID[DEFAULT_CROP_ID];
}
