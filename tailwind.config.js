/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        muga: {
          primary: '#FF5353',
          dark: {
            900: '#191717',
            800: '#2D1F1F',
            700: '#302E2E',
          },
          neutral: '#D9D9D9',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}