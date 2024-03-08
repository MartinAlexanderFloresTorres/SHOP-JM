/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1920px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in forwards',
        'fade-out': 'fadeOut 0.2s ease-in forwards',
      },
    },
  },
  plugins: [],
};
