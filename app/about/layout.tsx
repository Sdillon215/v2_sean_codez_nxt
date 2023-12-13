import Image from 'next/image';
import jtree_sunset from '/public/jtree_sunset.jpg';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen min-w-screen">
            <Image
                priority={true}
                src={jtree_sunset}
                sizes="100vw"
                placeholder="blur"
                className="z-0 fixed h-full opacity-70"
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt="background image of dusk in Joshua Tree National Park"
            />
            <div className="z-1">
                {children}
            </div>
        </div>
    )
}