import { render } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';
import CountriesCard from './CountriesCard';

describe('CountriesCard', () => {
	const country = {
		name: { common: 'United States' },
		cca3: 'USA',
		region: 'Americas',
		capital: 'Washington, D.C.',
		population: 331449281,
		flags: { png: 'https://restcountries.com/data/usa.png', alt: 'Flag of the United States' },
	};

	it('renders country name', () => {
		const { getByText } = render(<CountriesCard country={country} />);
		expect(getByText('United States')).toBeInTheDocument();
	});

	it('renders population', () => {
		const { getByText } = render(<CountriesCard country={country} />);
		expect(getByText('331,449,281')).toBeInTheDocument();
	});

	it('renders region', () => {
		const { getByText } = render(<CountriesCard country={country} />);
		expect(getByText('Americas')).toBeInTheDocument();
	});

	it('renders capital', () => {
		const { getByText } = render(<CountriesCard country={country} />);
		expect(getByText('Washington, D.C.')).toBeInTheDocument();
	});
});
