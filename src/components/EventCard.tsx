import type { ReactNode } from 'react'
import './EventCard.css'

export interface EventData {
  day: string
  date: string
  title: string
  time: string
  location: string
}

interface EventCardProps {
  event: EventData
  icon: ReactNode
  index: number
  timeLabel: string
  venueLabel: string
}

export default function EventCard({ event, icon, timeLabel, venueLabel }: EventCardProps) {
  return (
    <article className="event-card">
      <div className="event-card__icon" aria-hidden="true">
        {icon}
      </div>
      <div className="event-card__content">
        <span className="event-card__day">{event.day}</span>
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__date">{event.date}</p>
        <p className="event-card__time">
          <span className="event-card__label">{timeLabel}</span> {event.time}
        </p>
        <p className="event-card__location">
          <span className="event-card__label">{venueLabel}</span> {event.location}
        </p>
      </div>
      <div className="event-card__dot" aria-hidden="true" />
    </article>
  )
}
