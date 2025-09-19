import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Các dự án nổi bật và mã nguồn của Tuấn Đạt - Portfolio showcase với các công nghệ hiện đại.',
  openGraph: {
    title: 'Projects - Tuấn Đạt',
    description: 'Các dự án nổi bật và mã nguồn của Tuấn Đạt - Portfolio showcase với các công nghệ hiện đại.',
    url: 'https://my-portfolio-datt.vercel.app/projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Tuấn Đạt',
    description: 'Các dự án nổi bật và mã nguồn của Tuấn Đạt - Portfolio showcase với các công nghệ hiện đại.'
  }
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
