import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

import { HandleCountries } from '@/adapter/HandleCountries';
import CountriesCard from '@/components/CountriesCard/CountriesCard';
import Container from '@/components/HOC/Container/Container';
import Layout from '@/components/HOC/Layout/Layout';
import RegionFilter from '@/components/RegionFilter/RegionFilter';
import Search from '@/components/Search/Search';
import { IHomePage } from '@/interface/pages/IHomePage';

const Home: NextPage<IHomePage> = (props) => {
	const countriesInstance = new HandleCountries();
	const [searchTerm, setSearchTerm] = useState('');
	const [countries, setCountries] = useState(props.countries);
	const [cachedAllCountries] = useState(props.countries);
	const [region, setRegion] = useState<{ label: string; value: string } | null>(null);

	const handleOnSearch = (e: string) => {
		setSearchTerm(e);
	};
	const handleFilter = (e: { label: string; value: string }) => {
		setRegion(e);
	};

	useEffect(() => {
		const CONTROLLER = new AbortController();
		if (region) {
			countriesInstance
				.searchByRegion(region?.value, CONTROLLER.signal)
				.then((res) => {
					setCountries(res.data);
				})
				.catch((error) => {
					if (error?.response?.status === 404) {
						setCountries([]);
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
			countriesInstance
				.searchCountries(searchTerm.trim(), CONTROLLER.signal)
				.then((res) => {
					setCountries(res.data);
				})
				.catch((error) => {
					if (error?.response?.status === 404) {
						setCountries([]);
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
			<div className='grid grid-cols-1 p-12 gap-8 md:grid-cols-4'>
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
