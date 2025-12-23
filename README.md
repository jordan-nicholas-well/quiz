# 🎄 Christmas Trivia Party Game

A real-time multiplayer trivia game where players use their phones as controllers. The host displays questions on a TV/computer screen while up to 10 players answer from their phones.

## 🎮 How to Play

### Option 1: Run Directly (GitHub Pages or any web server)

1. **Host the files**: Upload `index.html` AND `questions.js` to GitHub Pages, Netlify, or any static web hosting
2. **Start hosting**: Open the game on a TV or computer and click "Host Game"
3. **Players join**: Players scan the QR code or enter the room code on their phones
4. **Play!**: Once everyone has joined, click "Start Game"

### Option 2: Run Locally

1. Start a local web server in the game directory:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have npx)
   npx serve
   
   # PHP
   php -S localhost:8000
   ```
2. Open `http://localhost:8000` on your computer (host)
3. Players join using your local IP address (e.g., `http://192.168.1.100:8000`)

### Option 3: Claude Artifacts

**Note**: The game works best when hosted externally because Claude artifacts can't easily run on two separate devices simultaneously. However, you can test the host interface in an artifact.

## 🎯 Game Flow

1. **Lobby**: Host generates a room code and QR code. Players join via their phones.
2. **Questions**: 10 random questions from the pool. 20 seconds per question.
3. **Scoring**: 
   - Correct answer: 1000 base points
   - Speed bonus: Up to +500 points (faster = more)
4. **Results**: After each question, see who got it right
5. **Final**: Winner celebration and full leaderboard

## 📁 File Structure

```
trivia-game/
├── index.html          # Main game application
├── questions.js        # Question pool (250 Christmas questions) ⬅️ REQUIRED
├── README.md           # This file
├── themes/
│   └── christmas.js    # Example theme configuration
└── questions/
    └── christmas.js    # Question format documentation
```

**Important**: Both `index.html` and `questions.js` must be in the same folder for the game to work!

## 🎨 Theme Format

Themes control the visual appearance of the game. See `themes/christmas.js` for the full format:

```javascript
const THEME = {
  name: "Christmas",
  colors: {
    primary: "#c41e3a",      // Main accent (buttons, highlights)
    secondary: "#165B33",     // Secondary color
    accent: "#FFD700",        // Gold accents
    background: "#0a120a",    // Page background
    surface: "#132613",       // Card backgrounds
    text: "#ffffff",
    textMuted: "#8cb88c"
  },
  fonts: {
    display: "'Mountains of Christmas', cursive",
    body: "'Nunito', sans-serif"
  },
  decorations: {
    snowfall: true,
    snowflakeCount: 50,
    lights: true,
    lightCount: 20
  }
};
```

## ❓ Question Format

Questions are stored as an array of objects. See `questions/christmas.js` for the full format:

```javascript
const QUESTIONS = [
  {
    category: "Movies",           // Category shown during gameplay
    question: "What is the question text?",
    answers: [
      "Correct Answer",           // answers[0]
      "Wrong Answer 1",           // answers[1]
      "Wrong Answer 2",           // answers[2]
      "Wrong Answer 3"            // answers[3]
    ],
    correct: 0                    // Index of the correct answer (0-3)
  },
  // ... more questions
];
```

### Adding Your Own Questions

1. Open `index.html`
2. Find the `QUESTIONS` array (around line 100)
3. Add your questions following the format above
4. The game randomly selects 10 questions per round

## 🌐 Hosting on GitHub Pages

1. Create a new GitHub repository
2. Upload `index.html` to the repository
3. Go to Settings → Pages
4. Set source to "main" branch
5. Your game will be available at `https://[username].github.io/[repo-name]/`

## 🔧 Technical Details

- **Connection**: Uses PeerJS (WebRTC) for real-time peer-to-peer communication
- **No backend required**: Everything runs in the browser
- **QR Code**: Generated using the qrcode.js library
- **Players**: Supports up to 10 simultaneous players

## 📝 Customization Ideas

- **New themes**: Create a Halloween, New Year, or custom theme
- **More questions**: Add questions for different topics/holidays
- **Scoring tweaks**: Modify the scoring formula in the `showResults()` function
- **Timer duration**: Change `gameState.timeLeft = 20` to adjust question time
- **Question count**: Change `slice(0, 10)` in `selectQuestions()` for more/fewer questions

## 🐛 Troubleshooting

**Players can't connect:**
- Ensure everyone is on the same network (for local hosting)
- Try refreshing both host and player pages
- Check if firewall is blocking WebRTC connections

**QR Code doesn't work:**
- Manually enter the room code instead
- Ensure the URL is accessible from mobile devices

**Game freezes:**
- Refresh and start a new game
- The host controls the game state; if the host disconnects, the game ends

## 📜 License

Free to use and modify for personal and commercial purposes.

---

Made with ❄️ for holiday fun!
