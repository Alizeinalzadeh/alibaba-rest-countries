import { useState } from 'react';

import Icon from '@/components/UI/Icon/Icon';
import Input from '@/components/UI/Input/Input';

import { ISearch } from './ISearch';

const Search: React.FC<ISearch> = (props) => {
	const { onSearch } = props;
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		onSearch(e.target.value);
	};
	return (
		<Input
			placeholder='Search for a country...'
			fluid
			size='large'
			name='search'
			id='homepage-search'
			helperIcon={<Icon name='search-outline' />}
			onChange={handleSearch}
			value={searchTerm}
		/>
	);
};

export default Search;
