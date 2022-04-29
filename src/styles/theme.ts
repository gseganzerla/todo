import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: {
        dialog: {
          bg: 'gray.800',
        },
      },
    },
    Button: {
      defaultProps: {
        colorScheme: 'pink',
      },
    },
    Table: {
      defaultProps: {
        colorScheme: 'whiteAlpha',
      },
    },
  },
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },
  },
  fonts: {
    body: '"Poppins", sans-serif',
    heading: '"Poppins", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
})
