'use client';

import { useTranslations } from 'next-intl';
import ProjectIcon from './ProjectIcon';
export default function ProjectsSection() {
  const t = useTranslations('projects');

  // fetches projects from messages
  const projectIds = ['saas', 'analytics', 'api'] as const;

  const projectImages: Record<(typeof projectIds)[number], string | undefined> = {
    saas: '',
    analytics: '',
    api: '',
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 pb-16 pt-8 lg:py-24 md:px-12 lg:px-24">
      <h2 className="font-body text-4xl sm:text-5xl font-bold text-forest-900 mb-4 tracking-tight">
        {t('title')}
      </h2>
      <p className="text-neutral-400 mb-12 max-w-2xl">{t('subtitle')}</p>

      <div className="space-y-12">
        {projectIds.map(projectId => {
          const project = {
            title: t(`${projectId}.title`),
            description: t(`${projectId}.description`),
            tech: t.raw(`${projectId}.tech`) as string[],
            highlights: t.raw(`${projectId}.highlights`) as string[],
            github: t(`${projectId}.github`),
            demo: t(`${projectId}.demo`),
            image: projectImages[projectId] || undefined, // if no image -> icon
          };

          return (
            <article
              key={projectId}
              className="group relative grid sm:grid-cols-8 gap-4 sm:gap-8 transition-all"
            >
              {/* Background glow on hover */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-forest-800/10" />

              {/* Project icon/image*/}
              <div className="flex items-center justify-center z-10 sm:col-span-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-linear-to-br from-forest-900 to-forest-800 border border-forest-700 flex items-center justify-center group-hover:border-forest-500 group-hover:shadow-lg group-hover:shadow-forest-500/20 transition-all overflow-hidden">
                  <ProjectIcon projectId={projectId} image={project.image} />
                </div>
              </div>

              {/* Content */}
              <div className="z-10 sm:col-span-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-semibold text-forest-800 group-hover:text-forest-900 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-neutral-700">{project.description}</p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <svg
                          className="h-3 w-3 text-forest-500"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech stack */}
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <li key={tech}>
                      <span className="px-3 py-1 bg-neutral-700 border  rounded-full text-xs font-medium text-n-100 hover:bg-forest-700 transition-colors">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4 text-sm">
                  {project.github && project.github !== '-' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-400 hover:text-forest-400 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && project.demo !== '-' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-forest-400 hover:text-forest-300 transition-colors"
                    >
                      {t('viewDemo')}
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
