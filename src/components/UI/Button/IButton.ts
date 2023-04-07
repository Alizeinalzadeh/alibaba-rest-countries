import React from 'react';

export interface IButton {
	id?: string;
	className?: string;
	name?: string;
	disabled?: boolean;
	loading?: boolean;
	rounded?: boolean;
	fluid?: boolean;
	label?: string | React.ReactNode;
	leadingIcon?: React.ReactNode;
	helperIcon?: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	type?: 'button' | 'submit';
	color?: 'primary' | 'secondary';
	variant?: 'outline' | 'filled' | 'inline';
	helperIconPosition?: 'right' | 'left';
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
