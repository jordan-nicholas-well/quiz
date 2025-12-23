/**
 * DISNEY THEME CONFIGURATION
 */
registerTheme({
  id: 'disney',
  name: 'Disney Trivia',
  description: 'Where dreams come true - magical Disney trivia awaits!',
  icon: '🏰',

  colors: {
    primary: '#1a237e',
    primaryDark: '#0d1259',
    secondary: '#9c27b0',
    secondaryDark: '#7b1fa2',
    accent: '#ffd700',
    accentGlow: 'rgba(255, 215, 0, 0.4)',
    background: '#0a0a1f',
    surface: '#12122e',
    surfaceLight: '#1a1a3e',
    text: '#ffffff',
    textMuted: '#b8b8ff',
    correct: '#4caf50',
    wrong: '#f44336'
  },

  fonts: {
    display: "'Cinzel', serif",
    displayUrl: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap',
    body: "'Quicksand', sans-serif",
    bodyUrl: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap'
  },

  decorations: {
    particles: {
      enabled: true,
      emoji: '✨',
      count: 50
    },
    topBorder: {
      enabled: true,
      count: 20,
      colors: ['#ffd700', '#9c27b0', '#1a237e', '#ff69b4', '#00bcd4']
    }
  },

  buttonGradients: [
    { from: '#1a237e', to: '#0d1259' },
    { from: '#9c27b0', to: '#7b1fa2' },
    { from: '#00796b', to: '#004d40' },
    { from: '#c62828', to: '#8e0000' }
  ],

  qrCode: {
    dark: '#1a237e',
    light: '#ffffff'
  },

  ui: {
    headingEmoji: '🏰',
    gameOverEmoji: '✨',
    correctEmoji: '🎉',
    wrongEmoji: '💫',
    trophyEmoji: '👑',
    lobbyEmoji: '🪄'
  }
});
