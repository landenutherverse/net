module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'sans': ['Space Grotesk', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'nav': 'Nunito',
        'futura': ['futura-pt', 'Helvetica', 'Arial', 'sans-serif'],
        'futura-bold': ['futura-pt-bold', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        utherverse: {
          blue: '#3DADE2',
          red: '#D93264',
          gray: '#474749',
          white: '#ffffff',
          yellow: '#FED53A'
        }
      }
    },
  },
  plugins: [
  ],
}