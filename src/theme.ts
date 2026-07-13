import type { ThemeConfig } from 'antd';

/** Agryn green brand theme for Ant Design. */
export const agrynTheme: ThemeConfig = {
  token: {
    colorPrimary: '#15803d',
    colorInfo: '#15803d',
    colorSuccess: '#16a34a',
    colorLink: '#15803d',
    borderRadius: 10,
    fontFamily:
      "'Noto Sans Thai', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  components: {
    Layout: {
      bodyBg: '#f0fdf4',
      headerBg: '#ffffff',
      siderBg: '#ffffff',
    },
    Menu: {
      itemSelectedBg: '#dcfce7',
      itemSelectedColor: '#15803d',
    },
    Card: {
      borderRadiusLG: 14,
    },
  },
};
