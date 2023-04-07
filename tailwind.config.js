/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: ['class', '[theme-mode="dark"]'],
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: {
					background: 'hsl(207, 26%, 17%)',
					primary: 'hsl(209, 23%, 22%)',
					text: 'hsl(0, 0%, 100%)',
				},
				light: {
					background: 'hsl(0, 0%, 98%)',
					primary: 'hsl(0, 0%, 100%)',
					text: 'hsl(200, 15%, 8%)',
					input: 'hsl(0, 0%, 52%)',
				},
			},
			fontFamily: {
				nunito: ['var(--font-nunito)', ...fontFamily.sans],
			},
			boxShadow: {
				'sm-light': '0px 4px 10px rgba(0, 0, 0, 0.1)',
				'md-light': '0px 4px 10px rgba(0, 0, 0, 0.2)',
				'lg-light': '0px 4px 10px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
};
