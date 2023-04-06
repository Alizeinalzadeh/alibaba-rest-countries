import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Nunito_Sans } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	variable: '--font-nunito',
	weight: ['300', '600', '800'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={`${nunitoSans.variable} font-nunito`}>
				<Component {...pageProps} />
			</main>
			<Script
				type='module'
				src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
				strategy='afterInteractive'
			/>
			<Script
				noModule
				src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
				strategy='afterInteractive'
			/>
		</>
	);
}
