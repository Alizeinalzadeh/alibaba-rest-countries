import ContainerStyle from './Container.module.scss';
import { IContainer } from './IContainer';
const Container: React.FC<IContainer> = (props) => {
	return (
		<div className={`${ContainerStyle.container} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Container;
