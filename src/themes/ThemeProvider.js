import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { themes } from './'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeProvider({ children }) {
  const [mode, setMode] = React.useState('light')

  const theme = React.useMemo(() => themes[mode], [mode])

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}
