import {cookies} from 'next/headers';
import {getRequestConfig} from 'next-intl/server';


export default getRequestConfig(async () => {

  const store = await cookies();
  // Lấy locale từ cookie, nếu không có thì 'vi' làm mặc định
  const locale = store.get('locale')?.value || 'vi';
  // Dynamic import messages file theo locale (vi.json hoặc en.json)
  const messages = (await import(`./messages/${locale}.json`)).default;
  // Return config cho next-intl
  return {locale, messages};
});


