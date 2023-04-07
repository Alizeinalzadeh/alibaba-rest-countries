// @ts-nocheck
import { useState } from 'react';
import Select, {
	ControlProps,
	DropdownIndicatorProps,
	IndicatorSeparatorProps,
	InputProps,
	MenuListProps,
	MenuProps,
	OptionProps,
} from 'react-select';

import classes from '@/components/UI/Input/Input.module.scss';

const SelectBox = (props) => {
	const { width, id, helperIcon, label, parentClassName } = props;
	const [focused, setFocused] = useState(false);
	const customStyles: any = {
		control: (provided: ControlProps, state: ControlProps) => ({
			...provided,
			border: 'none',
			boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
			height: '52px',
			cursor: 'pointer',
			fontSize: '14px',
			borderRadius: `${state.menuIsOpen ? '8px 8px 0 0' : '8px'}`,
			backgroundColor: 'transparent',
			transition: 'all 0.3s ease',
			width: `${width ? `${width}` : ['auto']}`,
			'&:hover': { boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' },
		}),

		menu: (provided: MenuProps) => ({
			...provided,
			backgroundColor: 'inherit',
			border: 'none',
			width: `${width ? `${width}` : ['auto']}`,
			borderTop: 'none',
			marginTop: '0',
			borderRadius: '0 0 8px 8px',
			boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
			zIndex: 5000,
		}),
		input: (provide: InputProps) => ({
			...provide,
			margin: 'auto',
			width: '100%',
			color: 'red',
		}),
		menuList: (base: MenuListProps) => ({
			...base,
			maxHeight: '300px',
			padding: '10px',
			boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
			borderRadius: '8px',
			width: 'inherit',
		}),
		option: (provided: OptionProps, state: OptionProps) => ({
			...provided,
			fontWeight: `${state.isSelected ? 'bold' : 'normal'}`,
			backgroundColor: 'transparent',
			borderRadius: '8px',
			cursor: 'pointer',
			transition: 'all 0.2s',
			':hover': {
				backgroundColor: 'transparent',
				color: 'white',
			},
		}),

		indicatorSeparator: (provided: IndicatorSeparatorProps) => ({
			...provided,
			display: 'none',
		}),

		indicatorsContainer: (provided: IndicatorSeparatorProps) => ({
			...provided,
			display: 'flex',
		}),
		placeholder: (provided: any) => ({
			...provided,
			color: 'hsl(0, 0%, 52%)',
			fontSize: '14px',
		}),
		dropdownIndicator: (provided: DropdownIndicatorProps) => ({
			...provided,
		}),
		singleValue: (provided: any) => ({
			...provided,
			color: 'hsl(0, 0%, 52%)',
		}),
	};
	return (
		<div className={`${parentClassName}`}>
			{label && (
				<label
					className={`mb-2 flex ${
						helperIcon ? `${classes['label-helper']}` : `${classes.label}`
					} ${focused ? classes['label-active'] : ''} `}
					htmlFor={id}>
					{helperIcon && <div className={HELPER}>{helperIcon}</div>}
					{label}
				</label>
			)}
			<Select
				isSearchable={false}
				{...props}
				styles={customStyles}
				noOptionsMessage={() => 'Nothing!!!'}
				onMenuOpen={() => {
					setFocused(true);
				}}
				onMenuClose={() => {
					setFocused(false);
				}}
				className='bg-light-background rounded-md dark:bg-dark-primary text-light-input'
			/>
		</div>
	);
};

export default SelectBox;
