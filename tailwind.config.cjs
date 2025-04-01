/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'azul':'#329382',
				'gradiente-black' : 'linear-gradient(0deg, #222223 0%, #2a2a2d 22%, #2c2d31 49%, #2a2a2d 75%, #222223 100%);'
				
			},
			fontFamily: {
				rocksalt: ['Rock Salt'], 
			  },
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwind-scrollbar'),
	],
}