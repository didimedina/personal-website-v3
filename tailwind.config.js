const radixColors = require('@radix-ui/colors')

console.log(radixColors.slateDark)
console.log(radixColors.slate)

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
      
      
      ...radixColors.slate,
      
      
      dark: {
        // 'slate1': mode? slate1 : slateDark1
        ...radixColors.slateDark,
      }
      // how do you get this to be implicit at build time?

    },
    extend: {},
  },
  plugins: [],
}

