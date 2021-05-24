import { Loader, Header } from "semantic-ui-react";
function Registration() {
    const Loading = <Loader content='Loading...' />
    const url = 'https://forms.gle/xCYHGyAFHzBR1iky8'

    return (
        <div className='pageContain'>
            <Header as='h2' textAlign='center'>
                <Header.Content  style={{ color: '#f37521' }}>
                    Register Today!
                </Header.Content>
                <Header.Subheader>
                    Please fill out the registration form for this event below. If you are having issues completing it here, you can go to the direct <a href={url} rel='noopener noreferrer'>form</a> instead.
                </Header.Subheader>
            </Header>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfM0Jqz1nSg-tW29oV7cRjmkojffhXjFmhp5-Ds6ud5zPaWvg/viewform?embedded=true" title='Registration form' height="1000" width="100%" frameborder="0" marginheight="0" marginwidth="0">
                {Loading}
            </iframe>
        </div>
    )
}

export default Registration;