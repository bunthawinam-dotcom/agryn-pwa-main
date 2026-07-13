import { Tag } from 'antd';
import { getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import type { CropType } from '@app/types/farm';

/** Small pill showing a farm's crop type (durian/papaya). */
export function CropTypeBadge({ cropType }: { cropType: CropType }) {
  const { t } = useI18n();
  const crop = getCrop(cropType);
  return (
    <Tag
      className="rounded-full border-0 px-2 py-0.5 font-medium"
      style={{ background: `${crop.accent}22`, color: crop.accent }}
    >
      {crop.emoji} {t(crop.name)}
    </Tag>
  );
}
