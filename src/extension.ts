import * as vscode from 'vscode';
import play from 'play-sound';
import * as path from 'path';
import { exec } from 'child_process';

// Create audio instance with fallback players if needed
const audio = play({ players: 'powershell' });

let previousErrorCount = 0;
const COOLDOWN_TIME_MS = 3000; // 3 seconds
let lastPlayedTimestamp = 0;

function playLofiMusic(extensionPath: string) {
	const now = Date.now();

	// ⏱️ Check cooldown
	if (now - lastPlayedTimestamp < COOLDOWN_TIME_MS) {
		console.log("⏳ Cooldown active, skipping lo-fi playback.");
		return;
	}

	const filePath = path.join(extensionPath, 'media', 'lofi.wav');

	if (process.platform === 'win32') {
		const command = `powershell -c (New-Object Media.SoundPlayer '${filePath}').PlaySync();`;
		exec(command, (err) => {
			if (err) {
				console.error('PowerShell error:', err);
			}
		});
	} else {
		audio.play(filePath, (err) => {
			if (err) {
				console.error('Audio error:', err);
			}
		});
	}

	lastPlayedTimestamp = now;
	console.log("🎶 Lo-fi playback triggered.");
}

function getErrorCount(): number {
	let count = 0;
	vscode.languages.getDiagnostics().forEach(([_, diagnostics]) => {
		count += diagnostics.filter(d => d.severity === vscode.DiagnosticSeverity.Error).length;
	});
	return count;
}

export function activate(context: vscode.ExtensionContext) {
	const extensionPath = context.extensionPath;
	console.log("🎉 FixBeats activated!");

	// Show message only once after install
	const firstRun = context.globalState.get('fixbeatsFirstRun') !== true;
	if (firstRun) {
		vscode.window.showInformationMessage("✅ FixBeats activated. Enjoy error-free coding with lo-fi beats!");
		context.globalState.update('fixbeatsFirstRun', true);
	}

	const diagListener = vscode.languages.onDidChangeDiagnostics(() => {
		let currentErrorCount = getErrorCount();
		if (currentErrorCount < previousErrorCount) {
			console.log("✅ Errors decreased, attempting to play lo-fi...");
			playLofiMusic(extensionPath);
		}
		previousErrorCount = currentErrorCount;
	});

	const playCommand = vscode.commands.registerCommand('fixbeats.play', () => {
		playLofiMusic(extensionPath);
		vscode.window.showInformationMessage("🎶 Playing Lo-fi Music!");
	});

	// Push disposables
	context.subscriptions.push(diagListener, playCommand);
}

export function deactivate() {
	console.log("🛑 FixBeats deactivated.");
}
