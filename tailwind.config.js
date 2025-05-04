/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    colors:{
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2d2421",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#5fcfdd",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#f0a94f",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#8a938e",
      darkGrey: "#3f4441",
      purple:"#5033a1",
      blue:"#1f4185",
      green:"#143f5e"
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },

      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
        glow: '0 0 15px rgba(124, 95, 230, 0.7)',
        purpleGlow: "0 0 15px rgba(114, 38, 255, 0.6)", // dari #7226ff
        fuchsiaGlow: "0 0 20px rgba(240, 66, 255, 0.5)", // dari #f042ff
        pinkGlow: "0 0 25px rgba(255, 229, 241, 0.5)", // dari #ffe5f1
      },

      backgroundImage: {
        'gradient-purple': 'linear-gradient(to right, #645CBB, #ff8a8c)',
        'gradient-green': 'linear-gradient(to right, #bc430d, #BFACE2)',
        'gradient-blue' : 'linear-gradient(to right, #0033ff, #977dff, #ffccf2)',
        'gradient-purples' : 'linear-gradient(to right, #7226ff, #f042ff, #ffe5f1)',

      },

      fontFamily:{
        body:['Josefin Sans'],
        special:['Roboto'],
      }
    },
    
  },
  plugins: [],
}

