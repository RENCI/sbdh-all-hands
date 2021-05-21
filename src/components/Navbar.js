import React from 'react';
import { Button, Grid, Header, Menu } from 'semantic-ui-react'

function NavBar() {

    return (
        <div>
            <Grid stackable columns='equal' className='header-bar'>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        <Header>
                            <img src='/logo.svg' alt='logo' />
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Menu pointing secondary fluid size='large'>
                            <Menu.Item as='A' icon='home' name='Home' href='/' />
                            <Menu.Item as='A' icon='calendar alternate outline' name='Agenda' href='/event-agenda' />
                            <Menu.Item as='A' icon='pencil' name='Registration' href='/register' />
                            <Menu.Item as='A' icon='users' name='Speakers' href='/speakers' />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column>
                        <Button icon='arrow alternate circle left outline' labelPosition='left' color='orange' size='small' content='Go to Main Site' href='https://southbigdatahub.org/' target='_blank' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default NavBar;