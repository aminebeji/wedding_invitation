import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import WaxSeal from './WaxSeal'
import InvitationContent from './InvitationContent'
import FlowerWatermark from './FlowerWatermark'
import './WeddingInvitation.css'

export type InvitePhase = 'closed' | 'breaking' | 'rising' | 'open'

interface WeddingInvitationProps {
  phase: InvitePhase
  onOpen: () => void
}

function getLetterMotion(phase: InvitePhase) {
  switch (phase) {
    case 'closed':
      return { x: '-50%', y: 82, scale: 0.56, rotateX: 0, zIndex: 2 }
    case 'breaking':
      return { x: '-50%', y: 42, scale: 0.66, rotateX: 3, zIndex: 4 }
    case 'rising':
      return { x: '-50%', y: -115, scale: 0.9, rotateX: -8, zIndex: 10 }
    case 'open':
      return { x: '-50%', y: -20, scale: 1, rotateX: 0, zIndex: 10 }
  }
}

const letterTransition = {
  duration: 0.7,
  ease: [0.33, 1, 0.68, 1] as const,
}

export default function WeddingInvitation({ phase, onOpen }: WeddingInvitationProps) {
  const { t } = useLanguage()
  const isBreaking = phase !== 'closed'
  const isRising = phase === 'rising' || phase === 'open'
  const isOpen = phase === 'open'
  const letterMotion = getLetterMotion(phase)

  return (
    <div className={`invite-scene${isOpen ? ' invite-scene--open' : ''}`}>
      <motion.p
        className="invite-scene__prompt"
        animate={{ opacity: isBreaking ? 0 : 1, y: isBreaking ? -10 : 0 }}
        transition={{ duration: 0.35 }}
      >
        {t.prompt}
      </motion.p>

      <div
        className={[
          'invite-stage',
          isBreaking ? 'invite-stage--revealing' : '',
          isOpen ? 'invite-stage--open' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <motion.div
          className="envelope-shell"
          animate={{ opacity: isOpen ? 0 : 1, y: isRising && !isOpen ? 16 : 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
        >
          <div className="envelope-shell__back" />
          <div className="envelope-shell__front" />
          <motion.div
            className="envelope-shell__flap"
            animate={{ rotateX: isBreaking ? 180 : 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: 'top center' }}
          />
          <div className="envelope-shell__seal">
            <WaxSeal onBreak={onOpen} isBreaking={isBreaking} disabled={phase !== 'closed'} />
          </div>
        </motion.div>

        <motion.div
          className="letter-paper"
          initial={false}
          style={{
            transformOrigin: 'center center',
            transformPerspective: 1200,
            zIndex: letterMotion.zIndex,
          }}
          animate={{
            x: letterMotion.x,
            y: letterMotion.y,
            scale: letterMotion.scale,
            rotateX: letterMotion.rotateX,
          }}
          transition={letterTransition}
        >
          <FlowerWatermark />
          <div className="letter-paper__inner">
            <InvitationContent />
          </div>
        </motion.div>
      </div>

      <motion.p
        className="invite-scene__hint"
        animate={{ opacity: isBreaking ? 0 : 0.65 }}
        transition={{ duration: 0.3 }}
      >
        {t.hint}
      </motion.p>
    </div>
  )
}
