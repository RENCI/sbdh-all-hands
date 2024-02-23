export const components = {
  JoyTypography: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        fontSize: '100%',
        ...(ownerState.level === 'h1' && {
          fontSize: '200%',
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
}
