import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'fr' | 'en')) {
    // Check if locale is empty or does not match 'fr' or 'en'
    locale = routing.defaultLocale; //falls back to 'fr' as default locale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default, // load matching language here, next optimizes dynamic imports in returns
  };
});
