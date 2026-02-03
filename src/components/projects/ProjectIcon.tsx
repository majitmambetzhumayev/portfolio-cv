// components/projects/ProjectIcon.tsx
import { Rocket, BarChart3, Server } from 'lucide-react';
import Image from 'next/image';

type ProjectId = 'saas' | 'management' | 'api';

interface ProjectIconProps {
  projectId: ProjectId;
  image?: string;
}

export default function ProjectIcon({ projectId, image }: ProjectIconProps) {
  // Maps default icons
  const defaultIcons = {
    saas: Rocket,
    management: BarChart3,
    api: Server,
  };

  const Icon = defaultIcons[projectId];

  return (
    <>
      {image ? (
        // displays image if there is one
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image src={image} alt={`${projectId} preview`} fill className="object-cover" />
        </div>
      ) : (
        // if no image -> lucide icon
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-forest-400 group-hover:text-forest-300 transition-colors" />
      )}
    </>
  );
}
