/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/app/styles/**/*.{css,scss}", "./src/app/globals.css"],
	theme: {
		extend: {
			fontFamily: {
				playfairRegular: ["Playfair Display", "sans-serif"],
				playfairBold: ["Playfair Display", "sans-serif"],
				playfairItalic: ["Playfair Display", "sans-serif"],
				montserratRegular: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
