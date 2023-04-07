import { BaseAxiosService } from './BaseAxiosService';

export class HandleCountries extends BaseAxiosService {
	readCountries = (contoller?: AbortSignal) => {
		return this._get(`all?fields=name,flags,population,region,capital,cca3`, {
			signal: contoller,
		});
	};

	searchCountries = (query: string, controller?: AbortSignal) => {
		return this._get(`name/${query}?fields=name,flags,population,region,capital`, {
			signal: controller,
		});
	};

	searchByRegion = (region: string, controller?: AbortSignal) => {
		return this._get(`region/${region}?fields=name,flags,population,region,capital`, {
			signal: controller,
		});
	};

	readCountry = (code: string, controller?: AbortSignal) => {
		return this._get(
			`alpha/${code}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`,
			{
				signal: controller,
			}
		);
	};

	readCountryName = (code: string, controller?: AbortSignal) => {
		return this._get(`alpha/${code}?fields=name,cca3`, {
			signal: controller,
		});
	};
}
