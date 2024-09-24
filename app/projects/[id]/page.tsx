// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchProjectById } from '@/app/lib/data';
import { Project } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Edit Invoice',
// };

const skills = [
    'React',
    'Next.js',
    "Vercel",
    'Tailwind CSS',
    'TypeScript',
    'GraphQL',
    'PostgreSQL',
    'Hasura',
    'MongoDB',
    'Express.js',
    'Node.js',
    'Flutter',
    'Dart',
    'Firebase',
    'Google Cloud Platform',
    'Git',
    'GitHub',
    'GitLab',
    'JavaScript',
    'Heroku',
    'HTML',
    'CSS',
    'VS Code',
    'Android Studio',
];

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const project = await Promise.all([
        fetchProjectById(id),
    ]);

    const proj = project[0];
    return (
        <main>
            <div className="grid col-span-1 gap-4 h-[65vh] overflow-auto">
                <div className="relative flex items-end overflow-clip bg-gray-50 shadow-sm w-[100vw] aspect-video">
                    <Link href={proj!.url} target='_blank'>
                        <Image
                            src={proj!.imgPath.toString()}
                            alt="background image of dusk in Joshua Tree National Park"
                            fill
                            priority
                            placeholder="blur"
                            blurDataURL={proj!.imgPath.toString()}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            className="z-0"
                        />
                    </Link>
                </div>
                <div className="bg-gray-700/70 p-2 w-full flex-col items-start justify-center">
                    <p className="text-xl text-white font-bold">{proj!.title}</p>
                    <p className="text-md text-white">{proj!.fullDescription}</p>
                </div>
                <div className="bg-gray-700/70 p-2 w-full flex-col items-start justify-center">
                    <p className="text-xl text-white font-bold">Tech Stack</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {proj!.techStack.map((tech, index) => (
                            <div key={index} className="grid justify-center text-center content-center bg-sky-100 opacity-60 text-black p-4 rounded-lg shadow-md w-50 h-10">
                                <p className="text-lg font-bold">{tech}</p>
                                {/* Add additional details or icons if needed */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}