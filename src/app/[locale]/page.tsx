// app/majit/page.tsx
import CVSection from '@/components/cv/CVSection';
import ProjectsSection from '@/components/projects/ProjectsSection';

export default function CVPage() {
  return (
    <>
    <section id="cv">
      <CVSection />
    </section>
    <section id="projects" className='bg-neutral-100'>
      <ProjectsSection />
    </section>
    </>);
}