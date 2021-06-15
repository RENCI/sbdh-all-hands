import {useState, useEffect} from "react";
import { Link } from '@reach/router';

import { Card, Header, Icon, Image, Loader } from "semantic-ui-react";

// import speakerData from '../content/speaker.json'
// import placeholder from './images/home/placeholder.jpg'

// const speakers = [...speakerData]

const query = `
{
    speakerCollection {    
      items{
        slug
        sys {id}
        speakerId
        speakerName
        speakerPic {
          url
        }
        speakerTitle
        org
        bio {
          json 
        }
        isTrackCaptain
      }
    }
}`

function Speaker() {
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
                <Header as='h1' className="page-title" textAlign='center' content="Speakers" subheader="All Hands sessions will be led by experts in their fields. These leaders are building sessions to spark conversations and create collaborative opportunities. Explore more about each speaker below by clicking on their card." />
                <Loader inverted indeterminate size="big" content='Loading' />
            </div>
        )
    }

    return (
        <div className="page-contain">
            <Header as='h1' className="page-title" textAlign='center' content="Speakers" subheader="All Hands sessions will be led by experts in their fields. These leaders are building sessions to spark conversations and create collaborative opportunities. Explore more about each speaker below by clicking on their card." />
            <Card.Group centered itemsPerRow={4}>
                {speakerContent.map(speaker => (
                    <Card as={Link} to={`/speakers/${speaker.slug}`} key={`speakerId-${speaker.speakerId}`}>
                        <Image src={speaker.speakerPic.url} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>
                                {speaker.speakerName} {speaker.isTrackCaptain ? <Icon disabled name="star" size="small" color="orange" title="Track Captain" /> : null}
                            </Card.Header>
                            <Card.Meta className="sub-head speaker-card-title">{`${speaker.speakerTitle},`} <strong>{speaker.org}</strong></Card.Meta>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </div>
    )
}

export default Speaker;