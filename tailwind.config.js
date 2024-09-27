/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pryColor: { DEFAULT: '#075DC1', 400: '#023F88', 100: '#075DC10D' },
        white: '#fff',
        black: '#000',
        Grey1: '#525252',
        Grey2: '#565c69',
        Grey3: '#F0F0F0',
        Grey4: '#F3F4F8',
        Grey5: '#bcbcbd',
        Grey6: '#7e8494',
        PaleSky: '#6B7280',
        Line: '#e5e7ef',
        rated: '#be9122',
        positive: '#17813C',
        negative: '#ff3b2d',
        receiver: '#eeeff2',
        sender: '#3b70fb',
      },
    },
    fontFamily: {
      sans: ['Inter Tight', 'sans-serif'],
      Karla: ['Karla', 'sans-serif'],
    },
  },
  plugins: [],
};
