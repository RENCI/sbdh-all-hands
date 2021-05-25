//import {useState, useEffect} from "react";
import { Image, Header, Grid, Button, Item, List, Icon } from "semantic-ui-react";
import { Link } from '@reach/router'

import saveDate from './images/Save_The_Date.png'
import placeholder from './images/placeholder.png'

const shortDesc = {
    main: `Join big data influencers from industry, academia, nonprofits, and government to discuss some of the most important topics in data science today:`,
    // list: () => {
    //     const bullets = ["Building Data Science Education and Workforce","Promoting Data Sharing and Cyberinfrastructure","Addressing Societal Challenges","Connecting the Data Community"]
    //     const list = <List></List>

    //         bullets.forEach(bullet => {
    //             let li = <List.Item icon='caret right' content={bullet} />
    //             list.appendChild(li)
    //         })
    //   return list  
    // },
    benefits: `The South Big Data Hub has spent the last five years connecting with people and developing programs to move data science forward in remarkable ways, and we can’t wait to share what we’ve learned with you!`
};

const blurbs = {
    conversation: `Conference tracks are each led by a game changer within their area of expertise. These leaders are building sessions to spark conversations and create collaborative opportunities. Don’t miss your chance to be in the room where things happen!`,
    purpose: `Let’s do this together. At the South Big Data Hub, we know we make the biggest impact when we work with our neighbors and weave together our strengths. Join us to learn how your work can shine brighter as part of our collective efforts. 
    We look forward to sharing what’s new with our members while identifying what’s needed to continue to forge a sustainable path forward.`,
    whySH: `We’re eager to share what we’ve discovered through five years of community building with experts across the nation. We want to help your organization accomplish its goals as well. 
    Our sessions are designed to inspire and continue discovering the community we need to tackle the data science challenges of the future.`
};

function Home() {
    //const [page, setPage] = useState();
    
    // useEffect(() => {
    //   const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/dev/entries/675icwBOH7n4kdrJTLeiT?access_token=${process.env.CONTENTFUL_CONTENT}`

    //   const fetchData = async () => {
    //     try {
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         console.log(json);
    //         setPage(json.fields)
    //     } catch (error) {
    //     console.log("error", error);
    //     }
    // };

    // fetchData()
    // }, []);

    // if (!page) {
    //     return (
    //         <Dimmer active inverted>
    //             <Loader inverted content='Loading' />
    //         </Dimmer>
    //     )
    // }

    return  (
        <div className='pageContain'>
            {/* <Image src={page.headerImage.url} alt="main-image" />
            <p>{page.pageTitle}</p>
            <div>{page.description}</div> */}
            <Grid divided='vertically'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={saveDate} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as='h1'>
                            <Header.Content>
                                Bringing People and Data Together
                                <Header.Subheader>{shortDesc.main}</Header.Subheader>
                                <Header.Subheader>
                                    {/* {shortDesc.list} */}
                                    <List style={{ paddingTop: "1rem", marginLeft: "1.5rem"}}>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>Building Data Science Education and Workforce</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>Promoting Data Sharing and Cyberinfrastructure</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>Addressing Societal Challenges</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>Connecting the Data Community</List.Content>
                                        </List.Item>
                                    </List>
                                </Header.Subheader>
                            </Header.Content>
                        </Header>
                        <Button color='orange' content='REGISTER NOW' as={Link} to='/register' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Header as='h2' content='Leverage the expertise of data science professionals throughout the American South' subheader={shortDesc.benefits} />
                    <Item.Group divided>
                        <Item>
                            <Item.Image src={placeholder} />
                            <Item.Content header='Focused Conversations On Important Data Science Topics' description={blurbs.conversation} />
                        </Item>
                        <Item>
                            <Item.Image src={placeholder} />
                            <Item.Content header='Our Purpose' description={blurbs.purpose} />
                        </Item>
                        <Item>
                            <Item.Image src={placeholder} />
                            <Item.Content header='How the South Big Data Hub Can Help' description={blurbs.whySH} />
                        </Item>
                    </Item.Group>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Home;