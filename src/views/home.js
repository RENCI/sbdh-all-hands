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
        direction={{xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
        justifyContent="start"
        gap={{ sm: 0, md: 4 }}
        sx={{
          '.flyer-container': {
            borderRadius: 12,
            mt: 2,
            mb: {xs: 1, sm: 0},
            flex: {sm: '1 0 300px', md: '1 0 500px'},
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
            marginTop: '1rem'
          },
          marginBottom: {sm: '1rem', md: '2rem'}
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
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Link button size="lg" to="/registration">
              Register Here
            </Link>
          </Box>
        </Box>
      </Stack>
      
      <Markdown>{focusedSessions}</Markdown>

      <Box sx={{
        display: 'flex', 
        justifyContent: 'center',
        margin: '1.2rem auto',
        'svg': {
          display: 'none'
        },
        '.focused-session-image': {
          maxWidth: '600px',
          '@media screen and (max-width: 600px)': {
            maxWidth: '100%'
          }
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