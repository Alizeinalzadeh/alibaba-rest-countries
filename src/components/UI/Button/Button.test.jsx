import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('Button', () => {
	it('executes the onClick function when clicked', () => {
		const mockOnClick = jest.fn();
		const { getByRole } = render(<Button onClick={mockOnClick} />);
		const button = getByRole('button');
		fireEvent.click(button);
		expect(mockOnClick).toHaveBeenCalled();
	});
});
