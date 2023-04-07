export interface IHeader {
	theme: string;
	onThemeChanged: (theme: 'light' | 'dark') => void;
}
