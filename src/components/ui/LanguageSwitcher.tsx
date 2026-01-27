'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

   // ✅ Trouve l'ID le plus précis (sous-section prioritaire)
  const getCurrentVisibleId = (): string => {
    const scrollPosition = window.scrollY + 100; // Offset header
    
    // Récupère TOUS les éléments avec un ID dans le DOM
    const elementsWithId = Array.from(document.querySelectorAll('[id]'));
    
    // Filtre ceux qui sont visibles à l'écran
    const visibleElements = elementsWithId
      .map(element => {
        const rect = element.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top;
        
        return {
          id: element.id,
          offsetTop,
          offsetHeight: rect.height,
          // Distance du haut de l'écran (plus c'est petit, plus c'est proche)
          distanceFromTop: Math.abs(offsetTop - scrollPosition)
        };
      })
      // Garde uniquement ceux visibles
      .filter(el => {
        return scrollPosition >= el.offsetTop && 
               scrollPosition < el.offsetTop + el.offsetHeight;
      })
      // Trie par distance (le plus proche en premier)
      .sort((a, b) => a.distanceFromTop - b.distanceFromTop);
    
    // Retourne l'ID le plus précis (= le plus proche du scroll)
    return visibleElements[0]?.id || '';
  };


  const switchLocale = (newLocale: 'fr' | 'en') => {
    startTransition(() => {
      // ✅ Détecte automatiquement TOUS les éléments avec ID
      const currentHash = getCurrentVisibleId();
      
      const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
      const newUrl = currentHash ? `${newPathname}#${currentHash}` : newPathname;
      
      router.replace(newUrl);
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