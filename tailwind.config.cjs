/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'eerie-black': '#131313',
				'black-lighter': '#1D1D1D',
        cornsilk: '#FEFAE0',
      },
      fontFamily: {
				body: ['Futura'],
				content: ['Futura'],
        refrain: ["Brygada 1918"]
			},
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
		themes: ["light"],
	},
};