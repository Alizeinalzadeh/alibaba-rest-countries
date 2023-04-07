import { useEffect, useState } from 'react';

import Button from '@/components/UI/Button/Button';
import Icon from '@/components/UI/Icon/Icon';

import classes from './Header.module.scss';
import { IHeader } from './IHeader';

const Header: React.FC<IHeader> = (props) => {
	const { theme, onThemeChanged } = props;
	const [toggleTitle, setToggleTitle] = useState('Dark Mode');
	const [selectedTheme, setSelectedTheme] = useState(theme);

	useEffect(() => {
		setSelectedTheme(theme);
		setToggleTitle(theme === 'light' ? 'Dark Mode' : 'Light Mode');
	}, [theme]);

	const handleThemeToggle = () => {
		onThemeChanged(selectedTheme === 'light' ? 'dark' : 'light');
	};

	return (
		<header className={classes.container}>
			<h1 className={classes.title}>Where in the world?</h1>
			<Button
				helperIcon={<Icon name='moon-outline' />}
				label={toggleTitle}
				variant='inline'
				onClick={handleThemeToggle}
			/>
		</header>
	);
};

export default Header;
