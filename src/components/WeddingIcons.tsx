interface IconProps {
  className?: string
}

export function CelebrationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M14 32c0-6 4-10 10-10s10 4 10 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M24 22v-6M24 16l-3 3M24 16l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M10 36h28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="16" cy="30" rx="4" ry="6" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="32" cy="30" rx="4" ry="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="12" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="18" cy="14" r="1.2" fill="currentColor" opacity="0.35" />
      <circle cx="30" cy="14" r="1.2" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

export function HennaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 8c-4 0-7 3-7 7v4c0 8 7 14 7 21 0-7 7-13 7-21v-4c0-4-3-7-7-7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 24c2 2 6 2 8 0M22 28c1.5 1.5 4.5 1.5 6 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 14c-3 2-5 5-5 9M32 14c3 2 5 5 5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M24 40v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function RingsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="20" cy="26" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="22" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 20c2-4 6-6 10-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M34 16c-2-4-6-6-10-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M24 8l1.5 3 3.5.5-2.5 2.5.5 3.5L24 15l-3 2.5.5-3.5L19 11.5l3.5-.5L24 8z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  )
}
