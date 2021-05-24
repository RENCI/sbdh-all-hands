import './App.css';

import { Grid } from 'semantic-ui-react'
import { Router as ReachRouter } from '@reach/router'

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Registration from './components/Registration';
import Speaker from './components/Speaker';
import PageNotFound from './components/404';

function App() {

  return (
    <div className="App">
      <div className='wrapper'>
        <NavBar />
        <Grid centered columns={3} className='pageBody' padded>
          <Grid.Column width={12}>
            <ReachRouter primary={false}>
                <Home path='/' />
                <Agenda path='/event-agenda' />
                <Registration path='/register' />
                <Speaker path='/speakers' />
                <PageNotFound default />
            </ReachRouter>
          </Grid.Column>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default App;
