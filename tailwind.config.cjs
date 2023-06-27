const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	  },

	theme: {
		extend: {}
	},

	plugins: [daisyui]
};

module.exports = config;
