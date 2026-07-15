import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@app/components/layout/AppLayout';
import { FarmsPage } from '@app/pages/FarmsPage';
import { FarmDetailPage } from '@app/pages/FarmDetailPage';
import { GuidePage } from '@app/pages/GuidePage';
import { ArticleDetailPage } from '@app/pages/ArticleDetailPage';
import { NotFoundPage } from '@app/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <FarmsPage /> },
      { path: 'farms/:farmId', element: <FarmDetailPage /> },
      { path: 'guide', element: <GuidePage /> },
      { path: 'guide/:articleId', element: <ArticleDetailPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);