// import {useState} from "react";
import { Link } from '@reach/router'
import { Button, Container, Image, Menu } from 'semantic-ui-react'

import logo from './images/logos/SBDH-logo.png'

function NavBar() {
    
    // const [isActive, setActive] = useState(false)
    // const onClick = () => setActive(!isActive)

    return (
        <div className='header-bar'>
            <Container>
                <Menu pointing secondary size='large' stackable fluid>
                    <Menu.Item header as={Link} to='/'>
                        <Image size='small' src={logo} alt='logo' style={{ marginRight: '2rem' }} />
                    </Menu.Item>
                    <Menu.Item as={Link} icon='home' name='Home' to='/' className='nav-link' />
                    {/* <Menu.Item as={Link} icon='calendar alternate outline' name='Agenda' to='/event-agenda' className='nav-link' /> */}
                    <Menu.Item as={Link} icon='pencil' name='Registration' to='/register' className='nav-link' />
                    {/* <Menu.Item as={Link} icon='users' name='Speakers' to='/speakers' className='nav-link' /> */}
                    <Menu.Item as={Link} to='/register' position='right'>
                        <Button color='orange' size='small' content='REGISTER NOW' />
                    </Menu.Item>
                </Menu>
            </Container>
        </div>
    )
}

export default NavBar;