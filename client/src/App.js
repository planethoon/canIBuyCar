import MainPage from './pages/Main';
import LandingPage from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './reset.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/main'>
          <MainPage />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </>
  );
}

export default App;
