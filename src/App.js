import './App.css';

import { LocationProvider, Router as ReachRouter } from '@reach/router'

import { Grid } from 'semantic-ui-react'

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Registration from './components/Registration';
import Speaker from './components/Speaker';
import Participate from './components/Participate';
import Conduct from './components/ConductCode';
import PageNotFound from './components/404';
import SpeakerInfo from './components/SpeakerInfo';


function App() {

  return (
    <LocationProvider>
      <div className="App">
          <NavBar />
          <Grid centered columns={3} className='pageBody' padded>
            <Grid.Column width={14} className="page-content">
              <ReachRouter primary={false}>
                  <Home path='/' />
                  <Agenda path='/event-agenda' />
                  <Registration path='/register' />
                  <Speaker path='/speakers' />
                  <SpeakerInfo path='/speakers/:speakerSlug' />
                  <Participate path='/get-involved' />
                  <Conduct path="/code-of-conduct" />
                  <PageNotFound default />
              </ReachRouter>
            </Grid.Column>
          </Grid>
          <Footer />
        </div>
    </LocationProvider>
  );
}

export default App;
