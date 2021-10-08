import MainPage from './pages/Main';
import LandingPage from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import './reset.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route path='/mypage'>
            <Mypage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
