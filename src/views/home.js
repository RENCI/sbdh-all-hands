import titleSubtitle from '../content/home/title-subtitle.md'
import focusedSessions from '../content/home/focused-sessions.md'
import registrants from '../content/home/registrants.md'
import { Fragment } from 'react'
import { Box, Stack, Typography, Card, AspectRatio, CardContent, Divider, Button } from '@mui/joy'
import { Link } from '../components/link'
import { Markdown } from '../components/markdown'
import dateBanner from '../images/blue-date-banner.png'
import focusedSessionsImg from '../images/save-the-date-focused-sessions.png'
import { useTheme } from '@mui/joy/styles'
import { speakers } from '../content/speakers/index.js'

export const HomeView = () => {
  const theme = useTheme()

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
      <Markdown>{registrants}</Markdown>

      <Box sx={{
        display: 'flex', 
        justifyContent: 'center',
        margin: '1.2rem auto',
        'svg': {
          display: 'none'
        },
        '.focused-session-image': {
          maxWidth: '100%',
          '@media screen and (max-width: 600px)': {
            maxWidth: '100%'
          }
        },
      }}>
        <Link to={focusedSessionsImg}>
          <img
            className="focused-session-image"
            src={focusedSessionsImg}
            alt="Click for large, high-resolution image"
          />
        </Link>
      </Box>

      <Divider sx={{color: theme.palette.secondary[500], margin: '2rem 0'}} />

      <Typography level="h2" sx={{textAlign: 'center', fontSize: '2rem', color: theme.palette.secondary[900], margin: '1rem 0'}}>Keynote Speakers</Typography>

      <Stack
        direction={{xs: 'column', sm: 'row' }}
        gap={{xs: 2, sm: 1, md: 4}}
        flex
        sx={{maxWidth: '900px', margin: '0 auto 2rem'}}
      >
        {speakers.map((speaker)=>(
          <Card 
            key={speaker.name} 
            sx={{flex: 1}}
            variant="soft"
            size="lg"
          >
            <AspectRatio ratio="1" sx={{
              borderRadius: '100%',
              transition: 'transform 0.1s',
              ':hover': {
                  transform:'scale(1.02)'
              }
            }}>
              <img 
                src={speaker.image}
                width="100%"
                height="100%"
              />
            </AspectRatio>

            <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Box>
                <Typography level="h3" sx={{
                  color: theme.palette.secondary[800],
                }}>{speaker.name}</Typography>
                <Typography level="title-sm" sx={{marginBottom: '1.2rem'}}>{speaker.info}</Typography>
              </Box>
              <Box sx={{margin: '0 auto'}}>
                <Link to={`/speakers#${speaker.slug}`} underline="none">
                  <Button color="secondary" sx={{}}>Read More</Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Fragment>
  )
}