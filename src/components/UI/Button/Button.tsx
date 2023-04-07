import classes from './Button.module.scss';
import { IButton } from './IButton';

const Button: React.FC<IButton> = (props) => {
	const {
		variant,
		color,
		rounded,
		fluid,
		disabled,
		leadingIcon,
		className,
		name,
		onClick,
		type,
		id,
		loading,
		helperIconPosition,
		label,
		helperIcon,
		size,
	} = props;

	const CLASS = `${classes.button} ${classes[`${variant}-${color}`]} ${classes[size!]} ${
		rounded ? classes.rounded : ''
	}
        ${fluid ? classes.fluid : ''}
        ${disabled ? `${classes[`disabled-${color}`]}` : ''}
		${leadingIcon ? `${classes.leading}` : ''}
        ${className || ''} `;

	const LABEL_TYPE = leadingIcon ? 'icon' : 'label';

	return (
		<button
			aria-label={name}
			name={name}
			id={id}
			type={type}
			onClick={onClick}
			disabled={loading ? true : disabled ? true : false}
			className={CLASS}>
			<>
				{helperIconPosition == 'left' && LABEL_TYPE == 'label' && helperIcon && helperIcon}
				{LABEL_TYPE == 'icon' ? leadingIcon : label}
				{helperIconPosition == 'right' && LABEL_TYPE == 'label' && helperIcon && helperIcon}
			</>
		</button>
	);
};
Button.defaultProps = {
	type: 'button',
	size: 'medium',
	variant: 'filled',
	helperIconPosition: 'left',
	color: 'primary',
	rounded: false,
	disabled: false,
	fluid: false,
};
export default Button;
