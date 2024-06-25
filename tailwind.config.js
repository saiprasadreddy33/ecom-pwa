export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  './public/index.html',
];

export const theme = {
  extend: {
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out',
    },
  },
};

export const plugins = [];
