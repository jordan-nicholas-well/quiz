# Multi-Theme Quiz Implementation Plan

## Overview

Transform the single-theme Christmas quiz into a multi-theme platform with a theme selection screen and 7 distinct themes (existing Christmas + 6 new themes).

---

## Phase 1: Theme Architecture & File Structure

### 1.1 Create Modular File Structure

```
/home/user/quiz/
├── index.html              # Main app (refactored)
├── themes/
│   ├── theme-config.js     # Theme registry and shared utilities
│   ├── christmas/
│   │   ├── theme.js        # Christmas theme config (colors, fonts, decorations)
│   │   └── questions.js    # Christmas questions (existing, renamed)
│   ├── history-20th/
│   │   ├── theme.js        # 20th Century History theme config
│   │   └── questions.js    # 200+ history questions
│   ├── 80s/
│   │   ├── theme.js        # 80s theme config (neon, retro)
│   │   └── questions.js    # 200+ 80s trivia questions
│   ├── 90s/
│   │   ├── theme.js        # 90s theme config (grunge, vaporwave)
│   │   └── questions.js    # 200+ 90s trivia questions
│   ├── 2000s/
│   │   ├── theme.js        # 2000s theme config (Y2K, tech)
│   │   └── questions.js    # 200+ 2000s trivia questions
│   ├── muppets/
│   │   ├── theme.js        # Muppets theme config (felt, rainbow)
│   │   └── questions.js    # 200+ Muppets questions
│   └── disney/
│       ├── theme.js        # Disney theme config (magic, castle)
│       └── questions.js    # 200+ Disney questions
└── README.md
```

### 1.2 Theme Configuration Schema

Each theme.js will export a configuration object:

```javascript
const THEME_CONFIG = {
  id: "christmas",
  name: "Christmas Trivia",
  description: "Test your holiday knowledge!",
  icon: "🎄",

  // Color palette
  colors: {
    primary: "#c41e3a",
    secondary: "#165B33",
    accent: "#FFD700",
    background: "#0a120a",
    surface: "#132613",
    text: "#ffffff",
    textMuted: "#8cb88c",
    correct: "#22c55e",
    wrong: "#ef4444"
  },

  // Typography
  fonts: {
    display: "'Mountains of Christmas', cursive",
    displayUrl: "https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap",
    body: "'Nunito', sans-serif",
    bodyUrl: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
  },

  // Decorative elements
  decorations: {
    particles: {
      enabled: true,
      type: "snowflake",      // snowflake, confetti, sparkle, bubble, star
      emoji: "❄",
      count: 50
    },
    topBorder: {
      enabled: true,
      type: "lights",          // lights, banner, none
      colors: ["#ff6b6b", "#4ecdc4", "#ffe66d", "#95e1d3", "#f38181"]
    },
    backgroundEffect: "gradient"  // gradient, pattern, animated
  },

  // Button gradients for answer options (4 distinct colors)
  buttonGradients: [
    { from: "#c41e3a", to: "#a01830" },
    { from: "#165B33", to: "#0d3d22" },
    { from: "#0077be", to: "#005a8f" },
    { from: "#7c3aed", to: "#5b21b6" }
  ],

  // QR code styling
  qrCode: {
    dark: "#165B33",
    light: "#ffffff"
  },

  // UI text customization
  ui: {
    headingPrefix: "🎄",
    headingSuffix: "🎄",
    gameOverPrefix: "🎄",
    gameOverSuffix: "🎄",
    correctEmoji: "🎉",
    wrongEmoji: "😢",
    trophyEmoji: "🏆"
  }
};
```

---

## Phase 2: Theme Selection Title Screen

### 2.1 New Game Phase: "title"

Add a new phase before "menu" for theme selection:

```
title → menu → host/controller → lobby → playing → final
```

### 2.2 Title Screen Design

```
┌─────────────────────────────────────────┐
│                                         │
│         🎮 TRIVIA NIGHT 🎮              │
│                                         │
│         Select Your Theme               │
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │   🎄    │  │   📚    │  │   🕹️    │  │
│  │Christmas│  │20th Cen.│  │  80s    │  │
│  └─────────┘  └─────────┘  └─────────┘  │
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │   📼    │  │   💿    │  │   🐸    │  │
│  │   90s   │  │  2000s  │  │ Muppets │  │
│  └─────────┘  └─────────┘  └─────────┘  │
│                                         │
│  ┌─────────┐                            │
│  │   🏰    │                            │
│  │ Disney  │                            │
│  └─────────┘                            │
│                                         │
└─────────────────────────────────────────┘
```

