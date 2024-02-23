import content from '../content/agenda.md'
import { Box, Stack, Button } from '@mui/joy'
import { Link } from '../components/link'
import { Markdown } from '../components/markdown'

export const AgendaView = () => {
  return (
    <Box>
      <Markdown>{ content }</Markdown>
    </Box>
  )
}