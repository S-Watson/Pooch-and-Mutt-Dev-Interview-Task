/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#4c4c4c',
        'minimal': '#999999',
        'disabled': '#d8d8d8',
        'invert': '#ffffff',
        'brand': '#d28ed3',

        'surface-primary': '#ffffff',
        'surface-secondary': '#f5efe3',
        'surface-invert': '#000000',
        'surface-brand': '#fbf4fb',

        'border-primary': '#000000',
        'border-secondary': 'rgba(0, 0, 0, 0.30)',
        'border-minimal': 'rgba(0, 0, 0, 0.15)',
        'border-invert': '#ffffff',

        'button-primary': '#000000',
        'button-primary-hover': 'rgba(0, 0, 0, 0.80)',
        'button-primary-pressed': 'rgba(0, 0, 0, 0.60)',
        'button-primary-disabled': 'rgba(0, 0, 0, 0.10)',
        'button-secondary': 'rgba(0, 0, 0, 0.06)',
        'button-secondary-hover': 'rgba(0, 0, 0, 0.10)',
        'button-secondary-pressed': 'rgba(0, 0, 0, 0.20)',
        'button-secondary-disabled': 'rgba(0, 0, 0, 0.04)',
        'button-text': '#ffffff',
        'button-text-disabled': 'rgba(0, 0, 0, 0.30)',

        'disabled-bg': 'rgba(0, 0, 0, 0.06)',
        'focus-outline': 'rgba(0, 56, 255, 0.40)',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        display: ['38px', { lineHeight: '48px', fontWeight: '700' }],
        h1: ['32px', { lineHeight: '38px', fontWeight: '700' }],
        h2: ['26px', { lineHeight: '32px', fontWeight: '700' }],
        h3: ['22px', { lineHeight: '28px', fontWeight: '700' }],
        s1: ['18px', { lineHeight: '26px', fontWeight: '500' }],
        p1: ['18px', { lineHeight: '26px', fontWeight: '300' }],
        p2: ['16px', { lineHeight: '24px', fontWeight: '300' }],
        c1: ['10px', { lineHeight: '14px', fontWeight: '300' }],
        button: ['16px', { lineHeight: '16px', fontWeight: '500' }],
      },

      spacing: {
        0: '0px',
        1: '2px',
        2: '4px',
        3: '6px',
        4: '8px',
        5: '12px',
        6: '16px',
        7: '20px',
        8: '24px',
        9: '32px',
        10: '40px',
        11: '60px',
        12: '80px',
        13: '120px',
        14: '160px',
      },

      borderRadius: {
        small: '2px',
        medium: '8px',
        large: '20px',
        full: '99999px',
      },

      screens: {
        xl: '1500px', // XL: 1500px and up
        lg: '1101px', // L: 1101px to 1500px
        md: '701px',  // M: 701px to 1100px
        sm: '0px',    // S: 0px to 700px
      },

      maxWidth: {
        'xl-container': '1680px',
        'lg-container': '1440px',
        'md-container': '768px',
        'sm-container': '375px',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          xl: '48px',
          lg: '40px',
          md: '32px',
          sm: '0',
        },
      },
    },
  },
}
