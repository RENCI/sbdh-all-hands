import content from '../content/home.md'
import { Box, Stack } from '@mui/joy'
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
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
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

      <Box className="description">
        <Markdown>{ content }</Markdown>
      </Box>
    </Stack>
  )
}