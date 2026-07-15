import type { CropId } from '@app/types/crop';

/** MVP supports exactly these two fruit types. */
export type CropType = CropId; // 'durian' | 'papaya'

/** A farm/orchard configured by the grower. */
export interface Farm {
  id: string;
  name: string;
  cropType: CropType;
  region: string;
  /** Planted area in rai (Thai land unit). */
  areaRai: number;
  createdAt: string;
}

/** A single planted tree within a farm (mirrors agryn-mb `Tree`). */
export interface Tree {
  id: string;
  farmId: string;
  name: string;
  holeNumber: number;
  /** Variety key from the farm crop's `varieties` list. */
  variety: string;
  /** Optional photo of the tree, stored as a base64 data URL (MVP: no backend upload yet). */
  photoUrl?: string;
}

/** Payload for creating/updating a farm (no server-managed fields). */
export type FarmInput = Omit<Farm, 'id' | 'createdAt'>;

/** Payload for creating/updating a tree. */
export type TreeInput = Omit<Tree, 'id'>;