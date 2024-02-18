/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': {'max': '767px'},
        screens: {
    
          'md': {'max': '767px'},
          // @media (max-width: 767px) { 


          //  }
    
          'sm': {'max': '639px'},
          // => @media (max-width: 639px) { ... }
        }
      
 },
  },
  plugins: [],
  },
}