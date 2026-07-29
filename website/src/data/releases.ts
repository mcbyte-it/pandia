export interface Release {
	version: string;
	date: string;
	tag?: string;
	tagKind?: 'beta' | 'stable';
	groups: { label: string; items: string[] }[];
}

export const releases: Release[] = [
	{
		version: '1.0.5',
		date: 'July 29, 2026',
		tag: 'Stable',
		tagKind: 'stable',
		groups: [
			{
				label: 'Fixes',
				items: [
					'JSON wrapped in quotes now opens as your data. In 1.0.4 a document copied out of code, a shell command or a spreadsheet cell — `\'{"orderId":917399}\'` — loaded as one long piece of text instead of an object. Single quotes, smart quotes and backticks are all understood, at either end or both.',
					'A stray quote at only one end, which is what a slightly-short selection leaves behind, no longer stops the file opening.',
					'Invisible characters before the first bracket no longer break a paste. 1.0.4 handled the byte order mark; zero-width spaces, word joiners, direction marks and nulls now go too — the ones that made a file fail with nothing visibly wrong, where deleting a single character you could not see fixed it.',
					'Pasting something Pandia could not read used to empty the box, so you had to go back and copy it again. Your text now stays put.',
				],
			},
			{
				label: 'Improvements',
				items: [
					'Error messages say what is actually wrong. `parse error: expected value at line 1 column 1` was the same sentence for a stray quote, a bare word and an empty document; you now get *One comma too many*, *The document is cut off*, *A property has no value* — with the offending character marked in a snippet of your own text.',
					'One-click fixes. Where the problem is repairable the message carries a button that applies it and reloads, instead of leaving you to hunt through a long line by hand.',
					'Opening a YAML, XML, CSV or cURL file now says so and offers to convert it. Pandia has always done this for pasted text; as a file it used to report a stray byte somewhere in the middle.',
					'Every way in explains itself — paste, the file picker, drag-and-drop, recent files and URL fetch. Previously only some of them did.',
				],
			},
		],
	},
	{
		version: '1.0.4',
		date: 'July 25, 2026',
		tag: 'Stable',
		tagKind: 'stable',
		groups: [
			{
				label: 'Fixes',
				items: [
					'NDJSON and JSON Lines files now open. A `.ndjson` or `.jsonl` file loads as an array of its records — one value per line, pretty-printed records, blank lines and CRLF all handled — instead of failing with "trailing characters at line 2".',
					'JSONC files now open. Line and block comments and trailing commas are accepted, so a `tsconfig.jsonc` or any commented config loads straight away.',
					'JSON5 files now open. Unquoted keys, single-quoted strings, hex numbers, leading and trailing decimal points, `+1`, `Infinity`, `NaN` and escaped line continuations are all understood.',
					'Files saved with a UTF-8 byte order mark now open. These are common on Windows and previously failed on the very first character.',
					'`.jsonl` and `.ndjson` were missing from the Open dialog, so those files could not even be selected. All six extensions now appear in Open, in the recent-files picker and in Compare.',
					'Undoing back to the last saved state no longer leaves the tab marked as unsaved.',
				],
			},
			{
				label: 'Improvements',
				items: [
					'NDJSON files round-trip. Saving a `.ndjson` or `.jsonl` file writes one record per line again rather than silently rewriting it as a JSON array, and untouched records are written back byte for byte. Save As picks the format from the extension you choose.',
					'Numbers keep every digit through all of this. 64-bit IDs and snowflakes in an NDJSON or JSON5 file stay exact, and multi-gigabyte NDJSON still opens on the streaming path.',
				],
			},
		],
	},
	{
		version: '1.0.3',
		date: 'July 23, 2026',
		tag: 'Stable',
		tagKind: 'stable',
		groups: [
			{
				label: 'Fixes',
				items: [
					'Keyboard shortcuts now work on Windows and Linux — save, find, new tab, switching views and the rest fire reliably even where the native menu accelerators did not.',
					'Shortcut hints read correctly on every platform: ⌘, ⇧, ⌥ and ⏎ now show as Ctrl, Shift, Alt and Enter on Windows and Linux across menus, tooltips, the command palette and inline editors.',
					'Graph view panning and zoom are smooth on Windows — mouse-wheel and precision-touchpad scrolling no longer crawls, lurches or overshoots, and Ctrl with +/− zooms even when a touchpad swallows the pinch gesture.',
				],
			},
			{
				label: 'Improvements',
				items: [
					'Settings now opens from its own entry in the menu bar.',
					'Graph export is now a split button — download in your last-used format with one click, or open the menu to pick another.',
				],
			},
		],
	},
	{
		version: '1.0.2',
		date: 'June 25, 2026',
		tag: 'Stable',
		tagKind: 'stable',
		groups: [
			{
				label: 'Fixes',
				items: [
					'Traffic light buttons now properly close the app on MacOS without requiring a force quit.',
				],
			},
		],
	},
	{
		version: '1.0.1',
		date: 'June 14, 2026',
		tag: 'Stable',
		tagKind: 'stable',
		groups: [
			{
				label: 'Fixes',
				items: [
					'Big integers stay exact everywhere — editing, duplicating, copying, pasting or filtering a large number (64-bit IDs, snowflakes) no longer rounds its last digits, including multi-row copy and extract in the grid.',
					'Grid: copy, extract and filter actions now report errors instead of silently doing nothing.',
					'Fixed a memory leak from opening and closing many tabs in one session.',
				],
			},
		],
	},
	{
		version: '1.0.0',
		date: 'June 7, 2026',
		tag: 'Stable',
		tagKind: 'stable',
		groups: [
			{
				label: 'Highlights',
				items: [
					'First stable release — Pandia is now 1.0.',
					'The full workbench: five views (Tree, Code, Grid, Graph, Compare), type generation for 9 languages, validate, compare, repair and export.',
					'Opens and scrolls multi-gigabyte files with no lag.',
					'Offline, private and free — your data never leaves your machine.',
				],
			},
		],
	},
	{
		version: '0.1.0',
		date: 'February 14, 2026',
		tag: 'Beta',
		tagKind: 'beta',
		groups: [
			{
				label: 'Highlights',
				items: [
					'First public beta — a native JSON workbench for macOS, Windows and Linux, built with Rust + Tauri.',
					'Open, navigate and edit JSON across multiple views.',
					'Generate types from any document.',
					'Import & export common formats — JSON, YAML, XML, CSV.',
					'Compare documents and auto-repair malformed JSON.',
					'Offline, private and free — your data never leaves your machine.',
				],
			},
		],
	},
];
