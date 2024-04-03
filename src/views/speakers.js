import { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { speakers } from '../content/speakers/index.js'
import { AspectRatio, Box, Card, Stack, Typography } from '@mui/joy'
import { Markdown } from '../components/markdown'

export const SpeakersView = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    if (!location.hash) {
      return
    }
    const targetElement = document.getElementById(location.hash.slice(1))
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])
  
  return (
    <Box sx={{paddingBottom: '10rem'}}>
      <Typography level="h2" sx={{marginBottom: '0'}}>Speakers</Typography>
      {speakers.map((speaker)=> {
        return (
          <Fragment key={speaker.name}>
            <Box id={speaker.slug} sx={{paddingBottom: '3rem'}} mt="-2rem"></Box>
            <Card variant="soft" sx={{backgroundColor:'#ffffff00'}}>
              <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={3}
              >
                <Box sx={{display: 'flex', justifyContent: 'center' }}>
                  <AspectRatio ratio={1}  sx={{ width: 300 }}>
                    <img 
                      src={speaker.image}
                      width="100%"
                    />
                  </AspectRatio>
                </Box>
                <Stack direction="column">
                  <Typography level="h3" sx={{marginTop: 0, marginBottom: '0.5rem'}} >{speaker.name}</Typography>
                  <Typography level="title-md" sx={{marginBottom: '0.5rem'}}>{speaker.info}</Typography>
                  <Markdown>{speaker.bio}</Markdown>
                </Stack>
              </Stack>
            </Card>
          </Fragment>
        )
      })}
    </Box>
  )
}