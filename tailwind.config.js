const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: "class",
	content : [
		"./src/**/*.{html,ts,js}",
		"./src/assets/styles/frameworks/tailwind-safelist.txt"
	],
	theme   : {
		minWidth  : {
			'0'   : '0',
			'1/4' : '25%',
			'1/2' : '50%',
			'3/4' : '75%',
			'full': '100%'
		},
		fontFamily: {
			'sans': ["'Helvetica'", "'Arial'", "'sans-serif'"],
			'mono': ["'Roboto Mono'", "'monospace'"],
		},
		extend    : {
			colors  : {
				themeColor01: colors.neutral,
				copper: '#905926',
				silver: '#d5d5d5',
				gold: '#FFD700',
				platinum: '#0997af',
				obsidian: '#6d4b81',
			},
			fontSize: {
				'3xs': '0.5rem',
				'2xs': '0.65rem'
			}
		},
	},
	plugins : [],
}
