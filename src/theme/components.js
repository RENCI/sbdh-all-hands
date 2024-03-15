export const components = {
  JoyTypography: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        fontSize: '100%',
        ...(ownerState.level === 'h1' && {
          fontSize: '1.89rem',
          margin: '16px 0',
          fontWeight: 500,

        }),
        ...(ownerState.level === 'h2' && {
          fontSize: '2rem',
          margin: '16px 0',
          fontWeight: 400,
        }),
        ...(ownerState.level === 'h3' && {
          fontSize: '1.5rem',
          margin: '16px 0',
          letterSpacing: "0.2px", 
          fontWeight: 500
        }),
        ...(ownerState.level === 'h4' && {
          fontSize: '1.4rem',
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h5' && {
          fontSize: '1.3rem',
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h6' && {
          fontSize: '1.2rem',
          margin: '16px 0',
          fontStyle: 'italic',
        }),
        ...(ownerState.level === 'title-sm' && {
          fontSize: '1rem',
          // margin: '16px 0',
          // fontStyle: 'italic',
          letterSpacing: '0.1px',
          fontWeight: 300
        }),
        ...(ownerState.level === 'body-md' && {
          fontSize: 'clamp(1rem, 0.95rem + 0.30vw, 1.2rem)',
          // color: 'red'
        
        })
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
      root: ({ ownerState, theme }) => ({
        ...(ownerState.color === 'primary' && {
          backgroundColor: theme.palette.primary[500] ,
          color: theme.palette.secondary[900],
          fontWeight: 400,
          ':hover': {
            backgroundColor: theme.palette.primary[700] ,
          }
        }),
        ...(ownerState.color === 'secondary' && {
          color: theme.palette.secondary[900],
          backgroundColor: `${theme.palette.secondary[900]}10`,
          transition: 'transform 0.2s easeIn',
          ':hover': {
            backgroundColor: `${theme.palette.secondary[900]}15` ,
          }
        })
      }),
    },
  },
  JoyDivider: {
    styleOverrides: {
      root: () => ({
        margin: '1rem 0'
      }),
    },
  },
}
