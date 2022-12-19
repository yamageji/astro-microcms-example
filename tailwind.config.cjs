/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'barlow-semi': ["'Barlow Semi Condensed'", 'sans-serif'],
        screens: {
          xs: '580px',
        },
      },
      gridTemplateRows: {
        layout: 'auto minmax(0, 1fr) auto',
      },
    },
  },
  plugins: [],
};
