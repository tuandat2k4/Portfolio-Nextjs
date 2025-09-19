import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Kỹ năng kỹ thuật và công cụ của Tuấn Đạt - Frontend, Backend, Languages và Tools.',
  openGraph: {
    title: 'Skills - Tuấn Đạt',
    description: 'Kỹ năng kỹ thuật và công cụ của Tuấn Đạt - Frontend, Backend, Languages và Tools.',
    url: 'https://my-portfolio-datt.vercel.app/skills',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skills - Tuấn Đạt',
    description: 'Kỹ năng kỹ thuật và công cụ của Tuấn Đạt - Frontend, Backend, Languages và Tools.'
  }
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
