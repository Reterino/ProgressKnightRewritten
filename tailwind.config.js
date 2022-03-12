const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: "class",
	content : [
		"./src/**/*.{html,ts,js}"
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
				themeColor01: colors.neutral
			},
			fontSize: {
				'3xs': '0.5rem',
				'2xs': '0.65rem'
			}
		},
	},
	plugins : [],
}
