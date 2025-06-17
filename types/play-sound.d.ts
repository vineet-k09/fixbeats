// play-sound.d.ts
declare module 'play-sound' {
	interface Options {
		player?: string;
		players?: string;
	}

	interface Player {
		play(file: string, callback?: (err: Error | null) => void): any;
	}

	function play(options?: Options): Player;

	export default play;
}