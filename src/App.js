import './App.css';

import { Grid, Segment } from 'semantic-ui-react'
import { useRoutes } from "hookrouter";

import NavBar from './components/Navbar';
import PageNotFound from './components/404';
import routes from './routes';

function App() {
  const routeResult = useRoutes(routes)

  return (
    <div className="App">
        <NavBar />
        <Grid centered columns={3}>
          <Grid.Column width={12}>
            <Segment>
                {routeResult || <PageNotFound />}
            </Segment>
          </Grid.Column>
        </Grid>
    </div>
  );
}

export default App;
