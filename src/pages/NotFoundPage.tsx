import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '@app/hooks/useI18n';

export function NotFoundPage() {
  const navigate = useNavigate();
  const { lang } = useI18n();
  return (
    <Result
      status="404"
      title="404"
      subTitle={lang === 'th' ? 'ไม่พบหน้าที่คุณค้นหา' : 'Sorry, the page was not found.'}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          {lang === 'th' ? 'กลับหน้าหลัก' : 'Back home'}
        </Button>
      }
    />
  );
}
