/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const notFirst = plugin(({ addVariant, e }) => {
  addVariant("not-first", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const element = e(`not-first${separator}${className}`);
      return `.${element} > :not(:first-child)`;
    });
  });
});

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-cormorant)"]
      },
      fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    }
    },
    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '740px',
      // => @media (min-width: 740px) { ... }

      'lg': '845px',
      
      'xl': '1040px',
      // => @media (min-width: 1040px) { ... }

      '2xl': '1340px',
      // => @media (min-width: 1340px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [notFirst],
}
