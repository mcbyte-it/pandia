import { isMac } from '$lib/util/platform';

const MENU_BY_COMBO: Record<string, string> = {
	KeyN: 'new_file',
	KeyO: 'open_file',
	KeyS: 'save_file',
	'Shift+KeyS': 'save_as',
	KeyE: 'export_doc',
	KeyT: 'new_tab',
	KeyW: 'close_tab',
	'Shift+BracketRight': 'next_tab',
	'Shift+BracketLeft': 'prev_tab',
	KeyZ: 'undo',
	'Shift+KeyZ': 'redo',
	KeyF: 'find',
	KeyG: 'find_next',
	'Shift+KeyG': 'find_prev',
	KeyH: 'find_replace',
	KeyK: 'command_palette',
	KeyB: 'toggle_sidebar',
	Digit1: 'toggle_tree_view',
	Digit2: 'toggle_code_view',
	Digit3: 'toggle_form_view',
	Digit4: 'toggle_graph_view',
	Comma: 'settings_appearance',
	'Shift+KeyV': 'validate_json',
	KeyD: 'compare_files',
	Slash: 'keyboard_shortcuts',
};

export function matchMenuShortcut(e: KeyboardEvent): string | null {
	if (isMac) return null;
	if (!e.ctrlKey || e.metaKey || e.altKey) return null;
	const combo = (e.shiftKey ? 'Shift+' : '') + e.code;
	return MENU_BY_COMBO[combo] ?? null;
}
