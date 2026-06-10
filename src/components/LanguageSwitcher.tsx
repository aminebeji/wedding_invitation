import { useLanguage } from '../i18n/LanguageContext'
import { translations, type Language } from '../i18n/translations'
import './LanguageSwitcher.css'

const languages: Language[] = ['en', 'it']

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="lang-switcher">
      <label className="lang-switcher__label" htmlFor="lang-select">
        Language
      </label>
      <div className="lang-switcher__select-wrap">
        <select
          id="lang-select"
          className="lang-switcher__select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          aria-label="Select language"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {translations[lang].langLabel}
            </option>
          ))}
        </select>
        <span className="lang-switcher__chevron" aria-hidden="true">
          ▾
        </span>
      </div>
    </div>
  )
}
