import { getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import type { CropId } from '@app/types/crop';

interface CropHeroProps {
  cropId: CropId;
  title?: string;
  subtitle?: string;
}

/** Crop-branded page header. */
export function CropHero({ cropId, title, subtitle }: CropHeroProps) {
  const { t } = useI18n();
  const crop = getCrop(cropId);
  return (
    <div
      className="mb-4 flex items-center gap-4 rounded-2xl p-4 text-white shadow-sm sm:p-6"
      style={{ background: `linear-gradient(135deg, ${crop.accent}, #15803d)` }}
    >
      <span className="text-4xl sm:text-5xl">{crop.emoji}</span>
      <div>
        <h1 className="m-0 text-xl font-bold sm:text-2xl">{title ?? t(crop.name)}</h1>
        <p className="m-0 text-sm text-white/85">{subtitle ?? t(crop.tagline)}</p>
      </div>
    </div>
  );
}
