import {useState, useEffect} from "react";
import { Image, Header, Grid, Button, Item, List, Icon } from "semantic-ui-react";
import { Link } from '@reach/router'

import dateBanner from './images/home/date_banner.png'
// import expertsImg from './images/home/expert-3_3_1200x950.jpg';
import purposeImg from './images/home/purpose-2.png';


const shortDesc = {
    main: `Join big data influencers from industry, academia, nonprofits, and government to discuss some of the most important topics in data science today:`,
    benefits: `The South Big Data Hub has spent the last five years connecting with people and developing programs to move data science forward in remarkable ways, and we can’t wait to share what we’ve learned with you!`
};

const blurbs = {
    conversation: `Conference tracks align with the priority areas of the South Big Data Hub and are each led by a game changer within their area of expertise. These leaders are building sessions to spark conversations and create collaborative opportunities. Don’t miss your chance to be in the room where things happen!`,
    purpose: `Let’s do this together. At the South Big Data Hub, we know we make the biggest impact when we work with our neighbors and weave together our strengths.`,
    purpose2: `At this event, you’ll learn about advances our current members have made toward tackling the data science challenges of the future. 
    You’ll also have the chance to share what you’ve done and connect with game changers in your areas of interest.`
};

const query = `
{
    speakerCollection (order: speakerId_ASC) {    
      items{
        slug
        sys {id}
        speakerId
        speakerName
        speakerPic {
          url
        }
      }
    }
}`


