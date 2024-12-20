/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ff0040',
          green: '#0c724a',
          blue: '#0d2252',
        },
      },
      textShadow: {
        sm: '2px 2px 5px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 10px rgba(0, 0, 0, 0.5)',
        none: 'none',
      },
      boxShadow: {
        'highlight-none': '0 2px 0 0 rgba(255, 0, 64, .5)',
        highlight: '0 4px 0 0 rgba(255, 0, 64, 1)',
      },
    },
  },
  plugins: [],
}
