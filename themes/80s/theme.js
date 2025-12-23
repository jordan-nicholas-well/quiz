/**
 * 80s THEME CONFIGURATION
 */
registerTheme({
  id: '80s',
  name: '80s Trivia',
  description: 'Totally radical trivia from the decade of big hair and synth!',
  icon: '🕹️',

  colors: {
    primary: '#ff00ff',
    primaryDark: '#cc00cc',
    secondary: '#00ffff',
    secondaryDark: '#00cccc',
    accent: '#ffff00',
    accentGlow: 'rgba(255, 255, 0, 0.4)',
    background: '#0a0a1a',
    surface: '#1a1a2e',
    surfaceLight: '#2a2a3e',
    text: '#ffffff',
    textMuted: '#b0b0ff',
    correct: '#00ff00',
    wrong: '#ff0066'
  },

  fonts: {
    display: "'Press Start 2P', cursive",
    displayUrl: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
    body: "'Orbitron', sans-serif",
    bodyUrl: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap'
  },

  decorations: {
    particles: {
      enabled: true,
      emoji: '⭐',
      count: 40
    },
    topBorder: {
      enabled: true,
      count: 25,
      colors: ['#ff00ff', '#00ffff', '#ffff00', '#ff0066', '#00ff00']
    }
  },

  buttonGradients: [
    { from: '#ff00ff', to: '#cc00cc' },
    { from: '#00ffff', to: '#00cccc' },
    { from: '#ff0066', to: '#cc0052' },
    { from: '#9900ff', to: '#7700cc' }
  ],

  qrCode: {
    dark: '#ff00ff',
    light: '#0a0a1a'
  },

  ui: {
    headingEmoji: '🕹️',
    gameOverEmoji: '📼',
    correctEmoji: '🎸',
    wrongEmoji: '💔',
    trophyEmoji: '🏆',
    lobbyEmoji: '🎮'
  }
});
