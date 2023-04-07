import Image from 'next/image';
import Link from 'next/link';

import { Preloader } from '@/utils/Preloader';

import classes from './CountriesCard.module.scss';
import { ICountriesCard } from './ICountriesCard';

const CountriesCard: React.FC<ICountriesCard> = (props) => {
	const { country } = props;
	return (
		<Link href={`/countries/${country.name.official}`}>
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
					<h2 className={classes['content-title']}>{country.name.official}</h2>
					<dl className={classes['content-details']}>
						<dt className={classes['content-details-title']}>Population:</dt>
						<dd className={classes['content-details-value']}>{country.population}</dd>
					</dl>
					<dl className={classes['content-details']}>
						<dt className={classes['content-details-title']}>Region:</dt>
						<dd className={classes['content-details-value']}>{country.region}</dd>
					</dl>
					<dl className={classes['content-details']}>
						<dt className={classes['content-details-title']}>Capital:</dt>
						<dd className={classes['content-details-value']}>{country.capital}</dd>
					</dl>
				</div>
			</div>
		</Link>
	);
};
export default CountriesCard;
