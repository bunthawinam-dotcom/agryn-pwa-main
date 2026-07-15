import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Result, Tag } from 'antd';
import { ArrowLeftOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { CROPS } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import { CropHero } from '@app/components/CropHero';

export function ArticleDetailPage() {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const { lang, t } = useI18n();

  const found = useMemo(() => {
    for (const crop of CROPS) {
      const article = crop.knowledge.find((a) => a.id === articleId);
      if (article) return { crop, article };
    }
    return null;
  }, [articleId]);

  if (!found) {
    return (
      <Result
        status="404"
        title="404"
        subTitle={lang === 'th' ? 'ไม่พบบทความนี้' : 'Article not found'}
        extra={
          <Button type="primary" onClick={() => navigate('/guide')}>
            {lang === 'th' ? 'กลับไปคลังความรู้' : 'Back to knowledge base'}
          </Button>
        }
      />
    );
  }

  const { crop, article } = found;
  // Older articles may not have full `content` yet — fall back to the
  // excerpt so the page still works instead of showing a blank body.
  const body = t(article.content ?? article.excerpt);
  const paragraphs = body.split('\n\n').filter(Boolean);

  return (
    <div>
      <Button
        type="text"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(`/guide?crop=${crop.id}`)}
        className="mb-2 px-0"
      >
        {lang === 'th' ? 'คลังความรู้ทั้งหมด' : 'All articles'}
      </Button>

      <CropHero
        cropId={crop.id}
        title={t(article.title)}
        subtitle={`${article.emoji} ${t(article.category)} · ${article.readMinutes} ${
          lang === 'th' ? 'นาทีในการอ่าน' : 'min read'
        }`}
      />

      <Card
        className="mt-4"
        style={{ borderTop: `3px solid ${crop.accent}` }}
      >
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Tag color="green" className="rounded-full">
            {article.emoji} {t(article.category)}
          </Tag>
          <Tag className="rounded-full">
            {crop.emoji} {t(crop.name)}
          </Tag>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <ClockCircleOutlined />
            {article.readMinutes} {lang === 'th' ? 'นาที' : 'min'}
          </span>
        </div>

        <article>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`m-0 mb-4 last:mb-0 leading-relaxed text-gray-700 dark:text-gray-300 ${
                index === 0
                  ? 'text-base font-medium text-gray-800 dark:text-gray-200'
                  : 'text-[15px]'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </article>
      </Card>
    </div>
  );
}