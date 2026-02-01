'use client';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-forest-900 px-24">
      <div className="max-w-7xl mx-auto px-6 py-24 md:px-12 md:py-20 lg:px-24 lg:pb-12 lg:py-0">
        <p>
          {t('builtWith')} <span className="text-neutral-400">Next.js</span> {t('and')}{' '}
          <span className="text-neutral-400">Tailwind CSS</span>. {t('deployedOn')}{' '}
          <span className="text-neutral-400">Vercel</span>.
        </p>
      </div>
    </footer>
  );
}
