import { api } from '@app/api/client';
import type { Farm, FarmInput } from '@app/types/farm';

/** Wire shape from FastAPI (snake_case). */
interface FarmDto {
  id: string;
  name: string;
  crop_type: Farm['cropType'];
  region: string;
  area_rai: number;
  created_at: string;
}

const toFarm = (d: FarmDto): Farm => ({
  id: d.id,
  name: d.name,
  cropType: d.crop_type,
  region: d.region,
  areaRai: d.area_rai,
  createdAt: d.created_at,
});

const toBody = (f: FarmInput) => ({
  name: f.name,
  crop_type: f.cropType,
  region: f.region,
  area_rai: f.areaRai,
});

/** Service layer for farm endpoints (backend-ready; not yet wired in MVP). */
export const farmApi = {
  async list(): Promise<Farm[]> {
    const { data } = await api.get<FarmDto[]>('/farms');
    return data.map(toFarm);
  },
  async get(id: string): Promise<Farm> {
    const { data } = await api.get<FarmDto>(`/farms/${id}`);
    return toFarm(data);
  },
  async create(input: FarmInput): Promise<Farm> {
    const { data } = await api.post<FarmDto>('/farms', toBody(input));
    return toFarm(data);
  },
  async update(id: string, input: FarmInput): Promise<Farm> {
    const { data } = await api.put<FarmDto>(`/farms/${id}`, toBody(input));
    return toFarm(data);
  },
  async remove(id: string): Promise<void> {
    await api.delete(`/farms/${id}`);
  },
};
