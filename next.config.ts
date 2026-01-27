import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90, 95, 100], // ← Ajoute cette ligne
  },
};

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
  
);

export default withNextIntl(nextConfig);
