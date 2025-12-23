/**
 * 2000s THEME CONFIGURATION
 */
registerTheme({
  id: '2000s',
  name: '2000s Trivia',
  description: 'Y2K vibes and millennium memories - test your 2000s knowledge!',
  icon: '💿',

  colors: {
    primary: '#0066cc',
    primaryDark: '#004d99',
    secondary: '#c0c0c0',
    secondaryDark: '#a0a0a0',
    accent: '#00ccff',
    accentGlow: 'rgba(0, 204, 255, 0.4)',
    background: '#0d1117',
    surface: '#161b22',
    surfaceLight: '#21262d',
    text: '#ffffff',
    textMuted: '#8b949e',
    correct: '#3fb950',
    wrong: '#f85149'
  },

  fonts: {
    display: "'Audiowide', cursive",
    displayUrl: 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap',
    body: "'Exo 2', sans-serif",
    bodyUrl: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap'
  },

  decorations: {
    particles: {
      enabled: true,
      emoji: '✨',
      count: 40
    },
    topBorder: {
      enabled: true,
      count: 20,
      colors: ['#0066cc', '#00ccff', '#c0c0c0', '#ff6600', '#cc00ff']
    }
  },

  buttonGradients: [
    { from: '#0066cc', to: '#004d99' },
    { from: '#c0c0c0', to: '#909090' },
    { from: '#ff6600', to: '#cc5200' },
    { from: '#9933ff', to: '#7a29cc' }
  ],

  qrCode: {
    dark: '#0066cc',
    light: '#ffffff'
  },

  ui: {
    headingEmoji: '💿',
    gameOverEmoji: '📱',
    correctEmoji: '🎉',
    wrongEmoji: '😅',
    trophyEmoji: '🏆',
    lobbyEmoji: '💻'
  }
});
