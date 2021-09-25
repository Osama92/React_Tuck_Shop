import "./styles.css";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Login />
      </div>
      <Switch>
        <Route path="/" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </Router>
  );
}
