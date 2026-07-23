export const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.platform);

export function cmdOrCtrl(e: KeyboardEvent | MouseEvent): boolean {
	return isMac ? e.metaKey : e.ctrlKey;
}

const GLYPH_TO_WORD: Record<string, string> = {
	'⌘': 'Ctrl',
	'⌃': 'Ctrl',
	'⇧': 'Shift',
	'⌥': 'Alt',
	'⏎': 'Enter',
};

export function fmtKbd(binding: string): string {
	if (isMac) return binding;
	const parts: string[] = [];
	for (const ch of binding) parts.push(GLYPH_TO_WORD[ch] ?? ch);
	return parts.join('+');
}
