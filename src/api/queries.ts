import { useQuery } from '@tanstack/react-query';
import type { CropId } from '@app/types/crop';
import { metricHistory } from '@app/data/mock';

/** Simulate network latency so loading states are exercised. */
function delay<T>(value: T, ms = 250): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/** Sensor history for a farm (soil/weather), seeded per farm + crop. */
export function useMetricHistory(cropId: CropId, seedKey = '') {
  return useQuery({
    queryKey: ['metric-history', cropId, seedKey],
    queryFn: () => delay(metricHistory(cropId, seedKey)),
  });
}
