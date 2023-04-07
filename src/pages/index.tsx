import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

import { HandleCountries } from '@/adapter/HandleCountries';
import CountriesCard from '@/components/CountriesCard/CountriesCard';
import Container from '@/components/HOC/Container/Container';
import Layout from '@/components/HOC/Layout/Layout';
import RegionFilter from '@/components/RegionFilter/RegionFilter';
import Search from '@/components/Search/Search';
import Button from '@/components/UI/Button/Button';
import { IHomePage } from '@/interface/pages/IHomePage';

const Home: NextPage<IHomePage> = (props) => {
	const countriesInstance = new HandleCountries();
	const [searchTerm, setSearchTerm] = useState('');
	const [countries, setCountries] = useState(props.countries);
	const [cachedAllCountries] = useState(props.countries);
	const [region, setRegion] = useState<{ label: string; value: string } | null>(null);
	const [sort, setSort] = useState<'default' | 'population' | 'name'>('default');
	const [loading, setLoading] = useState(false);

	const handleOnSearch = (e: string) => {
		setSearchTerm(e);
	};
	const handleFilter = (e: { label: string; value: string }) => {
		setRegion(e);
	};
	const handleSortByPopulation = () => {
		const tempCountries = [...countries];
		const sortedCountries = tempCountries.sort((a, b) => b.population - a.population);
		return sortedCountries;
	};
	const handleSortByName = () => {
		const tempCountries = [...countries];
		const sortedCountries = tempCountries.sort((a, b) =>
			a.name.common.localeCompare(b.name.common)
		);
		return sortedCountries;
	};

	useEffect(() => {
		const CONTROLLER = new AbortController();
		if (region) {
			setLoading(true);
			countriesInstance
				.searchByRegion(region?.value, CONTROLLER.signal)
				.then((res) => {
					setCountries(res.data);
					setLoading(false);
					setSort('default');
				})
				.catch((error) => {
					if (error?.response?.status === 404) {
						setCountries([]);
						setLoading(false);
						setSort('default');
					}
				});
		}
		return () => {
			CONTROLLER.abort();
		};
	}, [region]);

	useEffect(() => {
		const CONTROLLER = new AbortController();
		if (searchTerm.length >= 2) {
			setLoading(true);
			countriesInstance
				.searchCountries(searchTerm.trim(), CONTROLLER.signal)
				.then((res) => {
					setCountries(res.data);
					setLoading(false);
					setSort('default');
				})
				.catch((error) => {
					if (error?.response?.status === 404) {
						setCountries([]);
						setLoading(false);
						setSort('default');
					}
				});
		}
		if (searchTerm.length == 0) {
			setCountries(cachedAllCountries);
		}
		return () => {
			CONTROLLER.abort();
		};
	}, [searchTerm]);

	useEffect(() => {
		if (loading) {
			if (sort === 'default') {
				setCountries(cachedAllCountries);
				setLoading(false);
			}
			if (sort === 'name') {
				setCountries(handleSortByName());
				setLoading(false);
			}
			if (sort === 'population') {
				setCountries(handleSortByPopulation());
				setLoading(false);
			}
		}
		setLoading(false);
	}, [sort]);

	return (
		<Layout>
			<Container className='flex flex-col gap-4 md:flex-row md:justify-between'>
				<div className='w-full md:w-1/4'>
					<Search onSearch={handleOnSearch} />
				</div>
				<div className='w-full md:w-1/5'>
					<RegionFilter onFilter={handleFilter} />
				</div>
			</Container>
			<Container>
				<div className='flex justify-between items-center'>
					<p className='text-light-text dark:text-dark-text'>Sort By:</p>
					<div className='flex justify-start gap-3 items-center'>
						<Button
							label='default'
							onClick={() => {
								setLoading(true);
								sort != 'default' && setSort('default');
							}}
							variant={`${sort === 'default' ? 'filled' : 'inline'}`}
						/>
						<Button
							label='population'
							onClick={() => {
								setLoading(true);
								sort != 'population' && setSort('population');
							}}
							variant={`${sort === 'population' ? 'filled' : 'inline'}`}
						/>
						<Button
							label='name'
							onClick={() => {
								setLoading(true);
								sort != 'name' && setSort('name');
							}}
							variant={`${sort === 'name' ? 'filled' : 'inline'}`}
						/>
					</div>
				</div>
			</Container>
			<div className='grid grid-cols-1 p-12 gap-8 md:grid-cols-4'>
				{loading ? (
					<p>Loading</p>
				) : (
					<>
						{countries.length > 0 ? (
							<>
								{countries.map((country) => {
									return (
										<CountriesCard
											country={country}
											key={country.name.common}
										/>
									);
								})}
							</>
						) : (
							<p className='text-center font-bold dark:text-dark-text text-light-text'>
								No Countries Found
							</p>
						)}
					</>
				)}
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const countriesInstance = new HandleCountries();

	const countries = await countriesInstance.readCountries();

	return {
		props: {
			countries: countries.data,
		},
	};
};

export default Home;
