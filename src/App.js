import './App.css';

import { Grid } from 'semantic-ui-react'
import { useRoutes } from "hookrouter";

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './components/404';
import routes from './routes';

function App() {
  const routeResult = useRoutes(routes)

  return (
    <div className="App">
      <div className='wrapper'>
        <NavBar />
        <Grid centered columns={3} className='pageBody' padded>
          <Grid.Column width={12}>
            <div>
                {routeResult || <PageNotFound />}
            </div>
          </Grid.Column>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default App;
