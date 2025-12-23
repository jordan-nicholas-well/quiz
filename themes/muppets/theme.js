/**
 * MUPPETS THEME CONFIGURATION
 */
registerTheme({
  id: 'muppets',
  name: 'Muppets Trivia',
  description: "It's time to play the music! Test your Muppet knowledge!",
  icon: '🐸',

  colors: {
    primary: '#4cbb17',
    primaryDark: '#3a9212',
    secondary: '#ff8c00',
    secondaryDark: '#e67a00',
    accent: '#ff69b4',
    accentGlow: 'rgba(255, 105, 180, 0.4)',
    background: '#1a0a1a',
    surface: '#2d1a2d',
    surfaceLight: '#3d2a3d',
    text: '#ffffff',
    textMuted: '#d4a5d4',
    correct: '#4cbb17',
    wrong: '#ff4444'
  },

  fonts: {
    display: "'Luckiest Guy', cursive",
    displayUrl: 'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap',
    body: "'Nunito', sans-serif",
    bodyUrl: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap'
  },

  decorations: {
    particles: {
      enabled: true,
      emoji: '⭐',
      count: 45
    },
    topBorder: {
      enabled: true,
      count: 20,
      colors: ['#4cbb17', '#ff8c00', '#ff69b4', '#9370db', '#ffd700']
    }
  },

  buttonGradients: [
    { from: '#4cbb17', to: '#3a9212' },
    { from: '#ff8c00', to: '#e67a00' },
    { from: '#9370db', to: '#7b5fc4' },
    { from: '#ff69b4', to: '#e65a9f' }
  ],

  qrCode: {
    dark: '#4cbb17',
    light: '#ffffff'
  },

  ui: {
    headingEmoji: '🐸',
    gameOverEmoji: '🎭',
    correctEmoji: '🌈',
    wrongEmoji: '🐻',
    trophyEmoji: '⭐',
    lobbyEmoji: '🎬'
  }
});
