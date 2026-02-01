import React from 'react';

interface CVSectionTitleProps {
  title: string;
  desktopHidden?: boolean;
}

const CVSectionTitle: React.FC<CVSectionTitleProps> = ({ title, desktopHidden = false }) => {
  const hidden = desktopHidden ? 'lg:hidden' : '';

  return (
    <div
      className={`sticky top-0 z-20 -mx-6 w-full bg-forest-900/75 px-6 pt-4 pb-2 lg:py-5 backdrop-blur ${hidden}`}
    >
      <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-200">{title}</h2>
    </div>
  );
};

export default CVSectionTitle;
