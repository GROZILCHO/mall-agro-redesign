/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Покрива всички файлове в src
  ],
  theme: {
    extend: {
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Модифицирайте стойностите
      },
      boxShadow: {
        'hero-title': '0 4px 6px rgba(0, 0, 0, 0.3)', // Сянка за заглавия
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '56px', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '44px', fontWeight: '600' }],
        h3: ['28px', { lineHeight: '36px', fontWeight: '600' }],
        h4: ['22px', { lineHeight: '30px', fontWeight: '500' }],
        body: ['16px', { lineHeight: '24px' }], // основен текст
        p: ['14px', { lineHeight: '22px' }], // Малък текст
        'btn-sm': ['14px', { lineHeight: '20px' }], // Малък бутон
        'btn-md': ['16px', { lineHeight: '24px' }], // Среден бутон
        'btn-lg': ['18px', { lineHeight: '28px' }], // Голям бутон
      },
      colors: {
        primary: '#4E321D',
        menu: '#1E5F4B',
        white: '#FFFFFF',
        gentle: '#F8F5F0',
        accent: '#FFCC33',
        secondary: '#D4A373',
        neutral: '#E7E6E1',
        warning: '#FF5700',
      },
      borderRadius: {
        btn: '6px',
      },
      padding: {
        'btn-base': '8px 16px',
        'btn-sm': '8px 16px', // Малък бутон
        'btn-md': '10px 24px', // Среден бутон
        'btn-lg': '12px 32px', // Голям бутон
      },
      height: {
        '80vh': '80vh',
        '60vh': '60vh',
        '40vh': '40vh',
        '20vh': '20vh',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
