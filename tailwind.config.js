module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondary: '#96EF1D',
        dark: '#0C0E12',
        light: 'white',
        lightGray: '#a0a0a0'
      },
      fontFamily: {
        Onest: ["Onest", "sans-serif"],
      },
      backgroundImage: {
        'pattern': "url('/src/assets/Image/login_image.jpg')",
        'pattern-2': "url('/src/assets/Image/signup_image.jpg')",
        'home': "url('/src/assets/Image/home.jpg')",
      },
    },
  },
  plugins: [],
}