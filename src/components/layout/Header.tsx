'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('header');

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader, { passive: true });
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <nav className="glass-header">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-body font-semibold hover:text-forest-400 transition-colors "
          >
            majit.dev
          </Link>

          {/* Navigation desktop */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link
                href='#cv' 
                className="text-sm font-medium hover:text-forest-400 transition-colors"
              >
                {t('cv') || 'cv'}
              </Link>
            </li>
            <li>
              <Link 
                href="#projects" 
                className="text-sm font-medium hover:text-forest-400 transition-colors"
              >
                {t('projects') || 'Projects'}
              </Link>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-forest-400 transition-colors"
              >
                {t('contact') || 'Contact'}
              </a>
            </li>
          </ul>

          {/* Language switcher */}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}