import titleSubtitle from '../content/home/title-subtitle.md'
import { Box, Stack } from '@mui/joy'
import { Link } from '../components/link'
import { Markdown } from '../components/markdown'
import dateBanner from '../images/blue-date-banner.png'

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
            borderRadius: 8,
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
        <Link to={ dateBanner }>
          <img
            className="flyer"
            src={ dateBanner }
            alt="Click for large, high-resolution image"
            width="100%"
          /></Link>
      </Box>

      <Box className="description" >
        <Markdown>{ titleSubtitle }</Markdown>
        <Stack direction="row" gap={4} justifyContent="center" mt={2}>
          <Link button size="lg" to="https://docs.google.com/forms/d/e/1FAIpQLSdCXJLul-2ZShjKi2qHyQdMSPz3VPPJsHbuzgA0jSx4zDGfJQ/viewform">
              Register Here
          </Link>
        </Stack>
      </Box>
    </Stack>
  )
}