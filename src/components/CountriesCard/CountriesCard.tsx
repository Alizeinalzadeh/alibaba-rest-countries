import Image from 'next/image';
import Link from 'next/link';

import { Preloader } from '@/utils/Preloader';

import classes from './CountriesCard.module.scss';
import { ICountriesCard } from './ICountriesCard';

const CountriesCard: React.FC<ICountriesCard> = (props) => {
	const { country } = props;
	const mainDetails = [
		{
			title: 'Population:',
			value: country.population.toLocaleString(),
		},
		{
			title: 'Region:',
			value: country.region,
		},

		{
			title: 'Capital:',
			value: country.capital,
		},
	];
	return (
		<Link href={`/countries/${country.cca3}`}>
			<div className={classes.container}>
				<Image
					src={country.flags.png}
					alt={country.flags.alt}
					className={classes.flag}
					width={320}
					height={224}
					placeholder='blur'
					blurDataURL={Preloader}
				/>

				<div className={classes.content}>
					<h2 className={classes['content-title']}>{country.name.common}</h2>
					{mainDetails.map((item, index) => {
						return (
							<dl
								key={index}
								className={classes['content-details']}>
								<dt className={classes['content-details-title']}>{item.title}</dt>
								<dd className={classes['content-details-value']}>
									{`${item.value}`}
								</dd>
							</dl>
						);
					})}
				</div>
			</div>
		</Link>
	);
};
export default CountriesCard;
