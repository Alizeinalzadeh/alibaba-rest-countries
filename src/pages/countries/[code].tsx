import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { HandleCountries } from '@/adapter/HandleCountries';
import Container from '@/components/HOC/Container/Container';
import Layout from '@/components/HOC/Layout/Layout';
import Button from '@/components/UI/Button/Button';
import Icon from '@/components/UI/Icon/Icon';
import { ICountries } from '@/interface/ICountries';
import { IDetailsPage } from '@/interface/pages/IDetailsPage';
import { Preloader } from '@/utils/Preloader';

const Country: NextPage<IDetailsPage> = (props) => {
	const countriesInstance = new HandleCountries();
	const country = props.country;
	const [borderCountries, setBorderCountries] = useState<ICountries[]>([]);
	const router = useRouter();

	const mainDetails = [
		{
			title: 'Native Name:',
			value: Object.keys(country.name.nativeName).map(
				(item) => country.name.nativeName[item].official
			),
		},
		{
			title: 'Population:',
			value: country.population.toLocaleString(),
		},
		{
			title: 'Region:',
			value: country.region,
		},
		{
			title: 'Sub Region:',
			value: country.subregion,
		},
		{
			title: 'Capital:',
			value: country.capital,
		},
	];

	const languageDetails = [
		{
			title: 'Top Level Domain:',
			value: country.tld,
		},
		{
			title: 'Currencies:',
			value: Object.keys(country.currencies).map((item) => country.currencies[item].name),
		},
		{
			title: 'Languages:',
			value: Object.keys(country.languages).map((item) => country.languages[item]),
		},
	];

	useEffect(() => {
		const CONTROLLER = new AbortController();
		setBorderCountries([]);
		if (country.borders.length > 0) {
			const countries: ICountries[] = [];
			country.borders.forEach((item) => {
				countriesInstance.readCountryName(item, CONTROLLER.signal).then((res) => {
					countries.push(res.data);
					setBorderCountries(countries);
				});
			});
		}

		return () => {
			CONTROLLER.abort();
		};
	}, [router.query]);

	return (
		<Layout>
			<Container>
				<Button
					label={'back'}
					helperIcon={<Icon name='arrow-back-outline' />}
					onClick={() => {
						router.back();
					}}
				/>
				<div className='flex flex-col md:flex-row md:gap-8 md:justify-between md:items-start md:mt-24'>
					<div className='relative md:w-1/2'>
						<Image
							src={country.flags.png}
							alt={country.flags.alt}
							className='my-16 md:my-0'
							width={420}
							height={324}
							placeholder='blur'
							blurDataURL={Preloader}
						/>
					</div>
					<div className='md:w-1/2'>
						<h1 className='font-extrabold mb-4 text-xl text-light-text dark:text-dark-text'>
							{country.name.official}
						</h1>
						<div className='flex flex-col gap-8 md:flex-row'>
							<div className='flex flex-col gap-2 justify-start w-full'>
								{mainDetails.map((item, index) => {
									return (
										<dl
											key={index}
											className='flex gap-2 items-start justify-start'>
											<dt className='font-semibold text-base text-light-text dark:text-dark-text whitespace-nowrap'>
												{item.title}
											</dt>
											<dd className='text-base text-light-text dark:text-dark-text  whitespace-nowrap'>
												{`${item.value}`}
											</dd>
										</dl>
									);
								})}
							</div>
							<div className='flex flex-col gap-2 mb-8'>
								{languageDetails.map((item, index) => {
									return (
										<dl
											key={index}
											className='flex gap-2 items-start justify-start'>
											<dt className='font-semibold text-base text-light-text dark:text-dark-text whitespace-nowrap'>
												{item.title}
											</dt>
											<dd className='text-base text-light-text dark:text-dark-text  whitespace-nowrap'>
												{`${item.value}`}
											</dd>
										</dl>
									);
								})}
							</div>
						</div>
						{country.borders.length > 0 && (
							<div className='md:my-8 mb-8'>
								<p className='font-semibold text-lg text-light-text dark:text-dark-text mb-2'>
									Border Countries:
								</p>
								<div className='flex justify-start items-center gap-4 flex-wrap mb-8'>
									{borderCountries.map((country) => {
										return (
											<Link
												href={`/countries/${country.cca3}`}
												key={country.cca3}>
												<Button label={country.name.official} />
											</Link>
										);
									})}
								</div>
							</div>
						)}
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const countriesInstance = new HandleCountries();
	const countryCode = context.query.code;
	const country = await countriesInstance.readCountry(`${countryCode}`);

	return {
		props: {
			country: country.data,
		},
	};
};

export default Country;
