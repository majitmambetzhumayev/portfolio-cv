'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const params = useParams();
  const locale = params.locale as string;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: 'fr' | 'en') => {
    startTransition(() => {
      const segments = pathname.split('/');
      segments[1] = newLocale;
      router.replace(segments.join('/'));
    });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('fr')}
        disabled={isPending}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          locale === 'fr'
            ? 'bg-forest-400 text-forest-900'
            : 'bg-forest-800/50 text-neutral-400 hover:bg-forest-800 hover:text-neutral-200'
        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        FR
      </button>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          locale === 'en'
            ? 'bg-forest-400 text-forest-900'
            : 'bg-forest-800/50 text-neutral-400 hover:bg-forest-800 hover:text-neutral-200'
        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        EN
      </button>
    </div>
  );
}
