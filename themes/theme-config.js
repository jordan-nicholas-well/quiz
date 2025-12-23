/**
 * THEME CONFIGURATION SYSTEM
 * Central registry for all quiz themes
 */

const THEME_REGISTRY = {};
let currentTheme = null;
let themeQuestions = [];

/**
 * Register a theme in the registry
 */
function registerTheme(themeConfig) {
  THEME_REGISTRY[themeConfig.id] = themeConfig;
}

/**
 * Get a theme by ID
 */
function getTheme(themeId) {
  return THEME_REGISTRY[themeId];
}

/**
 * Get all registered themes
 */
function getAllThemes() {
  return Object.values(THEME_REGISTRY);
}

/**
 * Apply theme CSS variables to document
 */
function applyThemeStyles(themeConfig) {
  const root = document.documentElement;

  // Apply colors
  root.style.setProperty('--color-primary', themeConfig.colors.primary);
  root.style.setProperty('--color-primary-dark', themeConfig.colors.primaryDark);
  root.style.setProperty('--color-secondary', themeConfig.colors.secondary);
  root.style.setProperty('--color-secondary-dark', themeConfig.colors.secondaryDark);
  root.style.setProperty('--color-accent', themeConfig.colors.accent);
  root.style.setProperty('--color-accent-glow', themeConfig.colors.accentGlow);
  root.style.setProperty('--color-background', themeConfig.colors.background);
  root.style.setProperty('--color-surface', themeConfig.colors.surface);
  root.style.setProperty('--color-surface-light', themeConfig.colors.surfaceLight);
  root.style.setProperty('--color-text', themeConfig.colors.text);
  root.style.setProperty('--color-text-muted', themeConfig.colors.textMuted);
  root.style.setProperty('--color-correct', themeConfig.colors.correct);
  root.style.setProperty('--color-wrong', themeConfig.colors.wrong);

  // Apply fonts
  root.style.setProperty('--font-display', themeConfig.fonts.display);
  root.style.setProperty('--font-body', themeConfig.fonts.body);

  // Apply shadow
  root.style.setProperty('--shadow-glow', `0 0 30px ${themeConfig.colors.accentGlow}`);

  // Store current theme
  currentTheme = themeConfig;
}

/**
 * Load theme fonts dynamically
 */
function loadThemeFonts(themeConfig) {
  // Remove existing theme font links
  document.querySelectorAll('link[data-theme-font]').forEach(el => el.remove());

  // Add new font links
  if (themeConfig.fonts.displayUrl) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = themeConfig.fonts.displayUrl;
    link.dataset.themeFont = 'display';
    document.head.appendChild(link);
  }

  if (themeConfig.fonts.bodyUrl && themeConfig.fonts.bodyUrl !== themeConfig.fonts.displayUrl) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = themeConfig.fonts.bodyUrl;
    link.dataset.themeFont = 'body';
    document.head.appendChild(link);
  }
}

/**
 * Create theme decorations (particles, borders, etc.)
 */
function createThemeDecorations(themeConfig, container) {
  // Clear existing decorations
  container.querySelectorAll('.theme-particle').forEach(el => el.remove());
  const lightsContainer = document.getElementById('lights');
  if (lightsContainer) lightsContainer.innerHTML = '';

  const decorations = themeConfig.decorations;

  // Create particles
  if (decorations.particles && decorations.particles.enabled) {
    const particles = decorations.particles;
    for (let i = 0; i < particles.count; i++) {
      const particle = document.createElement('div');
      particle.className = 'snowflake theme-particle';
      particle.innerHTML = particles.emoji;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.fontSize = `${Math.random() * 10 + 8}px`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      container.appendChild(particle);
    }
  }

  // Create top border (lights)
  if (decorations.topBorder && decorations.topBorder.enabled && lightsContainer) {
    const colors = decorations.topBorder.colors;
    for (let i = 0; i < (decorations.topBorder.count || 20); i++) {
      const bulb = document.createElement('div');
      bulb.className = 'light-bulb';
      const colorIndex = i % colors.length;
      bulb.style.background = colors[colorIndex];
      bulb.style.boxShadow = `0 0 15px ${colors[colorIndex]}`;
      bulb.style.animationDelay = `${(colorIndex * 0.2)}s`;
      lightsContainer.appendChild(bulb);
    }
  }
}

/**
 * Get button gradient style for answer buttons
 */
function getButtonGradient(index) {
  if (!currentTheme) return '';
  const gradients = currentTheme.buttonGradients;
  if (gradients && gradients[index]) {
    const g = gradients[index];
    return `linear-gradient(135deg, ${g.from} 0%, ${g.to} 100%)`;
  }
  return '';
}

/**
 * Load questions for a theme
 */
function loadThemeQuestions(themeId) {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window[`QUESTIONS_${themeId.toUpperCase().replace(/-/g, '_')}`]) {
      themeQuestions = window[`QUESTIONS_${themeId.toUpperCase().replace(/-/g, '_')}`];
      resolve(themeQuestions);
      return;
    }

    const script = document.createElement('script');
    script.src = `themes/${themeId}/questions.js`;
    script.onload = () => {
      themeQuestions = window.QUESTIONS || [];
      resolve(themeQuestions);
    };
    script.onerror = () => reject(new Error(`Failed to load questions for theme: ${themeId}`));
    document.head.appendChild(script);
  });
}

/**
 * Get current theme questions
 */
function getThemeQuestions() {
  return themeQuestions;
}
