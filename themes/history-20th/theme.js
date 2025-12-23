/**
 * 20TH CENTURY HISTORY THEME CONFIGURATION
 */
registerTheme({
  id: 'history-20th',
  name: '20th Century History',
  description: 'Journey through 100 years of world-changing events!',
  icon: '📚',

  colors: {
    primary: '#8B4513',
    primaryDark: '#654321',
    secondary: '#1a365d',
    secondaryDark: '#0f2340',
    accent: '#d4a574',
    accentGlow: 'rgba(212, 165, 116, 0.4)',
    background: '#1a1510',
    surface: '#2d2520',
    surfaceLight: '#3d352d',
    text: '#f4e4bc',
    textMuted: '#a89880',
    correct: '#22c55e',
    wrong: '#ef4444'
  },

  fonts: {
    display: "'Playfair Display', serif",
    displayUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap',
    body: "'Lora', serif",
    bodyUrl: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap'
  },

  decorations: {
    particles: {
      enabled: true,
      emoji: '📜',
      count: 25
    },
    topBorder: {
      enabled: true,
      count: 15,
      colors: ['#d4a574', '#8B4513', '#1a365d', '#654321', '#a89880']
    }
  },

  buttonGradients: [
    { from: '#8B4513', to: '#654321' },
    { from: '#1a365d', to: '#0f2340' },
    { from: '#704214', to: '#5a3510' },
    { from: '#4a3728', to: '#362818' }
  ],

  qrCode: {
    dark: '#1a365d',
    light: '#f4e4bc'
  },

  ui: {
    headingEmoji: '📚',
    gameOverEmoji: '🏛️',
    correctEmoji: '✨',
    wrongEmoji: '📖',
    trophyEmoji: '🏆',
    lobbyEmoji: '🌍'
  }
});
