import clsx from "clsx";
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
                className="hidden lg:grid gap-2 rounded-lg col-span-2 lg:col-span-1 text-center content-center lg:h-[450px] opacity-60 p-4"
            >
                {title !== '' ? <h1 className="text-4xl font-bold border-b-2 pb-2">{title}</h1> : null}
                <h4 className="font-bold text-2xl">{bodyText}</h4>
            </div> : null}
            <div className="col-span-2 lg:col-span-1 relative lg:rounded-lg overflow-clip h-[300px] sm:h-[500px] w-full">
                <Image
                    fill
                    src={imgPath.toString()}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="rounded-xl"
                    alt={altText}
                />
            </div>
            <div
                className={clsx(
                    'grid gap-2 col-span-2 shadow-lg rounded-lg lg:col-span-1 text-center content-center lg:h-[450px] opacity-60 p-4',
                    {
                        'lg:hidden': imgRight,
                    },
                )}
            >
                {title !== '' ? <h1 className="text-4xl font-bold border-b-2 pb-2">{title}</h1> : null}
                <h4 className="font-bold text-2xl">{bodyText}</h4>
            </div>
        </div>
    );
}