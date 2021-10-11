import MainPage from './pages/Main';
import LandingPage from './pages/Landing';
import BrandPage from './pages/Brand';
import CarPage from './pages/Car';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Comments from './pages/Comments';
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
        <Route path='/brand'>
          <BrandPage />
        </Route>
        <Route path='/car'>
          <CarPage />
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
        <Route path='/comments'>
          <Comments />
        </Route>
      </Switch>
    </>
  );
}

export default App;
