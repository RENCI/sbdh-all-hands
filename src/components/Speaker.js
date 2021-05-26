import { Card, Header } from "semantic-ui-react";

import placeholder from './images/home/300x300_placeholder.png'

function Speaker() {
    return (
        <div className="page-contain">
            <Header as='h1' className="page-title" textAlign='center' content="Speakers" subheader="Summary about speakers and how we're so excited. Probably the blurb from the home page." />
            <Card
                image={placeholder}
                header='Elliot Baker'
                meta='Sound Engineer, RENCI'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra="tags"
            />
        </div>
    )
}

export default Speaker;