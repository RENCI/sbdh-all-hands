import { Sheet, Box, Typography, Container } from '@mui/joy'
import { Brand } from '../brand'

//

export const Header = () => {
  return (
    <Sheet component="header" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'linear-gradient(210deg, #fff, #f3752133)',
      color: '#222',
      containerType: 'inline-size',
      width: '100%',
      borderBottom: '1px solid #f37521',
      '.overlay': {
        padding: '0.5rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
      },
    }}>
      <Container maxWidth="lg">
        <div className="overlay">
          <Brand size="medium" />
        </div>
      </Container>

      <Box sx={{
        backgroundColor: "#f37521",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Container maxWidth="lg">
          <Typography level="h1" className="overlay" sx={{
              padding: '0 2rem',
              fontSize: '2rem',
              color: 'white',
              letterSpacing: '0.1px',
              fontWeight: 400,
              margin: '0',
          }}>
            South Big Data Innovation Hub
          </Typography>
        </Container>
      </Box>
    </Sheet>
  )
}
