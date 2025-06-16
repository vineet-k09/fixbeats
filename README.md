# fixbeats
# VS Code Debug Jams 🎧

Turns error fixing into a lo-fi party.  
Every time you fix a red squiggly error, a lo-fi beat plays to reward your brain.  
Because bug fixing should slap.

## Features
- Detects error count drop via diagnostics
- Plays a custom lo-fi `.mp3` on error fix
- Configurable volume and toggle in settings

## 🔧 PART 1: Extension Skeleton (using yo code)
You’ll need to scaffold a VS Code extension:4

```shell
npm install -g yo generator-code
```
```shell
yo code
```
***New Extension (TypeScript)***

## Final steps
```bash
npm run compile
code --extensionDevelopmentPath=.
```