import { useAppStore } from '@app/store/appStore';
import type { I18nText } from '@app/types/crop';

/** Language-aware label helper. UI is Thai-first with an EN toggle. */
export function useI18n() {
  const lang = useAppStore((s) => s.lang);
  const toggleLang = useAppStore((s) => s.toggleLang);
  const t = (text: I18nText) => text[lang];
  return { lang, toggleLang, t };
}
