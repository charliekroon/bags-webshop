/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./src/app/**/*.{js,jsx,ts,tsx}"],
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
