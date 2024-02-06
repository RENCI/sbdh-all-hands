import content from '../content/home.md'
import { Box, Stack } from '@mui/joy'
import { Link } from '../components/link'
import { Markdown } from '../components/markdown'
import flyer from '../images/2024-04-18_save-the-date_partnership-forum.png'

export const HomeView = () => {

  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      sx={{
        '.flyer-preview': {
          flex: '1 0 400px',
          p: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.description': {
          flex: '1 1 700px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Box className="flyer-preview">
        <Link to={ flyer }>
          <img
            src={ flyer }
            width="100%"
          />
        </Link>
      </Box>

      <Box className="description">
        <Markdown>{ content }</Markdown>
      </Box>
    </Stack>
  )
}