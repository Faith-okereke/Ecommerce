/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'overlay' : 'hsl(0, 0%, 0%)'
      },
      colors:{
        'lightGray' :' hsl(220, 14%, 75%)',
        'veryLightGray': ' hsl(223, 64%, 98%)',
        'orange':'hsl(26, 100%, 55%)',
        'lightOrange':'hsl(25, 100%, 94%)'
      }
    },
  },
  plugins: [],
}