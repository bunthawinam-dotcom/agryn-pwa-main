import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CropType } from '@app/types/farm';

function uid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export interface CustomVariety {
  key: string;
  /** User-entered label. Shown as-is regardless of app language (no th/en translation available). */
  label: string;
}

interface VarietyState {
  /** Custom varieties added by users, grouped by crop type. */
  customVarieties: Record<string, CustomVariety[]>;
  addVariety: (cropType: CropType, label: string) => CustomVariety;
}

export const useVarietyStore = create<VarietyState>()(
  persist(
    (set, get) => ({
      customVarieties: {},

      addVariety: (cropType, label) => {
        const trimmed = label.trim();
        const existing = get().customVarieties[cropType] ?? [];

        // Avoid adding the same variety twice (case-insensitive match).
        const found = existing.find((v) => v.label.toLowerCase() === trimmed.toLowerCase());
        if (found) return found;

        const variety: CustomVariety = { key: `custom-${uid()}`, label: trimmed };
        set((s) => ({
          customVarieties: {
            ...s.customVarieties,
            [cropType]: [...(s.customVarieties[cropType] ?? []), variety],
          },
        }));
        return variety;
      },
    }),
    { name: 'agryn-varieties', version: 1 },
  ),
);