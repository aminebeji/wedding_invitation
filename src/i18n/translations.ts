export type Language = 'en' | 'it'

export interface Quote {
  text: string
  attribution: string
}

export interface EventTranslation {
  day: string
  date: string
  title: string
  time: string
  location: string
}

export interface Translation {
  langLabel: string
  prompt: string
  hint: string
  sealAria: string
  sealHint: string
  invited: string
  dateRange: string
  preheader: string
  tagline: string
  quotes: Quote[]
  subtitle: string
  festivities: string
  timeLabel: string
  venueLabel: string
  closing: string
  closingEm: string
  signature: string
  groomName: string
  brideName: string
  signatureNames: string
  events: EventTranslation[]
}

export const translations: Record<Language, Translation> = {
  en: {
    langLabel: 'English',
    prompt: 'A special invitation awaits you...',
    hint: 'Break the wax seal to open',
    sealAria: 'Open invitation',
    sealHint: 'Open',
    invited: "You're Invited",
    dateRange: 'June 27 – 29, 2026',
    preheader: 'With all our love, we invite you to celebrate',
    tagline: 'The one where they get married',
    quotes: [
      { text: "He's her lobster.", attribution: 'Phoebe Buffay, Friends' },
      { text: 'You make me happier than I ever thought I could be.', attribution: 'Chandler Bing, Friends' },
      { text: 'I got off the plane.', attribution: 'Rachel Green, Friends' },
      {
        text: 'I love you in a way that I have never loved anyone, nor do I believe I ever will again.',
        attribution: 'Sheldon Cooper, The Big Bang Theory',
      },
    ],
    subtitle: 'Join us for three days of joy, tradition,\nand unforgettable moments',
    festivities: 'The Festivities',
    timeLabel: 'Time',
    venueLabel: 'Venue',
    closing: 'Your presence is the greatest gift we could ask for.',
    closingEm: 'May love guide our steps into this beautiful new chapter.',
    signature: 'With gratitude,',
    groomName: 'Amine Beji',
    brideName: 'Sara Latrache',
    signatureNames: 'Amine & Sara',
    events: [
      {
        day: 'Friday',
        date: 'June 27, 2026',
        title: "Sara's Wtia",
        time: '3:00 PM',
        location: 'Salle Versailles, Sousse',
      },
      {
        day: 'Saturday',
        date: 'June 28, 2026',
        title: "Beji's 7enna",
        time: 'All day',
        location: "Beji's House, Hammamet — Dinner included",
      },
      {
        day: 'Sunday',
        date: 'June 29, 2026',
        title: 'The Wedding Celebration',
        time: '9:00 PM',
        location: 'Palladium, Hammamet',
      },
    ],
  },
  it: {
    langLabel: 'Italiano',
    prompt: 'Un invito speciale vi aspetta...',
    hint: 'Rompere il sigillo di cera per aprire',
    sealAria: 'Aprire invito',
    sealHint: 'Apri',
    invited: 'Siete Invitati',
    dateRange: '27 – 29 Giugno 2026',
    preheader: 'Con tutto il nostro amore, vi invitiamo a celebrare',
    tagline: 'Quella in cui si sposano',
    quotes: [
      { text: 'È il suo aragosta.', attribution: 'Phoebe Buffay, Friends' },
      { text: 'Mi rendi più felice di quanto avrei mai pensato.', attribution: 'Chandler Bing, Friends' },
      { text: 'Sono scesa dall\'aereo.', attribution: 'Rachel Green, Friends' },
      {
        text: 'Ti amo in un modo in cui non ho mai amato nessun altro, e non credo di poterlo fare di nuovo.',
        attribution: 'Sheldon Cooper, The Big Bang Theory',
      },
    ],
    subtitle: 'Unitevi a noi per tre giorni di gioia, tradizione\ne momenti indimenticabili',
    festivities: 'Le Festività',
    timeLabel: 'Orario',
    venueLabel: 'Luogo',
    closing: 'La vostra presenza è il regalo più grande che possiamo desiderare.',
    closingEm: 'Che l\'amore guidi i nostri passi verso questo nuovo e meraviglioso capitolo.',
    signature: 'Con gratitudine,',
    groomName: 'Amine Beji',
    brideName: 'Sara Latrache',
    signatureNames: 'Amine & Sara',
    events: [
      {
        day: 'Venerdì',
        date: '27 Giugno 2026',
        title: 'Wtia di Sara',
        time: '15:00',
        location: 'Salle Versailles, Sousse',
      },
      {
        day: 'Sabato',
        date: '28 Giugno 2026',
        title: '7enna di Beji',
        time: 'Tutto il giorno',
        location: 'Casa di Beji, Hammamet — Cena inclusa',
      },
      {
        day: 'Domenica',
        date: '29 Giugno 2026',
        title: 'La Celebrazione del Matrimonio',
        time: '21:00',
        location: 'Palladium, Hammamet',
      },
    ],
  },
}

export function detectLanguage(): Language {
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('it')) return 'it'
  return 'en'
}
