import { Tab, Header, Item } from 'semantic-ui-react'

import itemLogo from './images/logos/SBDH-logo-wordless.png'
import agendaData from "../content/event-agenda.json"

const agenda = [...agendaData]

const wed = agenda.filter(event => event.date === "July 28")

const panes = [
    { menuItem: 'All', pane: () => (
        <Tab.Pane>
            <Item.Group divided>
                {agenda.map(event => (
                    <Item key={event.eventId}>
                        <Item.Image size="tiny" src={itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{event.title}</Item.Header>
                            <Item.Meta>When: {event.date}</Item.Meta>
                            <Item.Meta>Time: {event.start} - {event.end}</Item.Meta>
                            <Item.Description>{event.desc !== "" ? `Description: ${event.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane> 
    )},
    { menuItem: `July 28 (Wed.)`, pane: () => (
        <Tab.Pane>
            <Item.Group divided>
                {wed.map(event => (
                    <Item key={event.eventId}>
                        <Item.Image size="tiny" src={itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{event.title}</Item.Header>
                            <Item.Meta>When: {event.date}</Item.Meta>
                            <Item.Meta>Time: {event.start} - {event.end}</Item.Meta>
                            <Item.Description>{event.desc !== "" ? `Description: ${event.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane>
    )},
    { menuItem: 'July 29 (Thurs.)', pane: 'Tab 3 Content' },
    { menuItem: 'July 30 (Fri.)', pane: 'Tab 4 Content' }
]

const Agenda = () => (
    <div className='page-contain'>
        <Header as='h1' className="page-title" textAlign='center' content="Event Agenda" subheader="Info about how to attend events. Maybe Airmeet link? Explanation of tracks? Note that some events on different tracks are happening during the same time blocks on a given day." />
        <Tab panes={panes} renderActiveOnly={false} />
    </div>
)

export default Agenda;