import { theme } from 'antd';
import type { ThemeConfig } from 'antd';
import type { ThemeMode } from '@app/store/themeStore';

/** Agryn green brand theme for Ant Design, adapted for light/dark mode. */
export function getAgrynTheme(mode: ThemeMode): ThemeConfig {
  const isDark = mode === 'dark';

  return {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#15803d',
      colorInfo: '#15803d',
      colorSuccess: '#16a34a',
      colorLink: isDark ? '#4ade80' : '#15803d',
      borderRadius: 10,
      fontFamily:
        "'Noto Sans Thai', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    },
    components: {
      Layout: {
        bodyBg: isDark ? '#0f172a' : '#f0fdf4',
        headerBg: isDark ? '#111827' : '#ffffff',
        siderBg: isDark ? '#111827' : '#ffffff',
      },
      Menu: {
        itemSelectedBg: isDark ? '#14532d' : '#dcfce7',
        itemSelectedColor: isDark ? '#4ade80' : '#15803d',
      },
      Card: {
        borderRadiusLG: 14,
      },
    },
  };
}

/**
 * @deprecated Kept only in case another file still imports the old static
 * export directly. Prefer `getAgrynTheme(mode)` so the theme reacts to the
 * light/dark switch.
 */
export const agrynTheme = getAgrynTheme('light');