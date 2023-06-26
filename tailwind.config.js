/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/**/*.{js,ts,jsx,tsx,vue}', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    screens: {
      // we use max-width breakpoints
      mobile: { max: '800px' },
      tablet: { max: '1280px' },
      laptop: { max: '1440px' },
      desktop: { max: '1920px' }
    },
    fontFamily: {
      lato: ['Lato'],
      'dm-serif': ['DM Serif Display']
    },
    // Find current design system in Figma: https://www.figma.com/file/hA4OmeXCikwIWl6BucBn8p/SCMP-UX%2FUI?node-id=1%3A2&t=alWo7uPzoZkjI8C8-0
    extend: {
      colors: {
        black: '#040919',
        neutral: {
          50: '#F2F3F3',
          100: '#E6E6E8',
          200: '#CDCDD2',
          300: '#B4B4B9',
          400: '#9B9BA0',
          500: '#828287',
          600: '#69696E',
          700: '#505055',
          800: '#323237',
          900: '#040919'
        },
        red: {
          50: '#FFF0F0',
          100: '#FF6666',
          200: '#FF0000',
          300: '#EB0000'
        },
        orange: {
          50: '#FFF3E9',
          100: '#FFBA7B',
          200: '#FF8C23'
        },
        green: {
          50: '#E7F8F3',
          100: '#72D8B4',
          200: '#14BE82'
        },
        blue: {
          50: '#EBFAFF',
          100: '#98CDFF',
          200: '#0C7CE6',
          300: '#1978D2'
        }
      }
    }
  },
  plugins: []
}
