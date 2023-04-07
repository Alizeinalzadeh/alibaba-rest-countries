import React from 'react';

import { IInput } from './IInput';
import classes from './Input.module.scss';

const Input: React.FC<IInput> = (props) => {
	const {
		fluid,
		rounded,
		size,
		label,
		helperIcon,
		id,
		name,
		onChange,
		placeholder,
		defaultValue,
		onBlur,
		value,
		disabled,
		readOnly,
		required,
		className,
		autoFocus,
		type,
	} = props;

	const PARENT = `${classes.parent} ${fluid ? classes.fluid : ''}`;
	const CLASS = `${classes.input} ${rounded ? classes.rounded : ''} ${
		fluid ? classes.fluid : ''
	} ${size ? classes[size] : ''}`;

	const HELPER = `${classes.helper}`;
	return (
		<div className={`${PARENT}`}>
			{label && (
				<label
					className={`${classes.label}`}
					htmlFor={id}>
					{label}{' '}
				</label>
			)}
			{helperIcon && <div className={HELPER}>{helperIcon}</div>}
			<input
				type={type}
				id={id}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				placeholder={placeholder}
				value={value}
				defaultValue={defaultValue}
				className={`${CLASS} ${className}`}
				disabled={disabled}
				readOnly={readOnly}
				required={required}
				autoFocus={autoFocus}
			/>
		</div>
	);
};

Input.defaultProps = {
	type: 'text',
	size: 'medium',
	rounded: false,
	disabled: false,
	readOnly: false,
	required: false,
	hasError: false,
	fluid: false,
	ltr: false,
};

export default Input;
