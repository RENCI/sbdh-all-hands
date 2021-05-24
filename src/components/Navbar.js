import React from 'react';
import { Button, Container, Image, Menu } from 'semantic-ui-react'
import logo from './images/SBDH-logo.png'

function NavBar() {

    return (
        <div className='header-bar'>
            <Container>
                <Menu pointing secondary size='large' stackable fluid>
                    <Menu.Item as='a' header href='/'>
                        <Image size='small' src={logo} alt='logo' style={{ marginRight: '2rem' }} />
                    </Menu.Item>
                    <Menu.Item as='A' icon='home' name='Home' href='/' />
                    {/* <Menu.Item as='A' icon='calendar alternate outline' name='Agenda' href='/event-agenda' /> */}
                    <Menu.Item as='A' icon='pencil' name='Registration' href='/register' />
                    {/* <Menu.Item as='A' icon='users' name='Speakers' href='/speakers' /> */}
                    <Menu.Item>
                        <Button color='orange' size='small' content='REGISTER NOW' href='/register' />
                    </Menu.Item>
                </Menu>
            </Container>
        </div>
    )
}

export default NavBar;