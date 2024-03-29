/** @type {import('tailwindcss').Config} */

export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media',
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: {
          default: 'var(--color-ice-2)',
          strong: 'var(--color-ice-1)',

          error: 'var(--color-pink-5)',
          errorInactive: 'var(--color-pink-inactive)',
          information: 'var(--color-gray-3)',
          informationInactive: 'var(--color-gray-inactive)',
          success: 'var(--color-blue-1)',
          successInactive: 'var(--color-blue-inactive)',
          warning: 'var(--color-orange-5)',
          warningInactive: 'var(--color-orange-inactive)',

          blue: 'var(--color-blue-1)',
          blueStrong: 'var(--color-blue-2)',
          gray: 'var(--color-gray-2)',
          grayStrong: 'var(--color-gray-3)',
          green: 'var(--color-green-2)',
          greenStrong: 'var(--color-green-3)',
          orange: 'var(--color-orange-2)',
          orangeStrong: 'var(--color-orange-3)',
          pink: 'var(--color-pink-2)',
          pinkStrong: 'var(--color-pink-3)',
          purple: 'var(--color-purple-2)',
          purpleStrong: 'var(--color-purple-3)',
          sky: 'var(--color-sky-2)',
          skyStrong: 'var(--color-sky-3)',
          white: 'var(--color-white)',
        },
        border: {
          default: 'var(--color-ice-2)',
          strong: 'var(--color-ice-3)',

          error: 'var(--color-pink-5)',
          errorInactive: 'var(--color-pink-inactive)',
          information: 'var(--color-gray-3)',
          informationInactive: 'var(--color-gray-inactive)',
          success: 'var(--color-blue-1)',
          successInactive: 'var(--color-blue-inactive)',
          warning: 'var(--color-orange-5)',
          warningInactive: 'var(--color-orange-inactive)',

          blue: 'var(--color-blue-2)',
          gray: 'var(--color-gray-2)',
          green: 'var(--color-green-2)',
          orange: 'var(--color-orange-2)',
          pink: 'var(--color-pink-2)',
          purple: 'var(--color-purple-2)',
          sky: 'var(--color-sky-2)',
          white: 'var(--color-white)',
        },
      },
      textColor: {
        default: 'var(--color-blue-2)',
        strong: 'var(--color-blue-2)',
        inactive: 'var(--color-blue-inactive)',

        error: 'var(--color-pink-5)',
        errorInactive: 'var(--color-pink-inactive)',
        information: 'var(--color-gray-3)',
        informationInactive: 'var(--color-gray-inactive)',
        success: 'var(--color-blue-1)',
        successInactive: 'var(--color-blue-inactive)',
        warning: 'var(--color-orange-5)',
        warningInactive: 'var(--color-orange-inactive)',

        blue: 'var(--color-blue-1)',
        gray: 'var(--color-gray-4)',
        green: 'var(--color-green-4)',
        orange: 'var(--color-orange-4)',
        pink: 'var(--color-pink-4)',
        purple: 'var(--color-purple-4)',
        sky: 'var(--color-sky-4)',
        white: 'var(--color-white)',
      },
    },
  },
  variants: {
    extend: {},
  },
};
