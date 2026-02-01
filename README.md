# Portfolio & CV

Personal portfolio website built with Next.js 16, featuring bilingual support (French/English) and a contact form.

**Live:** [majit.dev](https://majit.dev)

---

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS** for styling
- **next-intl v4** for i18n
- **Resend** for email handling
- **Umami** for privacy-focused analytics

---

## Features

- 🌍 Bilingual (FR/EN) with automatic locale detection
- 📱 Fully responsive design
- 📧 Working contact form with email notifications
- 🎨 Custom fonts (Fraunces + Inter)
- 🔍 SEO optimized with OpenGraph metadata
- 📊 Privacy-focused analytics (production only)

---

## Quick Start

```bash
# Clone
git clone https://github.com/majitmambetzhumayev/portfolio-cv.git
cd portfolio-cv

# Install
pnpm install

# Setup environment
cp .env.example .env.local
# Fill in your API keys

# Run
pnpm dev
```

Visit `http://localhost:3000/fr` or `/en`

---

## Environment Variables

```env
RESEND_API_KEY=your_resend_key
RESEND_FROM_EMAIL=contact@majit.dev
RESEND_TO_EMAIL=your-email@example.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your_umami_id
```

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing
│   └── api/contact/        # Contact form endpoint
├── components/
│   ├── cv/                 # CV section
│   ├── projects/           # Projects showcase
│   └── contact/            # Contact form
├── i18n/
│   ├── routing.ts          # Locale configuration
│   └── request.ts          # Server config
├── messages/               # Translations (fr.json, en.json)
└── proxy.ts                # i18n middleware (Next.js 16)
```

---

## Deployment

Deployed on Vercel with automatic deployments from `main` branch.

Custom domain configured via Squarespace DNS → Vercel.

---

## Contact

**Majit Mambetzhumayev**  
Full-Stack Developer

- 🌐 [majit.dev](https://majit.dev)
- 📧 contact@majit.dev
- 💼 [GitHub](https://github.com/majitmambetzhumayev)
