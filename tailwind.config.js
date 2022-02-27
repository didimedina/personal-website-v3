const radixColors = require('@radix-ui/colors')

// console.log(radixColors.slateDark)
// console.log(radixColors.slate)

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: {
        '1': 'var(--slate1)',
        '2': 'var(--slate2)',
        '3': 'var(--slate3)',
        '4': 'var(--slate4)',
        '5': 'var(--slate5)',
        '6': 'var(--slate6)',
        '7': 'var(--slate7)',
        '8': 'var(--slate8)',
        '9': 'var(--slate9)',
        '10': 'var(--slate10)',
        '11': 'var(--slate11)',
        '12': 'var(--slate12)',
        // dark: {
        //   '1': rgb(21, 23, 24);
        //   '2': rgb(26, 29, 30);
        //   '3': rgb(32, 36, 37);
        //   '4': rgb(38, 41, 43);
        //   '5': rgb(43, 47, 49);
        //   '6': rgb(49, 53, 56);
        //   '7': rgb(58, 63, 66);
        //   '8': rgb(76, 81, 85);
        //   '9': rgb(105, 113, 119);
        //   '10': rgb(120, 127, 133);
        //   '11': rgb(155, 161, 166);
        //   '12': rgb(236, 237, 238);
        // }
      },      
      // dark: {
      //   // 'slate1': mode? slate1 : slateDark1
      //   ...radixColors.slateDark,
      // }
      // how do you get this to be implicit at build time?

    },
    extend: {},
  },
  plugins: [],
}

