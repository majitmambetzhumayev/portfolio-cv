// components/ContactSection.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
      <p className="text-neutral-400 mb-8">{t('subtitle')}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t('name')}</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-forest-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('email')}</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-forest-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('message')}</label>
          <textarea
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-forest-500 focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 bg-forest-600 hover:bg-forest-500 rounded-lg font-medium transition disabled:opacity-50"
        >
          {status === 'loading' ? t('sending') : t('send')}
        </button>

        {status === 'success' && (
          <p className="text-forest-400 text-center">{t('success')}</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center">{t('error')}</p>
        )}
      </form>
    </section>
  );
}