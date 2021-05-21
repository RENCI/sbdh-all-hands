import './App.css';

import { Grid } from 'semantic-ui-react'
import { useRoutes } from "hookrouter";

import NavBar from './components/Navbar';
import Footer from './Footer';
import PageNotFound from './components/404';
import routes from './routes';

function App() {
  const routeResult = useRoutes(routes)

  return (
    <div className="App">
        <NavBar />
        <Grid centered columns={3}>
          <Grid.Column width={12}>
            <div>
                {routeResult || <PageNotFound />}
            </div>
          </Grid.Column>
        </Grid>
        <Footer />
    </div>
  );
}

export default App;
