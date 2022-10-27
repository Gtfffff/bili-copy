module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        base: ['14px', { lineHeight: '64px' }],
        search: ['14px', { lineHeight: '17px' }]
      },
      boxShadow: {
        search: '0 0 30px rgb(0 0 0 / 10%)',
        channel: '0 2px 4px rgb(0 0 0 / 8%)'
      },
      gridTemplateColumns: {
        15: 'repeat(15, minmax(0, 1fr))'
      },
      gridRowEnd: {
        16: '16'
      }
    }
  },
  plugins: []
}
