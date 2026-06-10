import type { Language } from '../i18n/translations'

export const SITE_NAME = 'Amine & Sara — Wedding Invitation'
export const SITE_URL = import.meta.env.VITE_SITE_URL as string | undefined

export interface SeoMeta {
  title: string
  description: string
  keywords: string
  locale: string
}

export const seoMeta: Record<Language, SeoMeta> = {
  en: {
    title: 'Amine Beji & Sara Latrache — Wedding Invitation | June 27–29, 2026',
    description:
      'You are invited to celebrate the wedding of Amine Beji and Sara Latrache. Three days of festivities in Tunisia: Sara\'s Wtia in Sousse, Beji\'s 7enna in Hammamet, and the wedding celebration at Palladium Hammamet.',
    keywords:
      'Amine Beji, Sara Latrache, wedding invitation, Tunisia wedding, Hammamet, Sousse, Wtia, henna, 7enna, Palladium Hammamet, June 2026',
    locale: 'en_US',
  },
  it: {
    title: 'Amine Beji & Sara Latrache — Invito di Matrimonio | 27–29 Giugno 2026',
    description:
      'Siete invitati a celebrare il matrimonio di Amine Beji e Sara Latrache. Tre giorni di festa in Tunisia: Wtia di Sara a Sousse, 7enna di Beji a Hammamet e la celebrazione al Palladium Hammamet.',
    keywords:
      'Amine Beji, Sara Latrache, invito matrimonio, matrimonio Tunisia, Hammamet, Sousse, Wtia, henna, 7enna, Palladium Hammamet, giugno 2026',
    locale: 'it_IT',
  },
}

export function getSiteOrigin(): string {
  if (SITE_URL) return SITE_URL.replace(/\/$/, '')
  if (typeof window !== 'undefined') return window.location.origin
  return ''
}

export function getCanonicalUrl(): string {
  const origin = getSiteOrigin()
  if (!origin) return '/'
  if (typeof window !== 'undefined') return `${origin}${window.location.pathname}`
  return `${origin}/`
}

export function getOgImageUrl(): string {
  const origin = getSiteOrigin()
  return origin ? `${origin}/og-image.svg` : '/og-image.svg'
}

export function buildJsonLd(language: Language) {
  const isItalian = language === 'it'
  const origin = getSiteOrigin() || 'https://amine-and-sara.wedding'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: SITE_NAME,
        description: seoMeta[language].description,
        inLanguage: [language === 'it' ? 'it-IT' : 'en-US'],
      },
      {
        '@type': 'WebPage',
        '@id': `${origin}/#webpage`,
        url: `${origin}/`,
        name: seoMeta[language].title,
        description: seoMeta[language].description,
        isPartOf: { '@id': `${origin}/#website` },
        inLanguage: language === 'it' ? 'it-IT' : 'en-US',
        about: { '@id': `${origin}/#wedding` },
      },
      {
        '@type': 'Event',
        '@id': `${origin}/#wedding`,
        name: isItalian
          ? 'Matrimonio di Amine Beji e Sara Latrache'
          : 'Wedding of Amine Beji and Sara Latrache',
        description: seoMeta[language].description,
        startDate: '2026-06-27',
        endDate: '2026-06-29',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: [
          {
            '@type': 'Place',
            name: "Sara's Wtia — Salle Versailles",
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Sousse',
              addressCountry: 'TN',
            },
          },
          {
            '@type': 'Place',
            name: "Beji's 7enna — Hammamet",
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hammamet',
              addressCountry: 'TN',
            },
          },
          {
            '@type': 'Place',
            name: 'Palladium Hammamet',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hammamet',
              addressCountry: 'TN',
            },
          },
        ],
        organizer: {
          '@type': 'Person',
          name: 'Amine Beji',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${origin}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isItalian ? 'Invito' : 'Invitation',
            item: `${origin}/`,
          },
        ],
      },
    ],
  }
}
