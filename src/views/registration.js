import content from '../content/home.md'
import { Box, Stack, Button } from '@mui/joy'
import { Link } from '../components/link'
import { Markdown } from '../components/markdown'

export const RegistrationView = () => {
  return (
    <Box>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSdCXJLul-2ZShjKi2qHyQdMSPz3VPPJsHbuzgA0jSx4zDGfJQ/viewform?embedded=true"
        title='Registration form' 
        height="1000" 
        width="100%" 
      >
      </iframe>
    </Box>
  )
}