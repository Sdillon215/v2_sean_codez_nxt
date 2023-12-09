import clsx from "clsx";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function AboutSection({
    title,
    bodyText,
    imgRight,
    imgPath,
    altText
}: {
    title: string;
    bodyText: string;
    imgRight: boolean;
    imgPath: String;
    altText: string;
}) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {imgRight ? <div
                className="hidden md:grid col-span-2 md:col-span-1 text-center content-center md:h-[450px] opacity-60"
            >
                <h1 className="text-5xl font-bold">{title}</h1>
                <h4 className="font-bold">{bodyText}</h4>
            </div> : null}
            <div className="col-span-2 md:col-span-1 relative md:rounded-lg overflow-clip h-[300px] md:h-[500px] w-full">
                <Image
                    fill
                    src={imgPath.toString()}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt={altText}
                />
            </div>
            <div
                className={clsx(
                    'grid col-span-2 md:col-span-1 text-center content-center md:h-[450px] opacity-60',
                    {
                        'md:hidden': imgRight,
                    },
                )}
            >
                <h1 className="text-5xl font-bold">{title}</h1>
                <h4 className="font-bold">{bodyText}</h4>
            </div>
        </div>
    );
}