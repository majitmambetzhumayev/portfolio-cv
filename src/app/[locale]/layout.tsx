// app/[locale]/layout.tsx
import '../globals.css';
import { Inter, Fraunces } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    fr: 'Majit Mambetzhumayev - Développeur Full-Stack',
    en: 'Majit Mambetzhumayev - Full-Stack Developer',
  };

  const descriptions = {
    fr: 'Portfolio et CV - Next.js, React, Node.js, TypeScript - Développement web moderne et automatisation',
    en: 'Portfolio and CV - Next.js, React, Node.js, TypeScript - Modern web development and automation',
  };

  return {
    title: {
      default: titles[locale as Locale],
      template: `%s | ${titles[locale as Locale]}`,
    },
    description: descriptions[locale as Locale],
    metadataBase: new URL('https://majit.dev'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: '/fr',
        en: '/en',
      },
    },
    openGraph: {
      title: titles[locale as Locale],
      description: descriptions[locale as Locale],
      url: `https://majit.dev/${locale}`,
      siteName: 'Majit Mambetzhumayev',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: titles[locale as Locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as Locale],
      description: descriptions[locale as Locale],
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="min-h-screen bg-forest-900">{children}</div>
          <Footer />
        </NextIntlClientProvider>

        {/* Umami Analytics - Production only */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="d40ce924-8416-4320-bf60-9c8c3af02963"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
