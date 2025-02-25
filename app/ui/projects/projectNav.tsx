import ProjectCardThumbnails from '@/app/ui/projects/project_card_thumbnail';

export default function ProjectNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 overflow-auto">
        <ProjectCardThumbnails />
      </div>
    </div>
  );
}
