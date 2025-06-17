# 📒 Changelog

All notable changes to **FixBeats** will be documented in this file.  
This project follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
and adheres to [Semantic Versioning](https://semver.org/).

---

## [1.0.0] – 2025-06-17

🎉 **First stable release!**

### 🚀 Added
- Real-time error tracking using VS Code diagnostics
- Lo-fi WAV playback when red-squiggly errors are fixed
- Manual command `FixBeats: Play` to trigger music
- Cooldown system (3s) to avoid spamming while typing
- Packaged WAV and icon assets inside `.vsix` bundle

### 🔧 Changed
- Diagnostics event now triggers correctly on error resolution
- Removed MP3 support to ensure native cross-platform playback
- Switched from `.vscodeignore`+`files` combo to embedded asset packing

---

## [0.0.1-beta] – 2025-06-15

🚧 **Initial beta release**

### 🧪 Added
- Extension scaffold and basic file structure
- Diagnostics watcher for red-squiggly errors
- Lo-fi playback using fallback methods
- Initial MP3 support using `play-sound`

---

## [Unreleased]

🧠 Ideas for upcoming updates:
- Allow user to choose sound themes
- Custom cooldown settings
- Auto-disable playback in test files (`*.spec.ts`, etc.)
- Visualizer integration? Maybe.