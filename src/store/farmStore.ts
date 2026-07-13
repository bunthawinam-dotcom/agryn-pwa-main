import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Farm, FarmInput, Tree, TreeInput } from '@app/types/farm';

function uid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

interface FarmState {
  farms: Farm[];
  trees: Tree[];

  // Farm CRUD
  addFarm: (input: FarmInput) => Farm;
  updateFarm: (id: string, input: FarmInput) => void;
  removeFarm: (id: string) => void;
  getFarm: (id: string) => Farm | undefined;

  // Tree CRUD
  treesOf: (farmId: string) => Tree[];
  addTree: (input: TreeInput) => Tree;
  updateTree: (id: string, input: TreeInput) => void;
  removeTree: (id: string) => void;
}

// ── Seed data (mirrors agryn-mb mock trees) ──────────────────────────────────
const durianFarmId = 'seed-durian';
const papayaFarmId = 'seed-papaya';

const seedFarms: Farm[] = [
  {
    id: durianFarmId,
    name: 'สวนทุเรียนจันทบุรี',
    cropType: 'durian',
    region: 'จันทบุรี',
    areaRai: 12,
    createdAt: new Date('2026-01-15').toISOString(),
  },
  {
    id: papayaFarmId,
    name: 'สวนมะละกอชุมพร',
    cropType: 'papaya',
    region: 'ชุมพร',
    areaRai: 6,
    createdAt: new Date('2026-02-02').toISOString(),
  },
];

const seedTrees: Tree[] = [
  { id: uid(), farmId: durianFarmId, name: 'ทุเรียนหมอนทอง #1', holeNumber: 1, variety: 'monthong' },
  { id: uid(), farmId: durianFarmId, name: 'ทุเรียนชะนี #2', holeNumber: 2, variety: 'chanee' },
  { id: uid(), farmId: durianFarmId, name: 'ทุเรียนก้านยาว #3', holeNumber: 3, variety: 'kanyao' },
  { id: uid(), farmId: durianFarmId, name: 'ทุเรียนมูซังคิง #4', holeNumber: 4, variety: 'musang-king' },
  { id: uid(), farmId: durianFarmId, name: 'ทุเรียนกระดุม #5', holeNumber: 5, variety: 'kradum' },
  { id: uid(), farmId: papayaFarmId, name: 'มะละกอฮอลแลนด์ #1', holeNumber: 1, variety: 'holland' },
  { id: uid(), farmId: papayaFarmId, name: 'มะละกอเรดเลดี้ #2', holeNumber: 2, variety: 'red-lady' },
  { id: uid(), farmId: papayaFarmId, name: 'มะละกอแขกดำ #3', holeNumber: 3, variety: 'khaek-dam' },
];

export const useFarmStore = create<FarmState>()(
  persist(
    (set, get) => ({
      farms: seedFarms,
      trees: seedTrees,

      addFarm: (input) => {
        const farm: Farm = { ...input, id: uid(), createdAt: new Date().toISOString() };
        set((s) => ({ farms: [...s.farms, farm] }));
        return farm;
      },
      updateFarm: (id, input) =>
        set((s) => ({
          farms: s.farms.map((f) => (f.id === id ? { ...f, ...input } : f)),
        })),
      removeFarm: (id) =>
        set((s) => ({
          farms: s.farms.filter((f) => f.id !== id),
          // Cascade: drop trees belonging to the removed farm.
          trees: s.trees.filter((t) => t.farmId !== id),
        })),
      getFarm: (id) => get().farms.find((f) => f.id === id),

      treesOf: (farmId) =>
        get()
          .trees.filter((t) => t.farmId === farmId)
          .sort((a, b) => a.holeNumber - b.holeNumber),
      addTree: (input) => {
        const tree: Tree = { ...input, id: uid() };
        set((s) => ({ trees: [...s.trees, tree] }));
        return tree;
      },
      updateTree: (id, input) =>
        set((s) => ({
          trees: s.trees.map((t) => (t.id === id ? { ...t, ...input } : t)),
        })),
      removeTree: (id) => set((s) => ({ trees: s.trees.filter((t) => t.id !== id) })),
    }),
    { name: 'agryn-farms', version: 1 },
  ),
);
