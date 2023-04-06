import { BaseAxiosService } from './BaseAxiosService';

export class BaseStaticDataRequest extends BaseAxiosService {
	getStaticData = (path: string, contoller?: AbortSignal) => {
		return this._get(path, { signal: contoller });
	};
}