### 2.3 Title Screen Features

- Animated theme cards with hover effects
- Theme preview (shows colors/style on hover)
- Theme description tooltip
- Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Smooth transition to selected theme styling

---

## Phase 3: Core Refactoring

### 3.1 Dynamic CSS Variable Application

Create function to apply theme colors at runtime:

```javascript
function applyTheme(themeConfig) {
  const root = document.documentElement;

  // Apply colors
  Object.entries(themeConfig.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
  });

  // Apply fonts
  loadThemeFonts(themeConfig.fonts);
  root.style.setProperty('--font-display', themeConfig.fonts.display);
  root.style.setProperty('--font-body', themeConfig.fonts.body);

  // Store current theme
  gameState.currentTheme = themeConfig;
}
```

### 3.2 Dynamic Decoration System

Refactor `createDecorations()` to read from theme config:

```javascript
function createDecorations() {
  const theme = gameState.currentTheme;

  // Clear existing decorations
  document.querySelectorAll('.snowflake, .light').forEach(el => el.remove());

  if (theme.decorations.particles.enabled) {
    createParticles(theme.decorations.particles);
  }

  if (theme.decorations.topBorder.enabled) {
    createTopBorder(theme.decorations.topBorder);
  }
}
```

### 3.3 Dynamic Question Loading

```javascript
async function loadThemeQuestions(themeId) {
  const script = document.createElement('script');
  script.src = `themes/${themeId}/questions.js`;

  return new Promise((resolve, reject) => {
    script.onload = () => resolve(window.QUESTIONS);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
```

### 3.4 UI Text Customization

Replace hardcoded emoji/text with theme config values throughout render functions.

---

## Phase 4: Theme Definitions

### 4.1 Christmas Theme (Existing - Migrate)

