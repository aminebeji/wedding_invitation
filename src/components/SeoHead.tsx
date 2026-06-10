import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import {
  SITE_NAME,
  buildJsonLd,
  getCanonicalUrl,
  getOgImageUrl,
  seoMeta,
} from '../lib/seo'

const JSON_LD_ID = 'wedding-json-ld'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export default function SeoHead() {
  const { language } = useLanguage()
  const meta = seoMeta[language]

  useEffect(() => {
    document.title = meta.title

    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'keywords', meta.keywords)
    upsertMeta('name', 'author', 'Amine Beji & Sara Latrache')
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('name', 'googlebot', 'index, follow')

    upsertLink('canonical', getCanonicalUrl())

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', getCanonicalUrl())
    upsertMeta('property', 'og:locale', meta.locale)
    upsertMeta('property', 'og:image', getOgImageUrl())
    upsertMeta('property', 'og:image:alt', 'Wedding invitation for Amine Beji and Sara Latrache')
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '630')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', getOgImageUrl())
    upsertMeta('name', 'twitter:image:alt', 'Wedding invitation for Amine Beji and Sara Latrache')

    let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = JSON_LD_ID
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(buildJsonLd(language))
  }, [language, meta])

  return null
}
