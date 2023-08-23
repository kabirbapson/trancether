import {extendTheme, themeTools} from 'native-base';

const customTheme = extendTheme({
  fontConfig: {
    Lato: {
      // 300: {
      //   normal: 'Lato-Regular',
      // },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Lato',
    body: 'Lato',
    mono: 'Lato',
  },
  colors: {
    primary: {
      500: '#fff',
      600: '#35A1D4',
    },
    secondary: {
      600: '#FFC602',
      700: '#333333',
    },
    blue: {
      400: '#EFF8FF',
      500: '#003E5B',
      600: '#35A1D4',
      700: '#003E5B',
    },
    gray: {
      200: themeTools.mode('rgba(51, 51, 51, 0.2)', 'rgba(51, 51, 51, 1)'),
      300: '#DEE2E6',
      400: '#9C9C9C',
      500: '#474747',
      600: '#F7F6F6',
      800: '#464646',
      900: '#494949',
    },
    red: {
      500: '#FF0000',
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

export default customTheme;
