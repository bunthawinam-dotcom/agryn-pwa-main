import { useEffect, useState } from 'react';
import { Card, Col, Row, Tag, Tabs } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import { ClockCircleOutlined } from '@ant-design/icons';
import { CROPS, getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import type { CropId } from '@app/types/crop';

function ArticleGrid({ cropId }: { cropId: CropId }) {
  const { lang, t } = useI18n();
  const crop = getCrop(cropId);
  return (
    <Row gutter={[12, 12]}>
      {crop.knowledge.map((article) => (
        <Col xs={24} sm={12} lg={8} key={article.id}>
          <Link to={`/guide/${article.id}`} className="block h-full">
            <Card hoverable className="h-full">
              <div className="mb-2 flex items-center justify-between">
                <Tag color="green" className="rounded-full">
                  {article.emoji} {t(article.category)}
                </Tag>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <ClockCircleOutlined />
                  {article.readMinutes} {lang === 'th' ? 'นาที' : 'min'}
                </span>
              </div>
              <div className="mb-1 text-base font-semibold leading-snug text-green-900 dark:text-green-400">
                {t(article.title)}
              </div>
              <p className="m-0 text-sm text-gray-500">{t(article.excerpt)}</p>
              <div className="mt-3 text-sm font-medium text-green-700 dark:text-green-400">
                {lang === 'th' ? 'อ่านเพิ่มเติม →' : 'Read more →'}
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

function isCropId(value: string | null): value is CropId {
  return CROPS.some((crop) => crop.id === value);
}

export function GuidePage() {
  const { lang, t } = useI18n();
  const [searchParams, setSearchParams] = useSearchParams();

  const paramCrop = searchParams.get('crop');
  const [active, setActive] = useState<CropId>(isCropId(paramCrop) ? paramCrop : 'durian');

  // Keep the active tab in sync when the URL changes from outside this
  // component (e.g. the article detail page's back button sending us to
  // `/guide?crop=papaya`), since GuidePage stays mounted across that
  // navigation and won't otherwise re-read the initial state.
  useEffect(() => {
    if (isCropId(paramCrop) && paramCrop !== active) {
      setActive(paramCrop);
    }
  }, [paramCrop, active]);

  const handleChange = (key: string) => {
    const cropId = key as CropId;
    setActive(cropId);
    setSearchParams({ crop: cropId }, { replace: true });
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="m-0 text-2xl font-bold text-green-900 dark:text-green-400">
          {lang === 'th' ? 'คลังความรู้' : 'Knowledge base'}
        </h1>
        <p className="m-0 text-sm text-gray-400">
          {lang === 'th'
            ? 'เรียนรู้จากเกษตรกรและนักวิชาการผู้เชี่ยวชาญ'
            : 'Learn from expert farmers and agronomists'}
        </p>
      </div>

      <Tabs
        activeKey={active}
        onChange={handleChange}
        items={CROPS.map((crop) => ({
          key: crop.id,
          label: `${crop.emoji} ${t(crop.name)}`,
          children: <ArticleGrid cropId={crop.id} />,
        }))}
      />
    </div>
  );
}