import ProjectNav from '@/app/ui/projects/projectNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:pt-10">
      {children}
    </div>
  );
}