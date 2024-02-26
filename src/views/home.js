import titleSubtitle from '../content/home/title-subtitle.md'
import focusedSessions from '../content/home/focused-sessions.md'
import registrants from '../content/home/registrants.md'
import { Fragment } from 'react'
import { Box, Stack, Typography } from '@mui/joy'
import { Link } from '../components/link'
import { Markdown } from '../components/markdown'
import dateBanner from '../images/blue-date-banner.png'
import focusedSessionsImg from '../images/save-the-date-focused-sessions.png'

export const HomeView = () => {
  return (
    <Fragment>
      <Typography level="h1" sx={{textAlign: 'center'}}>Diverse and Digital: Advancing Digital Workforce and Data Sharing Across Domains</Typography>
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
          marginBottom: '2rem'
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
      <Markdown>{focusedSessions}</Markdown>
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center',
        margin: '1rem auto',
        'svg': {
          display: 'none'
        },
        '.focused-session-image': {
          maxWidth: '600px'
        },
      }}>
        <Link to={focusedSessionsImg}>
          <img
            className="focused-session-image"
            src={focusedSessionsImg}
          />
        </Link>
      </Box>
      <Markdown>{registrants}</Markdown>
    </Fragment>
  )
}