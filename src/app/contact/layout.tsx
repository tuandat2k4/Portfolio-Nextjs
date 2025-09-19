import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Liên hệ với Tuấn Đạt - Full Stack Developer. Email: tdat96386@gmail.com, Phone: 0942417773.',
  openGraph: {
    title: 'Contact - Tuấn Đạt',
    description: 'Liên hệ với Tuấn Đạt - Full Stack Developer. Email: tdat96386@gmail.com, Phone: 0942417773.',
    url: 'https://my-portfolio-datt.vercel.app/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Tuấn Đạt',
    description: 'Liên hệ với Tuấn Đạt - Full Stack Developer. Email: tdat96386@gmail.com, Phone: 0942417773.'
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
