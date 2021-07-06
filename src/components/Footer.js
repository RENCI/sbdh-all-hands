import React from 'react';
import { Button, Container, Grid, Header, Image, List, Segment, Menu } from 'semantic-ui-react'
import { Link } from '@reach/router';

// import logo from './images/logos/SBDH-logo-white-vertical.png'
import logoNSF from './images/logos/nsf.png'


function Footer() {
    return(
        <footer className='page-footer'>
            <Segment inverted vertical style={{ marginTop: '3rem', padding: '2rem 0rem' }}>
                <Container>
                    <Grid inverted stackable>
                        <Grid.Row>
                            {/* MENUS */}
                            <Grid.Column mobile={16} tablet={5} computer={6} textAlign="center">
                                <List link inverted horizontal>
                                    <List.Item header as={Link} to='/' content='Home' className='footer-link' />
                                    <List.Item as={Link} to='/register' content='Registration' className='footer-link'/>
                                    <List.Item as={Link} to='/event-agenda' content='Agenda' className='footer-link'/>
                                    <List.Item as={Link} to='/speakers' content='Speakers' className='footer-link'/>
                                    <List.Item as={Link} to='/get-involved' content='Get Involved' className="footer-link" />
                                </List>
                                <List text inverted>
                                    <Menu.Item as={Link} name="Code of Conduct" to="/code-of-conduct" className='footer-extra' />
                                    <Menu.Item name="Learn About The South Hub" href="https://southbigdatahub.org/about" rel="noopener" target="_blank" className='footer-extra' />
                                </List>
                            </Grid.Column>
                            {/* REGISTER BTN */}
                            <Grid.Column mobile={16} tablet={5} computer={4} className="footer-register-button-container" verticalAlign="middle">
                                <Button as={Link} to="/register" color='orange' size='small' content='REGISTER NOW' />
                            </Grid.Column>
                            {/* SOCIAL MEDIA LINKS */}
                            <Grid.Column mobile={16} tablet={5} computer={6} padded>
                                <Header as='h3' style={{color: "#f37521"}} content='Follow us online!' />
                                <Grid.Row id='socials'>
                                    <List horizontal>
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
                    </Grid>
                    
                    <div className="ui divider section"></div>
                    
                    <div className="footer-nsf-acknowledgement">
                        <Image size='tiny' src={logoNSF} className="footer-nsf-acknowledgement_logo"/>
                        <div className="footer-nsf-acknowledgement_blurb">
                            The South Big Data Innovation Hub is supported by the National Science Foundation through awards: #1550305 and 1916589
                        </div>
                    </div>
                </Container>
            </Segment>
        </footer>
    )
}

export default Footer;