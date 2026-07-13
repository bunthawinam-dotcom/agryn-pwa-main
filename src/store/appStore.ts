import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Lang = 'th' | 'en';

interface AppState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      lang: 'th',
      setLang: (lang) => set({ lang }),
      toggleLang: () => set((s) => ({ lang: s.lang === 'th' ? 'en' : 'th' })),
    }),
    { name: 'agryn-app' },
  ),
);
