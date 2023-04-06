// @ts-nocheck
import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

import { IIcon } from '@/components/UI/Icon/IIcon';

const StyledSVGIcon = styled(ReactSVG)`
	svg {
		${({ size }) =>
			size &&
			css`
				width: ${size};
				height: ${size};
			`}
	}
`;
const Icon: React.FC<IIcon> = (props) => {
	const { size, name } = props;
	return (
		<StyledSVGIcon
			src={`/icons/${name}.svg?type=svg`}
			size={size}
		/>
	);
};

Icon.defaultProps = {
	size: '24px',
};

export default Icon;
