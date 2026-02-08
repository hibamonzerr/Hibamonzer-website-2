/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ebony-shadow': '#85655C', // New main dark color from image
        'forest-husk': '#888465', // Keeping this as it wasn't explicitly replaced
        'stone-taupe': '#9E8B82', // New mid-tone for secondary text
        'olive-sand': '#B5977F', // New main accent color from image
        'light-bg-1': '#E0D8D0', // Lighter background based on new palette
        'light-bg-2': '#E8E2DA', // Even lighter background
        'light-bg-3': '#F0EDE7', // Lightest background
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};