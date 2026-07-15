import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface NavMemoryState {
  /**
   * The last path visited within the "farms" section — either the list
   * page ("/") or a specific farm's detail page ("/farms/seed-durian").
   */
  lastFarmsPath: string;
  setLastFarmsPath: (path: string) => void;

  /**
   * The last path visited within the "guide" section — either the guide
   * list ("/guide?crop=papaya") or a specific article being read
   * ("/guide/durian-grading").
   */
  lastGuidePath: string;
  setLastGuidePath: (path: string) => void;
}

export const useNavMemoryStore = create<NavMemoryState>()(
  persist(
    (set) => ({
      lastFarmsPath: '/',
      setLastFarmsPath: (path) => set({ lastFarmsPath: path }),

      lastGuidePath: '/guide',
      setLastGuidePath: (path) => set({ lastGuidePath: path }),
    }),
    {
      name: 'agryn-nav-memory',
      // Session-only: survives navigating between pages / refreshing, but
      // resets once the browser tab is closed (unlike localStorage).
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);