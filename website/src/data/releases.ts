export interface Release {
	version: string;
	date: string;
	tag?: string;
	tagKind?: 'beta' | 'stable';
	groups: { label: string; items: string[] }[];
}

export const releases: Release[] = [
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
