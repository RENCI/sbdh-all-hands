import { useState, useEffect, useRef } from 'react';
import { Tab, Header, Item, Divider, Loader } from 'semantic-ui-react'

import itemLogo from './images/logos/SBDH-logo-wordless.png'
import breakLogo from './images/CoffeeBreak_SBDH_V1-03.png'

const query = `{
    eventCollection (order: [date_ASC, start_ASC]) {
    items {
      date
      title
      start
      end
      desc
      isBreak
      sys {id}
      speakersCollection {
        items {
          speakerName
        }
      }
    }
  }
}`


function Agenda() {
    // date stuff for default active tab to be the one for the corresponding day during the event window
    const [defaultTab, setDefaultTab] = useState()
    // agenda variables
    const [agendaContent, setAgendaContent] = useState()
    let wed = useRef()
    let thurs = useRef()
    let fri = useRef()

    const panes = [
        { menuItem: 'All', render: () => (
            <Tab.Pane className="agenda-pane">
                {/* Wed. schedule */}
                <Divider horizontal section>
                    <Header content="Wednesday, July 28: LEARN" className="agenda-header" />
                </Divider>
                <Item.Group divided>
                    {wed.current && wed.current.map(wedEvent => (
                        <Item key={wedEvent.sys.id} className={wedEvent.isBreak === true ? "agenda-highlight" : ""}>
                            <Item.Image size="tiny" src={wedEvent.isBreak === true ? breakLogo : itemLogo} />
                            <Item.Content className="agenda-content">
                                <Item.Header>{wedEvent.title}</Item.Header>
                                <Item.Meta>{wedEvent.start} - {wedEvent.end}</Item.Meta>
                                {
                                    (wedEvent.speakersCollection.items.length > 1) 
                                    ? (<Item.Meta>
                                        Speaker(s): {wedEvent.speakersCollection.items.map(speaker => {
                                            return `${speaker.speakerName}, `
                                        })}
                                        </Item.Meta>)        
                                    : (wedEvent.speakersCollection.items.length === 1) 
                                    ? <Item.Meta>Speaker(s): {wedEvent.speakersCollection.items[0].speakerName}</Item.Meta>
                                    : null
                                }
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
                    {thurs.current && thurs.current.map(thursEvent => (
                            <Item key={thursEvent.sys.id} className={thursEvent.isBreak === true ? "agenda-highlight" : ""}>
                                <Item.Image size="tiny" src={thursEvent.isBreak === true ? breakLogo : itemLogo} />
                                <Item.Content className="agenda-content">
                                    <Item.Header>{thursEvent.title}</Item.Header>
                                    <Item.Meta>{thursEvent.start} - {thursEvent.end}</Item.Meta>
                                    {
                                        (thursEvent.speakersCollection.items.length > 1) 
                                        ? (<Item.Meta>
                                            Speaker(s): {thursEvent.speakersCollection.items.map(speaker => {
                                                return `${speaker.speakerName}, `
                                            })}
                                            </Item.Meta>)        
                                        : (thursEvent.speakersCollection.items.length === 1) 
                                        ? <Item.Meta>Speaker(s): {thursEvent.speakersCollection.items[0].speakerName}</Item.Meta>
                                        : null
                                    }
                                    <Item.Description>{thursEvent.desc !== "" ? thursEvent.desc : null}</Item.Description>
                                </Item.Content>
                            </Item>
                    ))}
                </Item.Group>
                {/* Fri. schedule */}
                <Divider horizontal section>
                    <Header content="Friday, July 30" className="agenda-header" />
                </Divider>
                <Item.Group divided>
                    {fri.current && fri.current.map(friEvent => (
                        <Item key={friEvent.sys.id} className={friEvent.isBreak === true ? "agenda-highlight" : ""}>
                            <Item.Image size="tiny" src={friEvent.isBreak === true ? breakLogo : itemLogo} />
                            <Item.Content className="agenda-content">
                                <Item.Header>{friEvent.title}</Item.Header>
                                <Item.Meta>{friEvent.start} - {friEvent.end}</Item.Meta>
                                {
                                    (friEvent.speakersCollection.items.length > 1) 
                                    ? (<Item.Meta>
                                        Speaker(s): {friEvent.speakersCollection.items.map(speaker => {
                                            return `${speaker.speakerName}, `
                                        })}
                                        </Item.Meta>)        
                                    : (friEvent.speakersCollection.items.length === 1) 
                                    ? <Item.Meta>Speaker(s): {friEvent.speakersCollection.items[0].speakerName}</Item.Meta>
                                    : null
                                }
                                <Item.Description>{friEvent.desc !== "" ? friEvent.desc : null}</Item.Description>
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
                    {wed.current.map(wedEvent => (
                        <Item key={wedEvent.sys.id} className={wedEvent.isBreak === true ? "agenda-highlight" : ""}>
                            <Item.Image size="tiny" src={wedEvent.isBreak === true ? breakLogo : itemLogo} />
                            <Item.Content className="agenda-content">
                                <Item.Header>{wedEvent.title}</Item.Header>
                                <Item.Meta>{wedEvent.start} - {wedEvent.end}</Item.Meta>
                                {
                                    (wedEvent.speakersCollection.items.length > 1) 
                                    ? (<Item.Meta>
                                        Speaker(s): {wedEvent.speakersCollection.items.map(speaker => {
                                            return `${speaker.speakerName}, `
                                        })}
                                        </Item.Meta>)        
                                    : (wedEvent.speakersCollection.items.length === 1) 
                                    ? <Item.Meta>{`Speaker(s): ${wedEvent.speakersCollection.items[0].speakerName}`}</Item.Meta>
                                    : null
                                }
                                <Item.Description>{wedEvent.desc !== "" ? wedEvent.desc : null}</Item.Description>
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
                    {thurs.current.map(thursEvent => (
                        <Item key={thursEvent.sys.id} className={thursEvent.isBreak === true ? "agenda-highlight" : ""}>
                            <Item.Image size="tiny" src={thursEvent.isBreak === true ? breakLogo : itemLogo} />
                            <Item.Content className="agenda-content">
                                <Item.Header>{thursEvent.title}</Item.Header>
                                <Item.Meta>{thursEvent.start} - {thursEvent.end}</Item.Meta>
                                {
                                    (thursEvent.speakersCollection.items.length > 1) 
                                    ? (<Item.Meta>
                                        Speaker(s): {thursEvent.speakersCollection.items.map(speaker => {
                                            return `${speaker.speakerName}, `
                                        })}
                                        </Item.Meta>)        
                                    : (thursEvent.speakersCollection.items.length === 1) 
                                    ? <Item.Meta>Speaker(s): {thursEvent.speakersCollection.items[0].speakerName}</Item.Meta>
                                    : null
                                }
                                <Item.Description>{thursEvent.desc !== "" ? thursEvent.desc : null}</Item.Description>
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
                    {fri.current.map(friEvent => (
                        <Item key={friEvent.sys.id} className={friEvent.isBreak === true ? "agenda-highlight" : ""}>
                            <Item.Image size="tiny" src={friEvent.isBreak === true ? breakLogo : itemLogo} />
                            <Item.Content className="agenda-content">
                                <Item.Header>{friEvent.title}</Item.Header>
                                <Item.Meta>{friEvent.start} - {friEvent.end}</Item.Meta>
                                {
                                    (friEvent.speakersCollection.items.length > 1) 
                                    ? (<Item.Meta>
                                        Speaker(s): {friEvent.speakersCollection.items.map(speaker => {
                                            return `${speaker.speakerName}, `
                                        })}
                                        </Item.Meta>)        
                                    : (friEvent.speakersCollection.items.length === 1) 
                                    ? <Item.Meta>Speaker(s): {friEvent.speakersCollection.items[0].speakerName}</Item.Meta>
                                    : null
                                }
                                <Item.Description>{friEvent.desc !== "" ? friEvent.desc : null}</Item.Description>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Tab.Pane>
        )}
    ]
    
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
            
            wed.current = agendaContent && agendaContent.filter(event => event.date.includes("2021-07-28"))
            thurs.current = agendaContent && agendaContent.filter(event => event.date.includes("2021-07-29"))
            fri.current = agendaContent && agendaContent.filter(event => event.date.includes("2021-07-30"))

            console.log("all events:",data.eventCollection.items)
            console.log("Wed data", wed)
        })
        if(!wed.current || wed.current === undefined) {console.log("No Wed data")}
    })


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