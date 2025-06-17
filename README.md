# 🎧 FixBeats — VS Code Debug Jams

Turns bug-fixing into a lo-fi celebration.

Every time you fix a red squiggly error, a smooth lo-fi beat plays to reward your brain.  
Because debugging deserves a vibe check.

---

## ✨ Features

- Detects when errors (red squiggles) are resolved
- Automatically plays a chill `.wav` lo-fi beat
- Manual trigger via `FixBeats: Play` command
- Cross-platform (Windows & Linux tested)

---

## 🚀 Installation

- **Marketplace:**  
  👉 [Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vineetKushwaha.fixbeats)

- **Manual:**
```bash
code --install-extension fixbeats-1.0.0.vsix
```

---

## 🛠️ Development

Scaffolded using `yo code`:
```bash
npm install -g yo generator-code
yo code
```

Run locally:
```bash
npm install
npm run compile
code --extensionDevelopmentPath=.
```

---

## 🗂️ File Structure (Packaged .vsix)
```bash
fixbeats-1.0.0.vsix
├── dist/extension.js
├── media/lofi.wav, icon.jpg
├── package.json
├── README.md
├── CHANGELOG.md
└── types/play-sound.d.ts
```

---

## ❤️ Contributing

Pull requests are welcome, especially for:

- Volume control support
- Custom sound file selector
- Performance tuning for large workspaces

---

## 📄 License

MIT — use it, remix it, vibe with it.