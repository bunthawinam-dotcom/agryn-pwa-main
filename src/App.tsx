import { ConfigProvider } from 'antd';
import thTH from 'antd/locale/th_TH';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from '@app/lib/queryClient';
import { agrynTheme } from '@app/theme';
import { router } from '@app/router';

export default function App() {
  return (
    <ConfigProvider theme={agrynTheme} locale={thTH}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
