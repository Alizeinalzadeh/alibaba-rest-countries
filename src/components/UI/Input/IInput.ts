import React from 'react';

export interface IInput {
	label?: string;
	type?: 'text' | 'email' | 'password' | 'number' | 'url';
	name?: string;
	className?: string;
	placeholder?: string;
	value?: string;
	defaultValue?: string;
	ltr?: boolean;
	helperIcon?: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	rounded?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	hasError?: boolean;
	errorMessage?: string;
	fluid?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	parentClassName?: string;
	autoFocus?: boolean;
	optional?: boolean;
}
