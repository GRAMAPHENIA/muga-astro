/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores principales de la paleta MUGA
        'accent': '#FF5353',
        'accentmd': '#5E3131',
        'accentxs': '#2D1F1F',
        'obscure': '#191717',
        'mugagray': '#302E2E',
        'graylight': '#A0A0A0',
        
        // Colores para uso en componentes
        'muga': {
          'primary': '#FF5353',
          'dark': {
            '800': '#191717',
          },
          'neutral': '#A0A0A0',
        }
      }
    },
  },
  plugins: [],
};
