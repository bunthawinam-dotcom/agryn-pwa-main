import { useEffect } from 'react';
import { Layout, Button, Tooltip, Switch } from 'antd';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AppstoreOutlined, ReadOutlined, TranslationOutlined } from '@ant-design/icons';
import { useI18n } from '@app/hooks/useI18n';
import { useThemeStore } from '@app/store/themeStore';
import { useNavMemoryStore } from '@app/store/navMemoryStore';

const { Header, Content } = Layout;

export function AppLayout() {
  const { lang, toggleLang } = useI18n();
  const location = useLocation();
  const mode = useThemeStore((s) => s.mode);
  const toggleMode = useThemeStore((s) => s.toggleMode);
  const lastFarmsPath = useNavMemoryStore((s) => s.lastFarmsPath);
  const setLastFarmsPath = useNavMemoryStore((s) => s.setLastFarmsPath);
  const lastGuidePath = useNavMemoryStore((s) => s.lastGuidePath);
  const setLastGuidePath = useNavMemoryStore((s) => s.setLastGuidePath);

  // Remember whichever "farms" page (list or a specific farm's detail
  // page) and whichever "guide" page (list or a specific article) the
  // user is currently on, so each bottom-nav tab can return them to
  // exactly that page later instead of always resetting to the top.
  useEffect(() => {
    const isFarmsSection = location.pathname === '/' || location.pathname.startsWith('/farms/');
    const isGuideSection = location.pathname.startsWith('/guide');
    const fullPath = location.pathname + location.search;

    if (isFarmsSection) setLastFarmsPath(fullPath);
    if (isGuideSection) setLastGuidePath(fullPath);
  }, [location.pathname, location.search, setLastFarmsPath, setLastGuidePath]);

  const isFarmsActive = location.pathname === '/' || location.pathname.startsWith('/farms');
  const isGuideActive = location.pathname.startsWith('/guide');

  return (
    <Layout className="min-h-screen">
      <Header className="agryn-safe-top sticky top-0 z-20 flex items-center justify-between gap-2 px-3 shadow-sm sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-green-700 text-lg text-white">
            🌿
          </span>
          <div className="leading-tight">
            <div className="text-lg font-bold text-green-800 dark:text-green-400">Agryn</div>
            <div className="hidden text-[11px] text-gray-400 dark:text-gray-500 sm:block">
              Agri Data Platform
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Tooltip
            title={
              mode === 'dark'
                ? lang === 'th'
                  ? 'โหมดสว่าง'
                  : 'Light mode'
                : lang === 'th'
                  ? 'โหมดมืด'
                  : 'Dark mode'
            }
          >
            <Switch
              checked={mode === 'dark'}
              onChange={toggleMode}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
            />
          </Tooltip>

          <Tooltip title={lang === 'th' ? 'English' : 'ภาษาไทย'}>
            <Button type="text" icon={<TranslationOutlined />} onClick={toggleLang}>
              <span className="hidden sm:inline">{lang === 'th' ? 'EN' : 'ไทย'}</span>
            </Button>
          </Tooltip>
        </div>
      </Header>

      <Content className="mx-auto w-full max-w-6xl px-3 pb-24 pt-4 sm:px-6">
        <Outlet />
      </Content>

      {/* Mobile-first bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-green-100 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95">
        <div className="mx-auto flex max-w-6xl">
          <NavLink
            to={lastFarmsPath}
            className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs transition-colors ${
              isFarmsActive ? 'text-green-700 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            <span className="text-lg">
              <AppstoreOutlined />
            </span>
            {lang === 'th' ? 'สวน' : 'Farms'}
          </NavLink>

          <NavLink
            to={lastGuidePath}
            className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs transition-colors ${
              isGuideActive ? 'text-green-700 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            <span className="text-lg">
              <ReadOutlined />
            </span>
            {lang === 'th' ? 'คลังความรู้' : 'Guide'}
          </NavLink>
        </div>
      </nav>
    </Layout>
  );
}