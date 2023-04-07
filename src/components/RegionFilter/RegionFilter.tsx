import { useState } from 'react';

import SelectBox from '@/components/UI/SelectBox/SelectBox';

import { IRegionFilter } from './IRegionFilter';

const RegionFilter: React.FC<IRegionFilter> = (props) => {
	const [region, setRegion] = useState<{ label: string; value: string } | null>(null);
	const { onFilter } = props;
	const regions = [
		{
			label: 'Africa',
			value: 'Africa',
		},
		{
			label: 'America',
			value: 'America',
		},
		{
			label: 'Asia',
			value: 'Asia',
		},
		{
			label: 'Europe',
			value: 'Europe',
		},
		{
			label: 'Oceania',
			value: 'Oceania',
		},
	];
	return (
		<SelectBox
			placeholder='Filter by Region'
			width='100%'
			options={regions}
			value={region}
			onChange={(value: { label: string; value: string }) => {
				setRegion(value);
				onFilter(value);
			}}
		/>
	);
};
export default RegionFilter;
