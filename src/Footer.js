import React from 'react';
import { Button, Container, Grid, Image, Menu, Segment } from 'semantic-ui-react'
import logo from './components/images/SBDH-logo-white-vertical.png'

function Footer() {
    return(
        <footer className='footer'>
            <Segment inverted style={{ margin: '5rem 0rem 0rem', padding: '5rem 0rem' }}>
                <Container>
                    <Grid stackable>
                        <Grid.Column>
                            <Image size='tiny' src={logo} alt='logo' />
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </footer>
    )
}

export default Footer;