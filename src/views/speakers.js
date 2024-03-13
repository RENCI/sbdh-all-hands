import { Fragment } from 'react'
import { speakers } from '../content/speakers/index.js'
import { Box, Card, Typography, Stack, AspectRatio, Divider } from '@mui/joy'
import { Markdown } from '../components/markdown'

export const SpeakersView = () => {
  return (
    <Box>
      <Typography level="h2">Speakers</Typography>
      {speakers.map((speaker)=> {
        return (
          <Fragment key={speaker.name}>
          <Card key={speaker.name} m={2} size="lg" variant="plain">
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
                <Typography level="h3" sx={{marginTop: 0}}>{speaker.name}</Typography>
                <Markdown>{speaker.bio}</Markdown>
              </Stack>
            </Stack>
          </Card>
          <Divider/>
          </Fragment>
        )
      })}
    </Box>
  )
}