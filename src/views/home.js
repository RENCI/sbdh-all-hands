import content from '../content/home.md'
import { Box, Stack, Button } from '@mui/joy'
import { Link } from '../components/link'
import { Markdown } from '../components/markdown'
import flyer from '../images/2024-04-18_save-the-date_partnership-forum.png'

export const HomeView = () => {
  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      justifyContent="flex-start"
      gap={{ sm: 0, md: 4 }}
      sx={{
        '.flyer-container': {
          borderRadius: 12,
          mt: 2,
          flex: '1 0 400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '.flyer': {
            borderRadius: 12,
            border: '2px solid var(--color-sbdh)',
            verticalAlign: 'bottom',
          },
          'svg': {
            display: 'none'
          },
        },
        '.description': {
          flex: { sm: '1', md: '1 1 700px'},
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          // alignItems: 'center',
          'h1': {
            textAlign: 'center',
          }
        },
      }}
    >
      <Box className="flyer-container">
        <Link to={ flyer }>
          <img
            className="flyer"
            src={ flyer }
            alt="Click for large, high-resolution image"
            width="100%"
          /></Link>
      </Box>

      <Box className="description" >
        <Markdown>{ content }</Markdown>
        <Stack direction="row" gap={4} justifyContent="center" mt={2}>
          <Link button size="lg" to="https://docs.google.com/forms/d/e/1FAIpQLSdCXJLul-2ZShjKi2qHyQdMSPz3VPPJsHbuzgA0jSx4zDGfJQ/viewform">
              Register Here
          </Link>
          <Link button size="lg" to="https://docs.google.com/document/d/1RC1de1Tj-u_9cUONHUihtyWXy8MQq20AHMYhUGyNNX4/edit?usp=sharing">
              View the Agenda
          </Link>
        </Stack>
      </Box>
    </Stack>
  )
}