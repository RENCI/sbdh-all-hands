import content from '../content/agenda.md'
import { Box, Stack, Button, Tabs, TabList, TabPanel, Table, Typography } from '@mui/joy'
import Tab, { tabClasses } from '@mui/joy/Tab';

import { Link } from '../components/link'
import { Markdown } from '../components/markdown'

export const AgendaView = () => {
  return (
    <Box>
      <Markdown>{ content }</Markdown>
      <Typography level="h2">Agenda</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', margin: '1.2rem 0'}}>
        <Tabs aria-label="Agenda Tabs" defaultValue={0}
          sx={{
            width: 800,
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
          <TabPanel value={0}>
            <Table>
              <tbody>
                <tr>
                  <td><Typography>9:00 - 1:00</Typography></td>
                  <td><Typography>Partnerships for Health Equity Focused Session</Typography></td>
                </tr>
                <tr>
                  <td><Typography>1:00 - 2:00</Typography></td>
                  <td><Typography>Lunch Presentation</Typography></td>
                </tr>
                <tr>
                  <td><Typography>2:00 - 6:00</Typography></td>
                  <td><Typography>Partnerships for Smart Cities + the Environment Focused Session</Typography></td>
                </tr>
                <tr>
                  <td><Typography>6:00 - 8:00</Typography></td>
                  <td><Typography>Networking Reception</Typography></td>
                </tr>
              </tbody>
            </Table>
          </TabPanel>
          <TabPanel value={1}>
            <Table>
              <tbody>
                <tr>
                  <td><Typography>9:00 - 1:00</Typography></td>
                  <td><Typography>Partnerships for Clean Energy and Manufacturing Focused Session</Typography></td>
                </tr>
                <tr>
                  <td><Typography>1:00 - 2:00</Typography></td>
                  <td><Typography>Lunch Presentation</Typography></td>
                </tr>
                <tr>
                  <td><Typography>2:00 - 6:00</Typography></td>
                  <td><Typography>Partnerships for HBCU Data Science (Joint session with the HBCU Data Science Consortium)</Typography></td>
                </tr>
                <tr>
                  <td><Typography>6:00 - 8:00</Typography></td>
                  <td><Typography>HBCU Data Science Consortium Co-located event begins. Note that this is a separate event with separate registration.</Typography></td>
                </tr>
              </tbody>
            </Table>
          </TabPanel>
          <TabPanel value={2} sx={{minHeight: '200px'}}>
            <Typography>HBCU Data Science Consortium Co-located event continues. Note that this is a separate event with separate registration. </Typography>
          </TabPanel>
        </Tabs>  
      </Box>
      
    </Box>
  )
}