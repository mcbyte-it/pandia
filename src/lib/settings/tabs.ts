export type SettingsTab = 'appearance' | 'behavior' | 'layout' | 'data' | 'about';

export const SETTINGS_TABS = [
	{ id: 'appearance', label: 'Appearance' },
	{ id: 'behavior', label: 'Behavior' },
	{ id: 'layout', label: 'Layout' },
	{ id: 'data', label: 'Data' },
	{ id: 'about', label: 'About' },
] as const satisfies ReadonlyArray<{ id: SettingsTab; label: string }>;
