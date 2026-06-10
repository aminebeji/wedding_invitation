import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './WaxSeal.css'

interface WaxSealProps {
  onBreak: () => void
  isBreaking: boolean
  disabled?: boolean
}

export default function WaxSeal({ onBreak, isBreaking, disabled = false }: WaxSealProps) {
  const { t } = useLanguage()

  if (isBreaking) {
    return (
      <motion.div
        className="wax-seal wax-seal--breaking"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1.8, opacity: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="wax-fragment"
            initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: 0.2,
              x: Math.cos((i * Math.PI) / 5) * 70,
              y: Math.sin((i * Math.PI) / 5) * 70,
              opacity: 0,
              rotate: i * 36 + 20,
            }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          />
        ))}
        <motion.span
          className="wax-crack"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    )
  }

  return (
    <motion.button
      className="wax-seal"
      onClick={onBreak}
      disabled={disabled}
      aria-label={t.sealAria}
      whileHover={disabled ? undefined : { scale: 1.08 }}
      whileTap={disabled ? undefined : { scale: 0.92 }}
      animate={{
        boxShadow: [
          '0 4px 20px rgba(139, 26, 26, 0.4), inset 0 2px 4px rgba(255,255,255,0.15)',
          '0 8px 32px rgba(139, 26, 26, 0.6), inset 0 2px 6px rgba(255,255,255,0.25)',
          '0 4px 20px rgba(139, 26, 26, 0.4), inset 0 2px 4px rgba(255,255,255,0.15)',
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="wax-seal__drip wax-seal__drip--1" />
      <span className="wax-seal__drip wax-seal__drip--2" />
      <span className="wax-seal__drip wax-seal__drip--3" />
      <span className="wax-seal__ring" />
      <span className="wax-seal__initials">A &amp; S</span>
      <span className="wax-seal__hint">{t.sealHint}</span>
    </motion.button>
  )
}
