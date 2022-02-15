const radixColors = require('@radix-ui/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...radixColors.slate,
      ...radixColors.red,
      ...radixColors.pink,
      ...radixColors.purple,
      ...radixColors.indigo,
      ...radixColors.grass,
      ...radixColors.orange,
      ...radixColors.yellow,

    },
    extend: {},
  },
  plugins: [],
}
