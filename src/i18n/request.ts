// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  console.log('🔴 REQUEST.TS - locale received:', locale);
  console.log('🔴 REQUEST.TS - type:', typeof locale);

  const finalLocale = locale || 'fr';
  console.log('🟡 REQUEST.TS - using:', finalLocale);

  return {
    locale: finalLocale,
    messages: (await import(`../messages/${finalLocale}.json`)).default,
  };
});
