import React from 'react';
import { Button, Container, Grid, Header, Image, Menu, Segment, List } from 'semantic-ui-react'
import { Link } from '@reach/router';

import logo from './images/logos/SBDH-logo-white-vertical.png'

function Footer() {
    return(
        <footer className='footer'>
            <Segment inverted vertical style={{ margin: '5rem 0rem 0rem', padding: '5rem 0rem' }}>
                <Container>
                    <Grid stackable>
                        <Grid.Column width={4}>
                            <Image size='tiny' src={logo} alt='logo' />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Menu text >
                                <Menu.Item header as={Link} to='/' content='Home' className='footer-link' />
                                <Menu.Item as={Link} to='/register' content='Registration' className='footer-link'/>
                                {/* <Menu.Item as={Link} to='/event-agenda' content='Agenda' className='footer-link'/>
                                <Menu.Item as={Link} to='/speakers' content='Speakers' className='footer-link'/>
                                <Menu.Item href='https://southbigdatahub.org/' target='_blank' noopener content='South Hub Main Site' className='footer-link' /> */}
                            </Menu>
                        </Grid.Column>
                        <Grid.Column width={6} padded>
                            <Grid.Row>
                                <Header as='h3' style={{color: "#f37521"}} content='Follow us online!' />
                            </Grid.Row>
                            <Grid.Row id='socials'>
                                <List horizontal>
                                    <List.Item>
                                        <Button className='social-btn' icon='computer' color='grey' href='https://southbigdatahub.org/' target='_blank' noopener title="South Hub Main Site" />
                                    </List.Item>
                                    <List.Item>
                                        <Button className='social-btn' icon='twitter' color='twitter' href='https://twitter.com/SouthBigDataHub' target='_blank' noopener title="South Hub Twitter" />
                                    </List.Item>
                                    <List.Item>
                                        <Button className='social-btn' icon='youtube' color='youtube' href='https://www.youtube.com/channel/UCxmSez9cqyxJ6jQhs9dRkeQ' target='_blank' noopener title="South Hub YouTube" />
                                    </List.Item>
                                </List>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </footer>
    )
}

export default Footer;