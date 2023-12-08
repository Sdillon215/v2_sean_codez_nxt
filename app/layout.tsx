import type { Metadata } from 'next';
import { raleway } from '@/app/ui/fonts';
import './globals.css';
import Nav from './ui/nav/nav';

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
      <body className={`${raleway.className} antialiased bg-bg-primary`}>
        <nav className="absolute top-0 right-0 z-10">
          <Nav />
        </nav>
          {children}
      </body>
    </html>
  )
}
