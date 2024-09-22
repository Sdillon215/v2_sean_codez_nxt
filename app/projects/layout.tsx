import ProjectNav from '@/app/ui/projects/projectNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-64 overflow-auto mt-6 md:mt-0">
        <ProjectNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}