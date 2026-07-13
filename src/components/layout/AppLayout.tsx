import { Layout, Button, Tooltip } from 'antd';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AppstoreOutlined, ReadOutlined, TranslationOutlined } from '@ant-design/icons';
import type { ReactNode } from 'react';
import { useI18n } from '@app/hooks/useI18n';

const { Header, Content } = Layout;

interface NavItem {
  to: string;
  labelTh: string;
  labelEn: string;
  icon: ReactNode;
}

const NAV: NavItem[] = [
  { to: '/', labelTh: 'สวน', labelEn: 'Farms', icon: <AppstoreOutlined /> },
  { to: '/guide', labelTh: 'คลังความรู้', labelEn: 'Guide', icon: <ReadOutlined /> },
];

export function AppLayout() {
  const { lang, toggleLang } = useI18n();
  const location = useLocation();

  return (
    <Layout className="min-h-screen">
      <Header className="agryn-safe-top sticky top-0 z-20 flex items-center justify-between gap-2 px-3 shadow-sm sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-green-700 text-lg text-white">
            🌿
          </span>
          <div className="leading-tight">
            <div className="text-lg font-bold text-green-800">Agryn</div>
            <div className="hidden text-[11px] text-gray-400 sm:block">Agri Data Platform</div>
          </div>
        </div>

        <Tooltip title={lang === 'th' ? 'English' : 'ภาษาไทย'}>
          <Button type="text" icon={<TranslationOutlined />} onClick={toggleLang}>
            <span className="hidden sm:inline">{lang === 'th' ? 'EN' : 'ไทย'}</span>
          </Button>
        </Tooltip>
      </Header>

      <Content className="mx-auto w-full max-w-6xl px-3 pb-24 pt-4 sm:px-6">
        <Outlet />
      </Content>

      {/* Mobile-first bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-green-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl">
          {NAV.map((item) => {
            const active =
              item.to === '/'
                ? location.pathname === '/' || location.pathname.startsWith('/farms')
                : location.pathname.startsWith(item.to);
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs transition-colors ${
                  active ? 'text-green-700' : 'text-gray-400'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {lang === 'th' ? item.labelTh : item.labelEn}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </Layout>
  );
}
