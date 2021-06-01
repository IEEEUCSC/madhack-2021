module.exports = {
	purge: {
		enabled: true,
		content: ["index.html", "assets/js/*.js"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				landing: ["CoreCircus"],
				default: ["Roboto"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
