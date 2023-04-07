import { useEffect, useState } from 'react';

import Header from '@/components/HOC/Header/Header';

const Layout = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		setTheme(localStorage.getItem('theme') || 'light');
	}, [theme]);

	const handleThemeChanged = (theme: 'light' | 'dark') => {
		localStorage.setItem('theme', theme);
		const HTML_ELEMENT = document.querySelector('html')!;
		theme === 'light'
			? HTML_ELEMENT.setAttribute('theme-mode', 'light')
			: HTML_ELEMENT.setAttribute('theme-mode', 'dark');

		setTheme(theme);
	};

	return (
		<Header
			theme={theme}
			onThemeChanged={handleThemeChanged}
		/>
	);
};

export default Layout;
