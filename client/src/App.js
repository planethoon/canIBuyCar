import MainPage from "./pages/Main";
import LandingPage from "./pages/Landing";
import BrandPage from "./pages/Brand";
import CarPage from "./pages/Car";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Comments from "./pages/Comments";
import "./reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/brand">
          <BrandPage />
        </Route>
        <Route path="/car">
          <CarPage />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
