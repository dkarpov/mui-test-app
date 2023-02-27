const baseTheme = {
  spacing: 8,
  typography: {
    fontFamily: [
      '"Hiragino Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {},
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
}

export default baseTheme
