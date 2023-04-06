export const CONFIG = {
	ENV: {
		NAME: process.env.NEXT_PUBLIC_NODE_ENV,
		PRODUCTION: process.env.NEXT_PUBLIC_NODE_ENV == 'production' ? true : false,
		DEBUG_MODE: process.env.NEXT_PUBLIC_APP_DEBUG ? true : false,
		APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
		API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
		API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
	},
};
