import React from 'react';
import { Button, Container, Grid, Header, Image, Menu, Segment, List } from 'semantic-ui-react'
import { Link } from '@reach/router';

import logo from './images/logos/SBDH-logo-white-vertical.png'
import logoNSF from './images/logos/nsf.png'

function Footer() {
    return(
        <footer className='page-footer'>
            <Segment inverted vertical style={{ marginTop: '3rem', padding: '2rem 0rem' }}>
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Menu text>
                                    <Menu.Item header as={Link} to='/' content='Home' className='footer-link' />
                                    <Menu.Item as={Link} to='/register' content='Registration' className='footer-link'/>
                                    {/* <Menu.Item as={Link} to='/event-agenda' content='Agenda' className='footer-link'/>
                                    <Menu.Item as={Link} to='/speakers' content='Speakers' className='footer-link'/>
                                    <Menu.Item href='https://southbigdatahub.org/' target='_blank' noopener content='South Hub Main Site' className='footer-link' /> */}
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={8} padded>
                                <Grid.Row>
                                    <Header as='h3' style={{color: "#f37521"}} content='Follow us online!' />
                                </Grid.Row>
                                <Grid.Row id='socials'>
                                    <List horizontal>
                                        {/* <List.Item>
                                            <Button className='social-btn' icon='computer' color='grey' href='https://southbigdatahub.org/' target='_blank' noopener title="South Hub Main Site" />
                                        </List.Item> */}
                                        <List.Item>
                                            <Button className='social-btn' icon='twitter' color='twitter' href='https://twitter.com/SouthBigDataHub' target='_blank' noopener title="South Hub Twitter" />
                                        </List.Item>
                                        <List.Item>
                                            <Button className='social-btn' icon='youtube' color='youtube' href='https://www.youtube.com/channel/UCxmSez9cqyxJ6jQhs9dRkeQ' target='_blank' noopener title="South Hub YouTube" />
                                        </List.Item>
                                        {/* <List.Item>
                                            <Button className='social-btn' icon='linkedin' color='linkedin' href='#' target='_blank' noopener title="South Hub YouTube" />
                                        </List.Item> */}
                                    </List>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row  textAlign="left">
                            <Grid.Column width={2} verticalAlign='middle'>
                                <Image size='tiny' src={logo} alt='logo' href="https://southbigdatahub.org/" rel="noopener" target="_blank" />
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <Grid.Row>
                                    <Menu text inverted stackable fluid>
                                        <Menu.Item as={Link} name="Code of Conduct" to="/code-of-conduct" className='footer-extra' />
                                        <Menu.Item name="Learn About The South Hub" href="https://southbigdatahub.org/" rel="noopener" target="_blank" className='footer-extra' />
                                    </Menu>
                                </Grid.Row>
                                <Grid.Row>
                                    <Image size='tiny' src={logoNSF} floated="left" />
                                    The South Big Data Innovation Hub is supported by the National Science Foundation through awards: #1550305 and 1916589
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </footer>
    )
}

export default Footer;