/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
			fontFamily: {
				sans: 'Roboto, sans-serif',
			},

			backgroundImage: {
				app: 'url(/app-bg.png)',
			},

			colors: {
				gray: {
					100: '#E1E1E6',
					200: '#C4C4CC',
					300: '#8D8D99',
					600: '#323238',
					800: '#202024',
					900: '#121214',
				},

				nlw: {
					yellow: {
						500: '#F7DD43',
						700: '#E5CD3D',
					},
					green: {
						500: '#129E57',
					},
				},
      },
    },
  },
  plugins: [],
}
