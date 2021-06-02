import { Router as ReachRouter } from '@reach/router'
import ReactGA from 'react-ga';

const Analytics = ({history}) => {
    history.listen((location, action) => {
        ReactGA.get({ page: location.pathname });
        ReactGA.pageview(location.pathname)
    })

    return <div></div>
}

export default ReachRouter(Analytics)