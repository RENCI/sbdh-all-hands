import { Loader, Header, List, Message, Icon } from "semantic-ui-react";


function Registration() {
    const Loading = <Loader content='Loading...' />
    const url = 'https://forms.gle/c5ssbbq48VvHXtDT7'

    return (
        
        <div className='page-contain'>
            {/* Message displayed during event days */}
            <Message color="orange" size="small" icon>
                <Icon name="info" />
                <Message.Content style={{color: "#000"}}>
                    <p>The All-Hands Meeting is being hosted virtually on the Airmeet platform. The first time you click the Airmeet Link, you will be asked to fill out a short name tag before joining the meeting. Additional information about navigating Airmeet is available in the Welcome Packet.</p>
                    <List bulleted>
                        <List.Item>If you have not yet registered, please take a moment to complete our registration form below before clicking on the Airmeet Link.</List.Item>
                        <List.Item>To join the meeting on Airmeet, please click <a href="https://bit.ly/AllHandsJuly_SBDH" rel="noreferrer" target="_blank">here</a>.</List.Item>
                        <List.Item>To view our Welcome Packet, please click <a href="https://bit.ly/AllHandsJuly_SBDH-WelcomePacket" rel="noreferrer" target="_blank">here</a>.</List.Item>
                    </List>
                </Message.Content>
            </Message>

            {/* Beginning of Page Content */}
            <Header as='h1' textAlign='center'>
                <Header.Content className="page-title">Register Today!</Header.Content>
                <Header.Subheader className="sub-head">
                    Please fill out the registration form for this event below. If you are having issues completing it here, you can go to the direct <a href={url} target='_blank' rel='noopener noreferrer'>form</a> instead.
                </Header.Subheader>
            </Header>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd_gi_rWlcdZNbn5S0mk58pkmgAfgZvtrbGlzR6lzEBQ2UUvg/viewform?embedded=true" title='Registration form' height="1000" width="100%" frameborder="0" marginheight="0" marginwidth="0">
                {Loading}
            </iframe>
        </div>
    )
}

export default Registration;
