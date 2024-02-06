import { Sheet } from '@mui/joy'
import { Brand } from '../brand'

//

export const Footer = () => {
  return (
    <Sheet component="footer" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      backgroundColor: '#f3752133',
      borderTop: '2px solid var(--color-sbdh)',
      padding: '1rem',
      color: '#333',
    }}>
      <span>
        &copy; { new Date().getFullYear() }
      </span>
      <Brand compass size="tiny" />
    </Sheet>
  )
}
