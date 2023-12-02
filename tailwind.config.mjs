/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
	theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neutral: '#FFFFE8',
      gray: '#333333',
      teal: '#008080',
      olive: '#556B2F',
      wine: '#880000',
      black: '#0F1A15',
      offwhite: '#F5F5DC',
      darkteal: '#005B5A',
      darkgray: '#1A2628',
      coral: '#E2725B',
    },
		extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        display: ["Merriweather Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
      },
      strokeWidth: {
        '15': '15px',
      },
    },
	},
	plugins: [],
}