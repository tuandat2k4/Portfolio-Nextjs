import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config.js';

export default createMiddleware({
  locales: intlConfig.locales,
  defaultLocale: intlConfig.defaultLocale,
  localePrefix: intlConfig.localePrefix as 'never'
});

export const config = {
  matcher: []
};