function Home() {
    const [speakerContent, setSpeakerContent] = useState();

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

            setSpeakerContent(data.speakerCollection.items)
            console.log(data.speakerCollection.items)
        })
    }, [])

    if (!speakerContent) {
        return (
            <div className="page-contain">
                <Header as='h1' textAlign='center'>
                    <Header.Content className="page-title">Speakers</Header.Content>
                    <Header.Subheader className="sub-head">All Hands sessions will be led by experts in their fields. These leaders are building sessions to spark conversations and create collaborative opportunities. Learn more about each speaker below by clicking on their card.</Header.Subheader>
                    <Header.Subheader className="sub-head"><Icon disabled name="star" color="orange"/>Track Captain</Header.Subheader>
                </Header>
            </div>
        )
    }

    return (
      <div className="page-contain">
        <Grid
          divided="vertically"
          stackable
          style={{ padding: "1rem" }}
          centered
        >
          <Grid.Row>
            <Grid.Column width={8}>
              <Image src={dateBanner} fluid />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h1">
                <Header.Content>
                  Bringing People and Data Together
                  <Header.Subheader className="sub-head">
                    {shortDesc.main}
                  </Header.Subheader>
                  <Header.Subheader className="sub-head">
                    {/* {shortDesc.list} */}
                    <List className="home-list">
                      <List.Item>
                        <Icon name="caret right" style={{ color: "#f37521" }} />
                        <List.Content>
                          Building Data Science Education and Workforce
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Icon name="caret right" style={{ color: "#f37521" }} />
                        <List.Content>
                          Promoting Data Sharing and Cyberinfrastructure
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Icon name="caret right" style={{ color: "#f37521" }} />
                        <List.Content>
                          Addressing Societal Challenges
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Icon name="caret right" style={{ color: "#f37521" }} />
                        <List.Content>
                          Connecting the Data Community
                        </List.Content>
                      </List.Item>
                    </List>
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <Button
                color="orange"
                content="REGISTER NOW"
                as={Link}
                to="/register"
              />
            </Grid.Column>
          </Grid.Row>

          {/* Boxes Area start */}

          {/* Box 1 */}
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h2" textAlign="left">
                <Header.Content>
                  Leverage the expertise of data science professionals
                  throughout the Nation
                  <Header.Subheader className="sub-head">
                    {shortDesc.benefits}
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>

            <Grid.Column width={16} textAlign="left">
              <Header as="h3" textAlign="left">
                <Header.Content>
                  Focused Conversations On Important Data Science Topics
                  <Header.Subheader className="sub-head">
                    {blurbs.conversation}
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={8} stackable textAlign="left">
            <List className="home-list" textAlign="left">
              <List.Item>
                <Icon name="caret right" style={{ color: "#f37521" }} />
                <List.Content>
                  <List.Header as="h3">
                    Data Science Education and Workforce
                  </List.Header>
                  <Image.Group size="small" style={{ marginTop: "0.8rem" }}>
                    <Image
                      rounded
                      src={speakerContent[0].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[0].slug}`}
                      key={`speakerId-${speakerContent[0].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `Dr. ${speakerContent[0].speakerName}`,
                      }}
                    />
                    <Image
                      rounded
                      src={speakerContent[6].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[6].slug}`}
                      key={`speakerId-${speakerContent[6].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `Dr. ${speakerContent[6].speakerName}`,
                      }}
                    />
                  </Image.Group>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="caret right" style={{ color: "#f37521" }} />
                <List.Content>
                  <List.Header as="h3">
                    Data Sharing and Cyberinfrastructure
                  </List.Header>
                  <Image.Group size="small" style={{ marginTop: "0.8rem" }}>
                    <Image
                      rounded
                      src={speakerContent[5].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[5].slug}`}
                      key={`speakerId-${speakerContent[5].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `${speakerContent[5].speakerName}`,
                      }}
                    />
                  </Image.Group>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="caret right" style={{ color: "#f37521" }} />
                <List.Content>
                  <List.Header as="h3">Team Science</List.Header>
                  <Image.Group size="small" style={{ marginTop: "0.8rem" }}>
                    <Image
                      rounded
                      src={speakerContent[1].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[1].slug}`}
                      key={`speakerId-${speakerContent[1].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `${speakerContent[1].speakerName}`,
                      }}
                    />
                    <Image
                      rounded
                      src={speakerContent[4].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[4].slug}`}
                      key={`speakerId-${speakerContent[4].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `Dr. ${speakerContent[4].speakerName}`,
                      }}
                    />
                  </Image.Group>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={8} stackable>
            <List>
              <List.Item>
                <Icon name="caret right" style={{ color: "#f37521" }} />
                <List.Content>
                  <List.Header as="h3">Smart and Resilient Cities</List.Header>
                  <Image.Group size="small" style={{ marginTop: "0.8rem" }}>
                    <Image
                      rounded
                      src={speakerContent[2].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[2].slug}`}
                      key={`speakerId-${speakerContent[2].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `Dr. ${speakerContent[2].speakerName}`,
                      }}
                    />
                    <Image
                      rounded
                      src={speakerContent[8].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[8].slug}`}
                      key={`speakerId-${speakerContent[8].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `${speakerContent[8].speakerName}`,
                      }}
                    />
                  </Image.Group>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="caret right" style={{ color: "#f37521" }} />
                <List.Content>
                  <List.Header as="h3">Health Disparities</List.Header>
                  <Image.Group size="small" style={{ marginTop: "0.8rem" }}>
                    <Image
                      rounded
                      src={speakerContent[7].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[7].slug}`}
                      key={`speakerId-${speakerContent[7].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `Dr. ${speakerContent[7].speakerName}`,
                      }}
                    />
                  </Image.Group>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="caret right" style={{ color: "#f37521" }} />
                <List.Content>
                  <List.Header as="h3">
                    Materials and Advanced Manufacturing
                  </List.Header>
                  <Image.Group size="small" style={{ marginTop: "0.8rem" }}>
                    <Image
                      rounded
                      src={speakerContent[9].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[9].slug}`}
                      key={`speakerId-${speakerContent[9].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `Dr. ${speakerContent[9].speakerName}`,
                      }}
                    />
                    <Image
                      rounded
                      src={speakerContent[3].speakerPic.url}
                      as={Link}
                      to={`/speakers/${speakerContent[3].slug}`}
                      key={`speakerId-${speakerContent[3].speakerId}`}
                      label={{
                        color: "orange",
                        attached: "bottom",
                        content: `Dr. ${speakerContent[3].speakerName}`,
                      }}
                    />
                  </Image.Group>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>

          {/* Box 2 */}
          <Grid.Row>
            <Grid.Column width={7}>
              <Image src={purposeImg} className="home-goals" fluid />
            </Grid.Column>
            <Grid.Column width={9} textAlign="left">
              <Item>
                <Item.Content className="home-goals">
                  <Item.Header as="h3">
                    How the South Big Data Hub Can Help
                  </Item.Header>
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