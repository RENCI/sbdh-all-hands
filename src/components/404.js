import { List, Message } from "semantic-ui-react";
import { Link } from '@reach/router'

function PageNotFound() {
    return (
        <div className='pageContain'>
            <Message floating error size='big' icon='exclamation' header='Oops!' content="The page you're looking for cannot be found or doesn't exist!" />
            <List relaxed link>
                <List.Item>
                    <List.Header>
                       May we interest you in one of these pages?
                    </List.Header>
                </List.Item>
                <List.Item as={Link} to='/'>Home</List.Item>
                <List.Item as={Link} to='/register' >Registration</List.Item>
                {/* <List.Item as={Link} to='/event-agenda' >Agenda</List.Item> */}
            </List>
        </div>
    )
}

export default PageNotFound;