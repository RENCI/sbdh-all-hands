import { useState, useEffect } from 'react';
import { Tab, Header, Item, Divider, Loader } from 'semantic-ui-react'

import itemLogo from './images/logos/SBDH-logo-wordless.png'
import breakLogo from './images/CoffeeBreak_SBDH_V1-03.png'
import agendaData from "../content/event-agenda.json"

const query = `{
    eventCollection (order:start_ASC) {
    items {
      title
      desc
      isBreak
      start
      end
      speakersCollection {
        items {
          speakerName
        }
      }
    }
    }
  }`

const agenda = [...agendaData]
const wed = agenda.filter(event => event.date === "7-28")
const thurs = agenda.filter(event => event.date === "7-29")
const fri = agenda.filter(event => event.date === "7-30")

const panes = [
    { menuItem: 'All', render: () => (
        <Tab.Pane className="agenda-pane">
            {/* Wed. schedule */}
            <Divider horizontal section>
                <Header content="Wednesday, July 28: LEARN" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {wed.map(wedEvent => (
                    <Item key={wedEvent.sessionId} className={wedEvent.isBreak === 1 ? "agenda-highlight" : ""}>
                        <Item.Image size="tiny" src={wedEvent.isBreak === 1 ? breakLogo : itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{wedEvent.title}</Item.Header>
                            <Item.Meta>{wedEvent.start} - {wedEvent.end}</Item.Meta>
                            {wedEvent.speaker !== "" ? <Item.Meta>Speaker: {wedEvent.speaker}</Item.Meta> : null}
                            <Item.Description>{wedEvent.desc !== "" ? wedEvent.desc : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
            {/* Thurs. schedule */}
            <Divider horizontal section>
                <Header content="Thursday, July 29: ENGAGE" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {thurs.map(thursEvent => (
                    <Item key={thursEvent.sessionId} className={thursEvent.isBreak === 1 ? "agenda-highlight" : ""}>
                        <Item.Image size="tiny" src={thursEvent.isBreak === 1 ? breakLogo : itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{thursEvent.title}</Item.Header>
                            <Item.Meta>{thursEvent.start} - {thursEvent.end}</Item.Meta>
                            <Item.Meta>{thursEvent.speaker !== "" ? `Speaker: ${thursEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{thursEvent.desc !== "" ? `Description: ${thursEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
            {/* Fri. schedule */}
            <Divider horizontal section>
                <Header content="Friday, July 30" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {fri.map(friEvent => (
                    <Item key={friEvent.sessionId} className={friEvent.isBreak === 1 ? "agenda-highlight" : ""}>
                        <Item.Image size="tiny" src={friEvent.isBreak === 1 ? breakLogo : itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{friEvent.title}</Item.Header>
                            <Item.Meta>{friEvent.start} - {friEvent.end}</Item.Meta>
                            <Item.Meta>{friEvent.speaker !== "" ? `Speaker: ${friEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{friEvent.desc !== "" ? `Description: ${friEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane> 
    )},
    { menuItem: `July 28 (Wed.)`, render: () => (
        <Tab.Pane className="agenda-pane">
            <Divider horizontal section>
                <Header content="Wednesday, July 28: LEARN" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {wed.map(wedEvent => (
                    <Item key={wedEvent.sessionId} className={wedEvent.isBreak === 1 ? "agenda-highlight" : ""}>
                        <Item.Image size="tiny" src={wedEvent.isBreak === 1 ? breakLogo : itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{wedEvent.title}</Item.Header>
                            <Item.Meta>{wedEvent.start} - {wedEvent.end}</Item.Meta>
                            <Item.Meta>{wedEvent.speaker !== "" ? `Speaker: ${wedEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{wedEvent.desc !== "" ? `Description: ${wedEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane>
    )},
    { menuItem: 'July 29 (Thurs.)', render: () => (
        <Tab.Pane className="agenda-pane">
            <Divider horizontal section>
                <Header content="Thursday, July 29: ENGAGE" className="agenda-header" />
            </Divider>

            <Item.Group divided>
                {thurs.map(thursEvent => (
                    <Item key={thursEvent.sessionId} className={thursEvent.isBreak === 1 ? "agenda-highlight" : ""}>
                        <Item.Image size="tiny" src={thursEvent.isBreak === 1 ? breakLogo : itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{thursEvent.title}</Item.Header>
                            <Item.Meta>{thursEvent.start} - {thursEvent.end}</Item.Meta>
                            <Item.Meta>{thursEvent.speaker !== "" ? `Speaker: ${thursEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{thursEvent.desc !== "" ? `Description: ${thursEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane>
    ) },
    { menuItem: 'July 30 (Fri.)', render: () => (
        <Tab.Pane className="agenda-pane">
            <Divider horizontal section>
                <Header content="Friday, July 30" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {fri.map(friEvent => (
                    <Item key={friEvent.sessionId} className={friEvent.isBreak === 1 ? "agenda-highlight" : ""}>
                        <Item.Image size="tiny" src={friEvent.isBreak === 1 ? breakLogo : itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{friEvent.title}</Item.Header>
                            <Item.Meta>{friEvent.start} - {friEvent.end}</Item.Meta>
                            <Item.Meta>{friEvent.speaker !== "" ? `Speaker: ${friEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{friEvent.desc !== "" ? `Description: ${friEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane>
    )}
]

function Agenda() {
    // date stuff for default active tab to be the one for the corresponding day during the event window
    const [defaultTab, setDefaultTab] = useState()
    const [agendaContent, setAgendaContent] = useState()

    useEffect(() => {
        const date = new Date()
        let today = `${date.getMonth()+1}-${date.getDate()}`
        // let today = "7-30"
        console.log("today's date", today)

        // ES6 object literal which acts like a switch case statement
        const tab = today => ({
            "7-28": 1,
            "7-29": 2,
            "7-30": 3
        })[today]
        
        setDefaultTab(tab(today) || 0)
    }, [])

    console.log("defaultTab Index:", defaultTab)

    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
                Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_CONTENT}`
            },
            body: JSON.stringify({query})
        })
        .then( res => res.json())
        .then(({data, err}) => {
            if (err) {
                console.error(err)
            }
            setAgendaContent(data.eventCollection.items)
            console.log("all events:",data.eventCollection.items)
        })
    }, [])

    
    if(!agendaContent) {
        <div className="page-contain">
            <Header as='h1' className="page-title" textAlign='center' content="Event Agenda" subheader="Join us for three days of data science content and connection. The event agenda sessions are highlighted below and are subject to change." />
            <Loader inverted indeterminate size="big" content='Loading' />
       </div>
    }


    return (
        <div className='page-contain'>
            <Header as='h1' className="page-title" textAlign='center' content="Event Agenda" subheader="Join us for three days of data science content and connection. The event agenda sessions are highlighted below and are subject to change." />
            {defaultTab !== undefined && <Tab panes={panes} defaultActiveIndex={defaultTab} />}
        </div>
    )
}


export default Agenda;