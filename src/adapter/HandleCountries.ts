import { BaseAxiosService } from './BaseAxiosService';

export class HandleCountries extends BaseAxiosService {
	readCountries = (contoller?: AbortSignal) => {
		return this._get(`all?fields=name,flags,population,region,capital`, { signal: contoller });
	};

	searchCountries = (query: string, controller?: AbortSignal) => {
		return this._get(`name/${query}?fields=name,flags,population,region,capital`, {
			signal: controller,
		});
	};
}
