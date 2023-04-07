/** @type {import('next').NextConfig} */
const { version } = require('./package.json');
const PRODUCTION = process.env.NODE_ENV === 'production';

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
		removeConsole: PRODUCTION ? { exclude: ['error'] } : false,
	},
	eslint: {
		dirs: ['pages', 'utils', 'components'],
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60,
		domains: ['flagcdn.com', 'upload.wikimedia.org'],
	},
	distDir: 'build',
	publicRuntimeConfig: {
		version,
	},
};

module.exports = nextConfig;
