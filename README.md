# 🎧 FixBeats — VS Code Debug Jams

Turns bug-fixing into a lo-fi celebration.

Every time you fix a red squiggly error, a smooth lo-fi beat plays to reward your brain.  
Because debugging deserves a vibe check.

---

## ✨ Features

- Detects when errors (red squiggles) are resolved in your code
- Automatically plays a chill `.wav` lo-fi beat
- One-line command to trigger it manually: `FixBeats: Play`
- Cross-platform (Windows & Linux tested)

---

## 🚀 Installation

- **From Marketplace (soon):** Just search for `FixBeats`
- **Manually:**
```bash
  vsce package
  code --install-extension fixbeats-1.0.0.vsix
```

---

## 🛠️ Development
**Scaffolded using yo code:**
```bash
npm install -g yo generator-code
yo code
```

**Run it locally:**
```bash
npm install
npm run compile
code --extensionDevelopmentPath=.
```

---

## 🗂️ File Structure (Built .vsix)
```bash
fixbeats-1.0.0.vsix
├── dist/extension.js
├── media/lofi.wav,icon.jpg
├── package.json
├── README.md
├── CHANGELOG.md
└── types/play-sound.d.ts
```

---

## ❤️ Contributing
Pull requests are welcome, especially if you can:

- Add volume config support

- Add file selector for custom sounds

- Improve performance on large projects

---

## 📄 License
MIT — use it, remix it, vibe with it.