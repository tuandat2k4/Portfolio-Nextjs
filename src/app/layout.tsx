import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import getRequestConfig from '@/i18n/request';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://my-portfolio-datt.vercel.app/'),
  title: {
    default: 'Tuấn Đạt – Portfolio',
    template: '%s | Tuấn Đạt'
  },
  description: 'Portfolio cá nhân: dự án, kỹ năng và kinh nghiệm.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    siteName: 'Tuấn Đạt',
    title: 'Tuấn Đạt – Portfolio',
    description: 'Portfolio cá nhân: dự án, kỹ năng và kinh nghiệm.',
    url: 'https://my-portfolio-datt.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@your_handle'
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const {locale, messages} = await getRequestConfig({} as any);
  return (
    <html lang={locale}>
      <body className={`${roboto.variable} font-sans bg-white text-black transition-colors dark:bg-gray-900 dark:text-white`}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="min-h-screen pt-24">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
