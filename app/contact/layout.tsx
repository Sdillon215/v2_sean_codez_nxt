import Image from 'next/image';
import mt_hood from '/public/mt_hood.jpg';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen min-w-screen">
            <Image
                priority={true}
                src={mt_hood}
                sizes="100vh"
                placeholder="blur"
                className="z-0 fixed h-full opacity-70"
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt="background image of Mt. Hood"
            />
            <div className="z-1">
                {children}
            </div>
        </div>
    )
}