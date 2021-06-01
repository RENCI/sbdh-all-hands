// import {useState} from "react";
import { Link, useLocation } from '@reach/router'
import { Button, Container, Image, Menu } from 'semantic-ui-react'

import logo from './images/logos/SBDH-logo.png'

function NavBar() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    const path = pathname

    let navClass = {
        home: `nav-link ${path === "/" ? "active" : ""}`,
        register: `nav-link ${path === "/register" ? "active" : ""}`,
        agenda: `nav-link ${path === "/event-agenda" ? "active" : ""}`,
        speakers: `nav-link ${path === "/speakers" ? "active" : ""}`,
        participate: `nav-link ${path === "/get-involved" ? "active" : ""}`
    };
    
    return (
        <div className='header-bar'>
            <Container>
                <Menu pointing secondary size='large' stackable fluid>
                    <Menu.Item header as={Link} to='/'>
                        <Image size='small' src={logo} alt='logo' style={{ marginRight: '2rem' }} />
                    </Menu.Item>
                    <Menu.Item as={Link} icon='home' name='Home' to='/' className={navClass.home} />
                    <Menu.Item as={Link} icon='pencil' name='Registration' to='/register' className={navClass.register} />
                    {/* <Menu.Item as={Link} icon='calendar alternate outline' name='Agenda' to='/event-agenda' className={navClass.agenda} /> */}
                    {/* <Menu.Item as={Link} icon='users' name='Speakers' to='/speakers' className={navClass.speakers} /> */}
                    <Menu.Item as={Link} icon='lightbulb outline' name='Get Involved' to='/get-involved' className={navClass.participate} />
                    <Menu.Item icon='info' name='About the South Hub' href="https://southbigdatahub.org/about" rel="noopener" target="_blank" />
                    <Menu.Item as={Link} to='/register' position='right'>
                        <Button color='orange' size='small' content='REGISTER NOW' />
                    </Menu.Item>
                </Menu>
            </Container>
        </div>
    )
}

export default NavBar;