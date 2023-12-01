// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
}

// 3. extend the theme
const theme = extendTheme({ config ,colors:
  {
    gray:   
{
  50: '#f2f2f2',
  100: '#d9d9d9',
  200: '#bfbfbf',
  300: '#a6a6a6',
  400: '#8c8c8c',
  500: '#737373',
  600: '#595959',
  700: '#404040',
  800: '#262626',
  900: '#0d0d0d',
}
  }, fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },styles: {
    global: {
      // Add your custom scrollbar styles here
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '4px',
        ':hover': {
          background: '#888',
        },
      },
      '*': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f1f1f1',
      },
    },
  },})

export default theme