import content from '../content/agenda/index.md'
import day1agenda from '../content/agenda/day1.md'
import day2agenda from '../content/agenda/day2.md'
import day3agenda from '../content/agenda/day3.md'
import { Box, Tabs, TabList, Tab, TabPanel, Typography } from '@mui/joy'
import { Markdown } from '../components/markdown'

export const AgendaView = () => {
  return (
    <Box>
      <Markdown>{ content }</Markdown>
      <Typography level="h2">Agenda</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', margin: '1.2rem 0'}}>
        <Tabs aria-label="Agenda Tabs" defaultValue={0}
          sx={{
            width: '100%',
            borderRadius: 'lg',
            boxShadow: 'sm',
            overflow: 'auto',
          }}
        >
          <TabList tabFlex={1} sx={{
            textAlign: 'center'
          }}>
            <Tab>DAY 1: Thursday, April 18</Tab>
            <Tab>DAY 2: Friday, April 19</Tab>
            <Tab>Saturday, April 20</Tab>
          </TabList>
          <TabPanel value={0} sx={{backgroundColor: '#FBFCFE'}}>
            <Markdown>{day1agenda}</Markdown>
          </TabPanel>
          <TabPanel value={1} sx={{backgroundColor: '#FBFCFE'}}>
            <Markdown>{day2agenda}</Markdown>
          </TabPanel>
          <TabPanel value={2} sx={{backgroundColor: '#FBFCFE', minHeight: '230px'}}>
            <Markdown>{day3agenda}</Markdown>
          </TabPanel>
        </Tabs>  
      </Box>
      
    </Box>
  )
}