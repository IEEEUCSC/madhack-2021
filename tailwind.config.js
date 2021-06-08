module.exports = {
	purge: [
		"index.html", "assets/js/*.js",
	],
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
