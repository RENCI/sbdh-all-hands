import { Fragment } from 'react'
import { speakers } from '../content/speakers/index.js'
import { Box, Card, Typography, Stack, AspectRatio, Divider } from '@mui/joy'
import { Markdown } from '../components/markdown'

export const SpeakersView = () => {
  return (
    <Box>
      <Typography level="h2" sx={{marginBottom: '0'}}>Speakers</Typography>
      {speakers.map((speaker)=> {
        return (
          <Fragment key={speaker.name}>
            <Box id={speaker.slug} sx={{paddingBottom: '3rem'}}></Box>
            <Card variant="soft" sx={{backgroundColor:'#ffffff00'}}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
              >
                <Box>
                  <AspectRatio ratio={1}  sx={{ width: 300 }}>
                    <img 
                      src={speaker.image}
                      width="100%"
                    />
                  </AspectRatio>
                </Box>
                <Stack direction="column">
                  <Typography level="h3" sx={{marginTop: 0}} >{speaker.name}</Typography>
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