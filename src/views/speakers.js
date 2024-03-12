import speakers from '../content/speakers/index.yaml'
import { Box, Card, Typography, Stack } from '@mui/joy'
import { Markdown } from '../components/markdown'

export const SpeakersView = () => {
  return (
    <Box>
      <Typography level="h2">Speakers</Typography>
      {speakers.map((speaker)=> {
        return (
          <Card key={speaker.name} m={2}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
            >
              <Box
              sx={{minWidth: '200px'}}
              >
                <img 
                src={speaker.photo}
                width="100%"
              />
              </Box>
              
              <Stack direction="column">
                <Typography level="h3">{speaker.name}</Typography>
                <Markdown>{speaker.bio}</Markdown>
              </Stack>
            </Stack>
          </Card>
        )
      })}
    </Box>
  )
}