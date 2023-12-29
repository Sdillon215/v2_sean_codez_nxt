import Link from 'next/link';
import ProjectCards from '@/app/ui/projects/project_cards';

export default function ProjectNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <ProjectCards />
      </div>
    </div>
  );
}
