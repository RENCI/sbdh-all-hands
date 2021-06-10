import { Card, Header, Icon, Image } from "semantic-ui-react";

import speakerData from '../content/speaker.json'
import placeholder from './images/home/placeholder.jpg'

const speakers = [...speakerData]

function Speaker() {
    return (
        <div className="page-contain">
            <Header as='h1' className="page-title" textAlign='center' content="Speakers" subheader="All Hands sessions will be led by experts in their fields. These leaders are building sessions to spark conversations and create collaborative opportunities. Explore more about each speaker below by clicking on their card." />
            <Card.Group centered itemsPerRow={4}>
                {speakers.map(speaker => (
                    <Card>
                        <Image src={placeholder} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>
                                {speaker.name} {speaker.isTrackCaptain === 1 ? <Icon disabled name="star" color="orange" title="Track Captain" /> : null}
                            </Card.Header>
                            <Card.Meta className="sub-head speaker-card-title">{`${speaker.title},`} <strong>{speaker.org}</strong></Card.Meta>
                        </Card.Content>
                        {/* <Card.Content extra>{speaker.isTrackCaptain === 1 ?<Label basic image><Icon name="star" color="orange" />Track Captain</Label> : null}</Card.Content> */}
                    </Card>
                ))}
            </Card.Group>
        </div>
    )
}

export default Speaker;