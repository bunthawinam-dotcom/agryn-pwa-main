import { api } from '@app/api/client';
import type { Tree, TreeInput } from '@app/types/farm';

/** Wire shape from FastAPI (snake_case) — matches agryn-mb `Tree`. */
interface TreeDto {
  id: string;
  farm_id: string;
  name: string;
  hole_number: number;
  variety: string;
}

const toTree = (d: TreeDto): Tree => ({
  id: d.id,
  farmId: d.farm_id,
  name: d.name,
  holeNumber: d.hole_number,
  variety: d.variety,
});

const toBody = (t: TreeInput) => ({
  farm_id: t.farmId,
  name: t.name,
  hole_number: t.holeNumber,
  variety: t.variety,
});

/** Service layer for tree endpoints (backend-ready; not yet wired in MVP). */
export const treeApi = {
  async listByFarm(farmId: string): Promise<Tree[]> {
    const { data } = await api.get<TreeDto[]>('/trees', { params: { farm_id: farmId } });
    return data.map(toTree);
  },
  async create(input: TreeInput): Promise<Tree> {
    const { data } = await api.post<TreeDto>('/trees', toBody(input));
    return toTree(data);
  },
  async update(id: string, input: TreeInput): Promise<Tree> {
    const { data } = await api.put<TreeDto>(`/trees/${id}`, toBody(input));
    return toTree(data);
  },
  async remove(id: string): Promise<void> {
    await api.delete(`/trees/${id}`);
  },
};
