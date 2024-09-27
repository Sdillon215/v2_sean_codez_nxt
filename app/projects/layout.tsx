import ProjectNav from '@/app/ui/projects/projectNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:pt-10">
      <div className="flex-grow pt-10 md:overflow-y-auto md:p-2">{children}</div>
      <div className="w-full md:h-[85vh] flex-none md:w-1/3 md:mb-4">
        <h1 className=" hidden md:block text-4xl text-center font-bold border-b-2 min-w-[90vw] md:min-w-[100px] p-2">Projects</h1>
        <ProjectNav />
      </div>
    </div>
  );
}