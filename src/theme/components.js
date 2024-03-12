export const components = {
  JoyTypography: {
    styleOverrides: {
      root: ({ ownerState }) => ({
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
      root: ({ theme }) => ({
        color: theme.palette.secondary[700],
        fontWeight: 600,
      }),
    },
  },
  JoyButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.primary[500] ,
        color: theme.palette.secondary[900],
        fontWeight: 400,
        ':hover': {
          backgroundColor: theme.palette.primary[700] ,
        }
      }),
    },
  },
  JoyDivider: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.secondary[900],
        margin: '1rem 0'
      }),
    },
  },
}
