import type { ReactNode } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import EventCard from './EventCard'
import { CelebrationIcon, HennaIcon, RingsIcon } from './WeddingIcons'
import './InvitationContent.css'

const eventIcons: ReactNode[] = [
  <CelebrationIcon key="celebration" />,
  <HennaIcon key="henna" />,
  <RingsIcon key="rings" />,
]

export default function InvitationContent() {
  const { t } = useLanguage()

  return (
    <div className="invitation">
      <div className="invitation__paper">
        <div className="invitation__ornament invitation__ornament--top">
          <span className="ornament-line" />
          <span className="ornament-heart">♥</span>
          <span className="ornament-line" />
        </div>

        <p className="invitation__preheader">{t.preheader}</p>

        <h1 className="invitation__names">
          <span className="name name--groom">{t.groomName}</span>
          <span className="name-ampersand">&</span>
          <span className="name name--bride">{t.brideName}</span>
        </h1>

        <p className="invitation__tagline">{t.tagline}</p>

        <div className="invitation__quotes">
          {t.quotes.map((quote) => (
            <blockquote key={quote.text} className="invitation__quote-block">
              <p className="invitation__quote-text">&ldquo;{quote.text}&rdquo;</p>
              <cite className="invitation__quote-source">— {quote.attribution}</cite>
            </blockquote>
          ))}
        </div>

        <div className="invitation__divider">
          <span />
          <span className="invitation__divider-icon">✦</span>
          <span />
        </div>

        <p className="invitation__subtitle">
          {t.subtitle.split('\n').map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        <section className="invitation__events">
          <h2 className="invitation__events-title">{t.festivities}</h2>
          <div className="invitation__timeline">
            {t.events.map((event, i) => (
              <EventCard
                key={event.date}
                event={event}
                icon={eventIcons[i]}
                index={i}
                timeLabel={t.timeLabel}
                venueLabel={t.venueLabel}
              />
            ))}
          </div>
        </section>

        <div className="invitation__closing">
          <p className="invitation__closing-text">
            {t.closing}
            <br />
            <em>{t.closingEm}</em>
          </p>
          <p className="invitation__signature">
            {t.signature}
            <br />
            <strong>{t.signatureNames}</strong>
          </p>
        </div>

        <div className="invitation__ornament invitation__ornament--bottom">
          <span className="ornament-dot" />
          <span className="ornament-dot ornament-dot--purple" />
          <span className="ornament-dot" />
        </div>
      </div>
    </div>
  )
}
