import { fireEvent, render } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
	it('should call onSearch with the entered value', () => {
		const onSearchMock = jest.fn();
		const { getByPlaceholderText } = render(<Search onSearch={onSearchMock} />);
		const searchInput = getByPlaceholderText('Search for a country...');
		fireEvent.change(searchInput, { target: { value: 'United States' } });
		expect(onSearchMock).toHaveBeenCalledWith('United States');
	});
});
