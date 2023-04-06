/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
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
				sans: ['var(--font-nunito)', ...fontFamily.nunito],
			},
		},
	},
	plugins: [],
};
