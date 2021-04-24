
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    variants: {
      extend: {
        borderColor: ['focus-visible'],
        opacity: ['disabled']
      }
    }
  }
}
