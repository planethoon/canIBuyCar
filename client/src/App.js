import MainPage from "./pages/Main";
import LandingPage from "./pages/Landing";
import "./reset.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
