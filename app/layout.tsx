import type { Metadata } from 'next';
import { raleway } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sean_Codez',
  description: 'Sean Dillon\'s personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
