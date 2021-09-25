import "./styles.css";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";

export default function App() {
  return (
    <Router>
      <div className="App">{/* <Login /> */}</div>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/home" component={Home}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
