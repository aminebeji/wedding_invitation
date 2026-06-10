import { useEffect, useState } from 'react'
import PolkaBackground from './components/PolkaBackground'
import LanguageSwitcher from './components/LanguageSwitcher'
import WeddingInvitation from './components/WeddingInvitation'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import './App.css'

function AppContent() {
  const [phase, setPhase] = useState<'closed' | 'breaking' | 'rising' | 'open'>('closed')
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = 'ltr'
  }, [language])

  const handleOpen = () => {
    if (phase !== 'closed') return
    setPhase('breaking')
    setTimeout(() => setPhase('rising'), 420)
    setTimeout(() => setPhase('open'), 1050)
  }

  return (
    <div className="app">
      <PolkaBackground />
      <LanguageSwitcher />
      <WeddingInvitation phase={phase} onOpen={handleOpen} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
