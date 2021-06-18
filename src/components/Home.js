// import {useState, useEffect} from "react";
import { Image, Header, Grid, Button, Item, List, Icon } from "semantic-ui-react";
import { Link } from '@reach/router'

// import saveDate from './images/home/Save_The_Date.png';
import dateBanner from './images/home/date_banner.png'
import expertsImg from './images/home/expert-3_3_1200x950.jpg';
import purposeImg from './images/home/purpose-2.png';


const shortDesc = {
    main: `Join big data influencers from industry, academia, nonprofits, and government to discuss some of the most important topics in data science today:`,
    benefits: `The South Big Data Hub has spent the last five years connecting with people and developing programs to move data science forward in remarkable ways, and we can’t wait to share what we’ve learned with you!`
};

const blurbs = {
    conversation: `Conference tracks are each led by a game changer within their area of expertise. These leaders are building sessions to spark conversations and create collaborative opportunities. Don’t miss your chance to be in the room where things happen!`,
    purpose: `Let’s do this together. At the South Big Data Hub, we know we make the biggest impact when we work with our neighbors and weave together our strengths.`,
    purpose2: `At this event, you’ll learn about advances our current members have made toward tackling the data science challenges of the future. 
    You’ll also have the chance to share what you’ve done and connect with game changers in your areas of interest.`
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


    return  (
        <div className='page-contain'>
            <Grid divided='vertically' stackable style={{ padding: "1rem" }} centered>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Image src={dateBanner} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as='h1'>
                            <Header.Content>
                                Bringing People and Data Together
                                <Header.Subheader className="sub-head">{shortDesc.main}</Header.Subheader>
                                <Header.Subheader>
                                    {/* {shortDesc.list} */}
                                    <List className='home-list'>
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

                {/* Boxes Area start */}

                {/* Box 1 */}
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as='h2' textAlign="left">
                            <Header.Content>
                                Leverage the expertise of data science professionals throughout the Nation
                                <Header.Subheader className="sub-head">{shortDesc.benefits}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    
                    <Grid.Column width={7}>
                        <Image src={expertsImg} className="home-goals" fluid/>
                    </Grid.Column>
                    <Grid.Column width={9} textAlign="left">
                        <Item>
                            <Item.Content className="home-goals" >
                                <Item.Header as="h3">Focused Conversations On Important Data Science Topics</Item.Header>
                                <Item.Description className="sub-head">{blurbs.conversation}</Item.Description>
                                <Item.Extra>
                                    <Item.Description>Focus your time in one or more of the following tracks:</Item.Description>
                                    <List className='home-list'>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>
                                                Data Science and Education Workforce, Led by <a href="https://www.linkedin.com/in/afiimani/" rel="noopener noreferrer" target="_blank">Dr. Renata Rawlings-Goss</a> and <a href="https://www.linkedin.com/in/melvingreer/" rel="noopener noreferrer" target="_blank">Dr. Melvin Greer</a>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>
                                                Data Sharing and Cyberinfrastructure, Led by <a href="https://www.linkedin.com/in/niall-gaffney-ab5b604/" rel="noopener noreferrer" target="_blank">Niall Gaffney</a>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>
                                                Team Science, Led by <a href="https://www.linkedin.com/in/shannonmckeen/" rel="noopener noreferrer" target="_blank">Shannon McKeen</a> and <a href="https://www.linkedin.com/in/stephen-fiore-8087305/" rel="noopener noreferrer" target="_blank">Dr. Steve Fiore</a>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>
                                                Smart and Resilient Cities, Led by <a href="https://www.linkedin.com/in/madhav-marathe-1426826/" rel="noopener noreferrer" target="_blank">Dr. Madhav Marathe</a> and <a href="https://www.linkedin.com/in/samarth-swarup-20b2767/" rel="noopener noreferrer" target="_blank">Samarth Swarup</a>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>
                                                Health Disparities, Led by <a href="https://www.linkedin.com/in/patricksullivan5/" rel="noopener noreferrer" target="_blank">Dr. Patrick Sullivan</a>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='caret right' style={{color: '#f37521'}} />
                                            <List.Content>
                                                Materials and Advanced Manufacturing, Led by <a href="https://www.linkedin.com/in/zacharytrautt/" rel="noopener noreferrer" target="_blank">Dr. Zachary Trautt</a> and <a href="https://www.linkedin.com/in/eva-campo-8901343/" rel="noopener noreferrer" target="_blank">Dr. Eva Campo</a>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Grid.Column>
                </Grid.Row>

                {/* Box 2 */}
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Image src={purposeImg} className="home-goals" fluid />
                    </Grid.Column>
                    <Grid.Column width={9} textAlign="left">
                        <Item>
                            <Item.Content className="home-goals">
                                <Item.Header as="h3">How the South Big Data Hub Can Help</Item.Header>
                                <Item.Description>
                                    <p>{blurbs.purpose}</p>
                                    <p>{blurbs.purpose2}</p>
                                </Item.Description>
                            </Item.Content>
                        </Item>

                    </Grid.Column>
                </Grid.Row>
                {/* End of Boxes Area */}
            </Grid>
        </div>
    );
}

export default Home;