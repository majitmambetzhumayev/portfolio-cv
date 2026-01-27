// components/projects/ProjectIcon.tsx
import { Rocket, BarChart3, Server } from 'lucide-react';
import Image from 'next/image';

type ProjectId = 'saas' | 'analytics' | 'api';

interface ProjectIconProps {
  projectId: ProjectId;
  image?: string;
}

export default function ProjectIcon({ projectId, image }: ProjectIconProps) {
  // Map des icônes par défaut
  const defaultIcons = {
    saas: Rocket,
    analytics: BarChart3,
    api: Server
  };

  const Icon = defaultIcons[projectId];

  return (
    <>
      {image ? (
        // Si image fournie, l'afficher
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`${projectId} preview`}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        // Sinon, icône Lucide
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-forest-400 group-hover:text-forest-300 transition-colors" />
      )}
    </>
  );
}