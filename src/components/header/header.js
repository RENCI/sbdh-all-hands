import { Sheet } from '@mui/joy'
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
      borderBottom: '2px solid #f37521',
      '.overlay': {
        margin: '2rem',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
      }

    }}>
      <div className="overlay">
        <Brand size="large" />
      </div>
    </Sheet>
  )
}
