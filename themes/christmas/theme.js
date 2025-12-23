/**
 * CHRISTMAS THEME CONFIGURATION
 */
registerTheme({
  id: 'christmas',
  name: 'Christmas Trivia',
  description: 'Test your holiday knowledge with festive Christmas trivia!',
  icon: '🎄',

  colors: {
    primary: '#c41e3a',
    primaryDark: '#9a162d',
    secondary: '#165B33',
    secondaryDark: '#0f4025',
    accent: '#FFD700',
    accentGlow: 'rgba(255, 215, 0, 0.4)',
    background: '#0a120a',
    surface: '#132613',
    surfaceLight: '#1a3a1a',
    text: '#ffffff',
    textMuted: '#8cb88c',
    correct: '#22c55e',
    wrong: '#ef4444'
  },

  fonts: {
    display: "'Mountains of Christmas', cursive",
    displayUrl: 'https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap',
    body: "'Nunito', sans-serif",
    bodyUrl: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap'
  },

  decorations: {
    particles: {
      enabled: true,
      emoji: '❄',
      count: 50
    },
    topBorder: {
      enabled: true,
      count: 20,
      colors: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181']
    }
  },

  buttonGradients: [
    { from: '#c41e3a', to: '#a01830' },
    { from: '#165B33', to: '#0d3d22' },
    { from: '#0077be', to: '#005a8f' },
    { from: '#7c3aed', to: '#5b21b6' }
  ],

  qrCode: {
    dark: '#165B33',
    light: '#ffffff'
  },

  ui: {
    headingEmoji: '🎄',
    gameOverEmoji: '🎄',
    correctEmoji: '🎉',
    wrongEmoji: '😢',
    trophyEmoji: '🏆',
    lobbyEmoji: '🎅'
  }
});
