import type { Metadata } from 'next';
import { raleway } from '@/app/ui/fonts';
import './globals.css';
import Image from 'next/image';
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
      <body className={raleway.className} style={{ position: "relative" }}>
        <Image
          src="/home-bg-mb.jpg"
          fill
          className="z-0 block lg:hidden"
          style={{ objectFit: "cover" }}
          alt="background image of an alpine lake in Yosemite National Park"
        />
        <Image
          src="/home-bg.jpg"
          fill
          className="z-0 hidden lg:block"
          style={{ objectFit: "cover", objectPosition: "bottom right" }}
          alt="background image of an alpine lake in Yosemite National Park"
        />
        <nav className="absolute top-0 right-0 z-10">
          <Nav />
        </nav>
        <div className="z-1 relative">
          {children}
        </div>
      </body>
    </html>
  )
}
