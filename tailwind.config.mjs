/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0C111D',
				secondary: '#4452FE',
				tertiary: '#94969C'
			}
		},
	},
	plugins: [],
}
