/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all JSX files are included
  ],
  theme: {
    extend: {
      colors:{
        customPlum:'linear-gradient(135deg,rgb(132, 182, 211) 0%,rgb(155,81,224) 100%)',
        customPurple:'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
        background:'linear-gradient(118deg, rgba(14, 8, 58, 1), rgba(131, 70, 160, 1))',
        driftingDream:'#c8b8e8',
        fabricOfSpace:'#331A5E',
      }
      
    },
  },
  plugins: [],
}

