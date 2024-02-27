export const components = {
  JoyTypography: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        fontSize: '100%',
        ...(ownerState.level === 'h1' && {
          fontSize: '1.84rem',
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h2' && {
          fontSize: '180%',
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h3' && {
          fontSize: '150%',
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h4' && {
          fontSize: '146%',
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h5' && {
          fontSize: '130%',
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h6' && {
          fontSize: '110%',
          margin: '16px 0',
          fontStyle: 'italic',
        }),
      }),
    },
  },
  JoyLink: {
    styleOverrides: {
      // `ownerState` contains the component props and internal state
      root: ({ ownerState, theme }) => ({
        color: theme.palette.secondary[700],
        fontWeight: 600,
      }),
    },
  },
  JoyButton: {
    styleOverrides: {
      // `ownerState` contains the component props and internal state
      root: ({ ownerState, theme }) => ({
        backgroundColor: theme.palette.primary[500] ,
        color: theme.palette.secondary[900],
        fontWeight: 400,
      }),
    },
  },
}
