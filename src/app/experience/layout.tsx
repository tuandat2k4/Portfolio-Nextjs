import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Kinh nghiệm làm việc và vai trò đảm nhiệm của Tuấn Đạt trong các dự án phát triển web.',
  openGraph: {
    title: 'Experience - Tuấn Đạt',
    description: 'Kinh nghiệm làm việc và vai trò đảm nhiệm của Tuấn Đạt trong các dự án phát triển web.',
    url: 'https://my-portfolio-datt.vercel.app/experience',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience - Tuấn Đạt',
    description: 'Kinh nghiệm làm việc và vai trò đảm nhiệm của Tuấn Đạt trong các dự án phát triển web.'
  }
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
