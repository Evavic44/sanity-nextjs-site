/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {// screen sizes // https://tailwindcss.com/docs/breakpoints
      'xs': '428px',    // mobil      // 4 Column    // 16px margin    // 428px xs:
      'sm': '768px',    // tablet     // 8 Column    // 28px margin    // 768px sm:
      'md': '1280px',   // desktop    // 12 Column   // 52px margin    // 1280px md:
      'lg': '1440px',   // desktop    // 12 Column   // 72px margin    // 1440px lg:
      'xl': '1920px',   // desktop    // 24 Column   // 144px margin   // 1920px xl:
      '2xl': '2500px',  // desktop    // 24 Column   // 206px margin   // 2500px 2xl:
    },
    extend: {
      gridTemplateColumns: {
        // 24-column grid
        '24': 'repeat(24, minmax(0, 1fr))',   // 24-column grid
        '12': 'repeat(12, minmax(0, 1fr))',   // 12-column grid
        '8': 'repeat(8, minmax(0, 1fr))',     // 8-column grid
        '4': 'repeat(4, minmax(0, 1fr))',     // 4-column grid
        '3': 'repeat(3, minmax(0, 1fr))',     // 3-column grid
        '2': 'repeat(2, minmax(0, 1fr))',     // 2-column grid
        '3-small': 'repeat(3, minmax(0, 0.1fr))',     // 4-column grid
      },
      spacing: { // spacing
        '4.5': '1.125rem',// 1.125rem = 
        '5.5': '1.125rem',
        '13': '3.125rem',
        '13.5': '3.25rem',
        '19': '4.5rem',
        // Viewport Height
        'vh-75': '75vh',
        'vh-100': '100vh',
        'vh-90': '90vh',
        'vh-80': '80vh',
        'vh-85': '85vh',
      },

      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gridColumnEnd: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        // NEGETIVE
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
        '-11': '-11',
        '-12': '-12',
        '-13': '-13',
        '-14': '-14',
        '-14': '-14',
        '-15': '-15',
        '-16': '-16',
        '-17': '-17',
        '-18': '-18',
        '-19': '-19',
        '-20': '-20',
        '-21': '-21',
        '-22': '-22',
        '-23': '-23',
        '-24': '-24',
      },
      gridColumnStart: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        // NEGETIVE
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
        '-11': '-11',
        '-12': '-12',
        '-13': '-13',
        '-14': '-14',
        '-14': '-14',
        '-15': '-15',
        '-16': '-16',
        '-17': '-17',
        '-18': '-18',
        '-19': '-19',
        '-20': '-20',
        '-21': '-21',
        '-22': '-22',
        '-23': '-23',
        '-24': '-24',
      },
      gridColumn: {
        'span-24': 'span 24 / span 24',
      },
    },
  },
  plugins: [],
};
