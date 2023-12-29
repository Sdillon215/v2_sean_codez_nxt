// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchProjectById } from '@/app/lib/data';
import { Project } from '@/app/lib/definitions';
// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Edit Invoice',
// };

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const project = await Promise.all([
        fetchProjectById(id),
    ]);

    const proj = project[0];

    console.log('=============proj=============');
    console.log(project);

    // if (!invoice) {
    //     notFound();
    // }

    return (
        <main>
            <p>{proj!.title}</p>
        </main>
    );
}