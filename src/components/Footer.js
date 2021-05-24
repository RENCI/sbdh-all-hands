import React from 'react';
import { Button, Container, Grid, Header, Image, Menu, Segment, List } from 'semantic-ui-react'
import logo from './images/SBDH-logo-white-vertical.png'

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
                                <Menu.Item header href='/' content='Home' className='footer-link' />
                                <Menu.Item href='/register' content='Registration' className='footer-link'/>
                                {/* <Menu.Item href='/event-agenda' content='Agenda' className='footer-link'/>
                                <Menu.Item href='/speakers' content='Speakers' className='footer-link'/> */}
                                <Menu.Item href='https://southbigdatahub.org/' target='_blank' noopener content='SBDH Main Site' className='footer-link' />
                            </Menu>
                        </Grid.Column>
                        <Grid.Column width={6} padded>
                            <Grid.Row>
                                <Header as='h3' style={{color: "#f37521"}} content='Follow us online!' />
                            </Grid.Row>
                            <Grid.Row id='socials'>
                                <List horizontal>
                                    <List.Item>
                                        <Button className='social-btn' icon='computer' color='grey' href='https://southbigdatahub.org/' target='_blank' noopener />
                                    </List.Item>
                                    <List.Item>
                                        <Button className='social-btn' icon='twitter' color='twitter' href='https://twitter.com/SouthBigDataHub' target='_blank' noopener />
                                    </List.Item>
                                    <List.Item>
                                        <Button className='social-btn' icon='youtube' color='youtube' href='https://www.youtube.com/channel/UCxmSez9cqyxJ6jQhs9dRkeQ' target='_blank' noopener />
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