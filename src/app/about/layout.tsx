import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Thông tin giới thiệu về Tuấn Đạt - Full Stack Developer với kinh nghiệm phát triển web hiện đại.',
  openGraph: {
    title: 'About - Tuấn Đạt',
    description: 'Thông tin giới thiệu về Tuấn Đạt - Full Stack Developer với kinh nghiệm phát triển web hiện đại.',
    url: 'https://my-portfolio-datt.vercel.app/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Tuấn Đạt',
    description: 'Thông tin giới thiệu về Tuấn Đạt - Full Stack Developer với kinh nghiệm phát triển web hiện đại.'
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
