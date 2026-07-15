import { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import thTH from 'antd/locale/th_TH';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from '@app/lib/queryClient';
import { getAgrynTheme } from '@app/theme';
import { router } from '@app/router';
import { useThemeStore } from '@app/store/themeStore';

export default function App() {
  const mode = useThemeStore((s) => s.mode);

  // Toggle a `dark` class on <html> so plain Tailwind classes (outside
  // Ant Design components) can respond via the `dark:` variant declared
  // in index.css. Ant Design components themselves switch via the
  // `algorithm` passed to ConfigProvider below.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <ConfigProvider theme={getAgrynTheme(mode)} locale={thTH}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}