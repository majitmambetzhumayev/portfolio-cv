// app/[locale]/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const titles = {
    fr: 'Développeur Full-Stack',
    en: 'Full-Stack Developer',
  };

  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #0a2f1f, #1a4d33)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 24 }}>Majit Mambetzhumayev</div>
      <div style={{ fontSize: 40, opacity: 0.95 }}>{titles[locale as 'fr' | 'en']}</div>
      <div style={{ fontSize: 28, marginTop: 40, opacity: 0.85 }}>
        Next.js • React • Node.js • TypeScript
      </div>
    </div>,
    { ...size }
  );
}