- **Colors**: Red (#c41e3a), Green (#165B33), Gold accent
- **Font**: Mountains of Christmas
- **Decorations**: Snowflakes + Christmas lights
- **Icon**: 🎄
- **Questions**: Move existing 250 questions

### 4.2 20th Century History Theme

- **Colors**: Sepia (#704214), Parchment (#f4e4bc), Navy (#1a365d)
- **Font**: Playfair Display (elegant serif)
- **Decorations**: Floating year numbers (1900-1999), vintage paper texture
- **Icon**: 📚
- **Categories**: World Wars, Cold War, Civil Rights, Space Race, Politics, Sports, Science & Tech

### 4.3 80s Theme

- **Colors**: Neon pink (#ff00ff), Electric blue (#00ffff), Black (#0a0a0a)
- **Font**: VT323 (pixel/retro) or Orbitron
- **Decorations**: Grid lines, scanlines effect, neon glow
- **Icon**: 🕹️
- **Categories**: Music, Movies, TV Shows, Video Games, Fashion, Technology, Pop Culture

### 4.4 90s Theme

- **Colors**: Teal (#008080), Purple (#800080), Lime (#32cd32), Orange (#ff6600)
- **Font**: Comic Sans (ironic) or Bungee
- **Decorations**: Memphis pattern shapes, floating geometric elements
- **Icon**: 📼
- **Categories**: Music, Movies, TV Shows, Internet/Tech, Fashion, Sports, Pop Culture

### 4.5 2000s Theme

- **Colors**: Silver (#c0c0c0), Chrome gradients, Y2K blue (#0066cc)
- **Font**: Exo 2 or Audiowide
- **Decorations**: Lens flares, metallic shimmer, floating tech icons
- **Icon**: 💿
- **Categories**: Music, Movies, TV Shows, Internet, Gaming, Celebrity, Technology

### 4.6 Muppets Theme

- **Colors**: Kermit green (#4cbb17), Fozzie orange (#ff8c00), Miss Piggy pink (#ff69b4)
- **Font**: Luckiest Guy or Chewy
- **Decorations**: Felt texture background, rainbow arc, star bursts
- **Icon**: 🐸
- **Categories**: The Muppet Show, Sesame Street, Muppet Movies, Characters, Behind the Scenes, Music

### 4.7 Disney Theme

- **Colors**: Royal blue (#1a237e), Gold (#ffd700), Magic purple (#9c27b0)
- **Font**: Cinzel (elegant) or Satisfy
- **Decorations**: Sparkles, floating stars, castle silhouette
- **Icon**: 🏰
- **Categories**: Animated Classics, Pixar, Live Action, Theme Parks, Disney+, Music, Characters

---

## Phase 5: Question Content Creation

### 5.1 Question Requirements Per Theme

Each theme needs **200+ questions** distributed across 5-7 categories:

| Theme | Target Questions | Categories |
|-------|-----------------|------------|
| Christmas | 250 (existing) | Movies, TV, Music, Traditions, Food |
| 20th Century History | 200+ | WWI, WWII, Cold War, Civil Rights, Space, Politics, Inventions |
| 80s | 200+ | Music, Movies, TV, Gaming, Fashion, Tech, Sports |
| 90s | 200+ | Music, Movies, TV, Internet, Fashion, Sports, Pop Culture |
| 2000s | 200+ | Music, Movies, TV, Internet, Gaming, Celebrity, Tech |
| Muppets | 200+ | Muppet Show, Sesame Street, Movies, Characters, Music, Creators |
| Disney | 200+ | Classics, Pixar, Live Action, Parks, Disney+, Music, Villains |

### 5.2 Question Format (Unchanged)

```javascript
{
  category: "Category Name",
  question: "What year did...?",
  answers: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0  // Index of correct answer
}
```

### 5.3 Question Quality Guidelines

- Mix of easy, medium, and hard questions
- Diverse categories within each theme
- Avoid ambiguous wording
- All answers should be plausible
- No duplicate questions within a theme

---

## Phase 6: Implementation Order

### Step 1: Create File Structure
- Create `themes/` directory
- Create subdirectories for each theme
- Move existing questions.js to themes/christmas/questions.js

### Step 2: Build Theme Configuration System
- Create theme-config.js with registry and utilities
- Create Christmas theme.js (migrate existing values)
- Implement `applyTheme()` function

### Step 3: Refactor index.html
- Add "title" phase to game flow
- Create `renderTitleScreen()` function
- Update `createDecorations()` for dynamic themes
- Update all render functions to use theme config for emoji/text
- Implement dynamic CSS variable application

### Step 4: Create Theme Selection UI
- Build responsive theme card grid
- Add hover effects and animations
- Implement theme preview on hover
- Add smooth transition to selected theme

### Step 5: Create New Theme Configurations
- 20th Century History theme.js
- 80s theme.js
- 90s theme.js
- 2000s theme.js
- Muppets theme.js
- Disney theme.js

### Step 6: Create Question Sets
- Write 200+ questions for each new theme
- Organize by category
- Review for accuracy and quality

### Step 7: Testing & Polish
- Test all themes on desktop and mobile
- Verify decorations work correctly per theme
- Test multiplayer with different themes
- Fix any styling inconsistencies

---

## Technical Considerations

### Font Loading
- Use `@font-face` with swap display
- Preload critical fonts in title screen
- Fallback to system fonts

### Performance
- Lazy load theme files only when selected
- Minimize decoration DOM elements
- Use CSS animations over JS where possible

### Mobile
- Touch-friendly theme selection cards
- Maintain existing responsive design
- Test QR code visibility with different theme colors

### Backwards Compatibility
- Default to Christmas theme if accessed directly
- Support URL parameter for theme: `?theme=80s`

---

## Estimated Scope

| Component | Complexity | Description |
|-----------|------------|-------------|
| File structure | Low | Create directories, move files |
| Theme config system | Medium | Build extensible theme registry |
| Title screen UI | Medium | Responsive grid with animations |
| Core refactoring | High | Extract hardcoded values, dynamic styling |
| 6 theme configs | Medium | Design colors, fonts, decorations per theme |
| 1200+ questions | High | Research and write quality trivia questions |
| Testing | Medium | Cross-browser, mobile, multiplayer testing |

---

## Deliverables

1. ✅ Modular theme file structure
2. ✅ Theme configuration system with registry
3. ✅ Title screen for theme selection
4. ✅ 7 fully styled themes (Christmas + 6 new)
5. ✅ 200+ questions per theme (1400+ total)
6. ✅ Dynamic decoration system
7. ✅ Mobile-responsive design maintained
8. ✅ Multiplayer functionality preserved
