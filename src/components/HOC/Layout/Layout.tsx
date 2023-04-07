import { useEffect, useState } from 'react';

import Header from '@/components/HOC/Header/Header';

import { ILayout } from './ILayout';
import classes from './Layout.module.scss';

const Layout: React.FC<ILayout> = (props) => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const THEME: 'light' | 'dark' =
			(localStorage.getItem('theme') as 'light' | 'dark') || 'light';
		setTheme(THEME);
		handleThemeChanged(THEME);
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
		<>
			<Header
				theme={theme}
				onThemeChanged={handleThemeChanged}
			/>
			<div className={classes['layout-container']}>{props.children}</div>
		</>
	);
};

export default Layout;
