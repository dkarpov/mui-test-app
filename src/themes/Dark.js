import { createTheme } from '@mui/material/styles'
import { red, grey } from '@mui/material/colors'
import baseTheme from './Base'

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[700],
    },
  },
  ...baseTheme,
})
