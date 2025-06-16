import * as vscode from 'vscode';
import player from 'play-sound';

const audio = player();

function playLofiMusic() {
	audio.play('media/lofi.mp3', (err) => {
		if(err){
			console.error('Error playing audio:', err);
		}
	});
}

function getErrorCount(): number {
	let count = 0;
	vscode.languages.getDiagnostics().forEach(([_, diagnostics]) => {
		count += diagnostics.filter(d => d.severity === vscode.DiagnosticSeverity.Error).length;
	});
	return count;
}

let previousErrorCount = 0;

export function activate(context: vscode.ExtensionContext) {

	console.log("🎉 FixBeats activated!");
	vscode.window.showInformationMessage("✅ FixBeats activated");

	vscode.languages.onDidChangeDiagnostics(() => {
		let currentErrorCount = getErrorCount();

		if (currentErrorCount < previousErrorCount) {
			playLofiMusic();
		}

		previousErrorCount = currentErrorCount;
	});

	vscode.commands.registerCommand('fixbeats.helloWorld', () => {
		vscode.window.showInformationMessage('Yo Vineet, FixBeats is alive 🎧');
	});
}

export function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
