import { createTheme } from '@mui/material/styles'
import { blue, pink, grey } from '@mui/material/colors'
import baseTheme from './Base'

export default createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: pink,
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
    background: {
      default: '#eee',
      paper: '#fff',
    },
    divider: grey[300],
  },
  ...baseTheme,
})
