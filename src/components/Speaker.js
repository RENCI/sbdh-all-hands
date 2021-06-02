import { Card, Header, Icon, Image, Label } from "semantic-ui-react";

import speakers from '../content/speaker.js'


function Speaker() {
    return (
        <div className="page-contain">
            <Header as='h1' className="page-title" textAlign='center' content="Speakers" subheader="Summary about speakers and how we're so excited. Probably the blurb from the home page." />
            <Card.Group centered itemsPerRow={4}>
                {speakers.map(speaker => (
                    <Card>
                        <Image src={speaker.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>
                                {speaker.name} <Icon disabled name="star" color="orange" title="Track Captain" />
                            </Card.Header>
                            <Card.Meta  className="sub-head">{`${speaker.title}, ${speaker.org}`}</Card.Meta>
                        </Card.Content>
                        {/* <Card.Content extra>{speaker.isTrackCaptain === 1 ?<Label basic image><Icon name="star" color="orange" />Track Captain</Label> : null}</Card.Content> */}
                    </Card>
                ))}
            </Card.Group>
        </div>
    )
}

export default Speaker;