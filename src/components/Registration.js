import { Container, Loader } from "semantic-ui-react";

function Registration() {
    const Loading = <Loader content='Loading...' />
    return (
        <div className='pageContain'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfM0Jqz1nSg-tW29oV7cRjmkojffhXjFmhp5-Ds6ud5zPaWvg/viewform?embedded=true" title='Registration form' height="1000" width="100%" frameborder="0" marginheight="0" marginwidth="0">
                {Loading}
            </iframe>
        </div>
    )
}

export default Registration;