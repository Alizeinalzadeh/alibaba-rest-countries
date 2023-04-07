import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from '@/components/UI/Button/Button';
import Icon from '@/components/UI/Icon/Icon';

import classes from './Header.module.scss';
import { IHeader } from './IHeader';
import Container from '../Container/Container';

const Header: React.FC<IHeader> = (props) => {
	const { theme, onThemeChanged } = props;
	const [toggleTitle, setToggleTitle] = useState('Dark Mode');
	const [selectedTheme, setSelectedTheme] = useState(theme);
	const router = useRouter();
	useEffect(() => {
		setSelectedTheme(theme);
		setToggleTitle(theme === 'light' ? 'Dark Mode' : 'Light Mode');
	}, [theme]);

	const handleThemeToggle = () => {
		onThemeChanged(selectedTheme === 'light' ? 'dark' : 'light');
	};

	return (
		<header className={classes.header}>
			<Container className={classes.container}>
				<h1
					className={classes.title}
					onClick={() => router.push('/')}>
					Where in the world?
				</h1>
				<Button
					helperIcon={<Icon name='moon-outline' />}
					label={toggleTitle}
					variant='inline'
					onClick={handleThemeToggle}
				/>
			</Container>
		</header>
	);
};

export default Header;
