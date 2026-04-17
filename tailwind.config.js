/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@jswork/presets-tailwind')],
  content: ['./docs/**/*.{md,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
