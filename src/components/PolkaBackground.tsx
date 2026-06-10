import { motion } from 'framer-motion'
import './PolkaBackground.css'

export default function PolkaBackground() {
  return (
    <div className="polka-bg" aria-hidden="true">
      <motion.div
        className="polka-glow polka-glow--left"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="polka-glow polka-glow--right"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
