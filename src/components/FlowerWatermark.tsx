import './FlowerWatermark.css'

function DaisyFlower({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="28"
          rx="9"
          ry="18"
          fill="currentColor"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  )
}

function RoseBloom({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.9" />
      <path
        d="M40 40c-12-8-22-4-24 6 10-2 18 2 24 10M40 40c12-8 22-4 24 6-10-2-18 2-24 10M40 40c-4-14 4-22 14-20-4 10-2 18 6 24M40 40c4-14-4-22-14-20 4 10 2 18-6 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function VineSprig({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 140" fill="none">
      <path
        d="M30 8c-6 28-4 56 0 84 4 28 2 48-6 52"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="42" cy="36" rx="10" ry="6" fill="currentColor" transform="rotate(35 42 36)" />
      <ellipse cx="18" cy="68" rx="9" ry="6" fill="currentColor" transform="rotate(-25 18 68)" />
      <ellipse cx="40" cy="100" rx="10" ry="6" fill="currentColor" transform="rotate(20 40 100)" />
      <circle cx="44" cy="52" r="4" fill="currentColor" opacity="0.7" />
      <circle cx="22" cy="118" r="3.5" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

export default function FlowerWatermark() {
  return (
    <div className="flower-watermark" aria-hidden="true">
      <DaisyFlower className="flower-watermark__svg flower-watermark__svg--center" />

      <svg className="flower-watermark__svg flower-watermark__svg--corner-tl" viewBox="0 0 120 120" fill="none">
        <path d="M20 60c15-20 35-25 50-15 10 7 8 22-5 30-18 10-40 2-45-15z" fill="currentColor" />
        <path d="M35 45c8-5 18-4 22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <svg className="flower-watermark__svg flower-watermark__svg--corner-tr" viewBox="0 0 120 120" fill="none">
        <path d="M100 60c-15-20-35-25-50-15-10 7-8 22 5 30 18 10 40 2 45-15z" fill="currentColor" />
        <circle cx="78" cy="42" r="6" fill="currentColor" opacity="0.6" />
      </svg>

      <svg className="flower-watermark__svg flower-watermark__svg--corner-bl" viewBox="0 0 120 120" fill="none">
        <path d="M60 100c-20-15-25-35-15-50 7-10 22-8 30 5 10 18 2 40-15 45z" fill="currentColor" />
        <ellipse cx="48" cy="72" rx="8" ry="5" fill="currentColor" transform="rotate(-15 48 72)" />
      </svg>

      <svg className="flower-watermark__svg flower-watermark__svg--corner-br" viewBox="0 0 120 120" fill="none">
        <path d="M60 20c20 15 25 35 15 50-7 10-22 8-30-5-10-18-2-40 15-45z" fill="currentColor" />
      </svg>

      <VineSprig className="flower-watermark__svg flower-watermark__svg--vine-left" />
      <VineSprig className="flower-watermark__svg flower-watermark__svg--vine-right" />

      <RoseBloom className="flower-watermark__svg flower-watermark__svg--rose-1" />
      <RoseBloom className="flower-watermark__svg flower-watermark__svg--rose-2" />
      <DaisyFlower className="flower-watermark__svg flower-watermark__svg--daisy-1" />
      <DaisyFlower className="flower-watermark__svg flower-watermark__svg--daisy-2" />
      <DaisyFlower className="flower-watermark__svg flower-watermark__svg--daisy-3" />

      <svg className="flower-watermark__svg flower-watermark__svg--top-garland" viewBox="0 0 300 40" fill="none">
        <path
          d="M10 28c30-18 60-18 90 0s60 18 90 0 60-18 90 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {[40, 100, 160, 220, 260].map((cx) => (
          <circle key={cx} cx={cx} cy="18" r="5" fill="currentColor" />
        ))}
      </svg>
    </div>
  )
}
