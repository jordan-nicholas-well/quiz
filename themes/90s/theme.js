/**
 * 90s THEME CONFIGURATION
 */
registerTheme({
  id: '90s',
  name: '90s Trivia',
  description: 'All that and a bag of chips - 90s pop culture awaits!',
  icon: '📼',

  colors: {
    primary: '#009688',
    primaryDark: '#00796b',
    secondary: '#9c27b0',
    secondaryDark: '#7b1fa2',
    accent: '#ff9800',
    accentGlow: 'rgba(255, 152, 0, 0.4)',
    background: '#1a1a2e',
    surface: '#16213e',
    surfaceLight: '#1f2b4a',
    text: '#ffffff',
    textMuted: '#90caf9',
    correct: '#4caf50',
    wrong: '#f44336'
  },

  fonts: {
    display: "'Bungee', cursive",
    displayUrl: 'https://fonts.googleapis.com/css2?family=Bungee&display=swap',
    body: "'Quicksand', sans-serif",
    bodyUrl: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap'
  },

  decorations: {
    particles: {
      enabled: true,
      emoji: '💿',
      count: 35
    },
    topBorder: {
      enabled: true,
      count: 20,
      colors: ['#009688', '#9c27b0', '#ff9800', '#4caf50', '#e91e63']
    }
  },

  buttonGradients: [
    { from: '#009688', to: '#00796b' },
    { from: '#9c27b0', to: '#7b1fa2' },
    { from: '#ff5722', to: '#e64a19' },
    { from: '#3f51b5', to: '#303f9f' }
  ],

  qrCode: {
    dark: '#9c27b0',
    light: '#ffffff'
  },

  ui: {
    headingEmoji: '📼',
    gameOverEmoji: '💾',
    correctEmoji: '🎧',
    wrongEmoji: '😬',
    trophyEmoji: '🏆',
    lobbyEmoji: '📟'
  }
});
