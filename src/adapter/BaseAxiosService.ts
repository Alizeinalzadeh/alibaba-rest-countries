import axios, { AxiosInstance } from 'axios';

import { CONFIG } from '@/config/config';

export abstract class BaseAxiosService {
	protected _http: AxiosInstance = axios.create();
	protected defaultOptions = {};

	constructor() {
		this._initHttp();
	}

	protected _initHttp() {
		this.defaultOptions = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		};
		const baseURL: string = CONFIG.ENV.API_BASE_URL!;
		const baseEndpoint: string = CONFIG.ENV.API_ENDPOINT!;
		this._http = axios.create({
			baseURL: `${baseURL}/${baseEndpoint}`,
		});
	}

	protected _get(path: string, options = {}) {
		return this._http.get(path, { ...this.defaultOptions, ...options });
	}

	protected _post(url: string, data: any, options = {}) {
		return this._http.post(url, data, {
			...this.defaultOptions,
			...options,
		});
	}

	protected _delete(url: string, options = {}) {
		return this._http.delete(url, { ...this.defaultOptions, ...options });
	}

	protected _put(url: string, data: any, options = {}) {
		return this._http.put(url, data, {
			...this.defaultOptions,
			...options,
		});
	}

	protected _patch(url: string, data: any, options = {}) {
		return this._http.patch(url, data, {
			...this.defaultOptions,
			...options,
		});
	}
}
