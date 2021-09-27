import "./styles.css";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Cart from "./Cart";

export default function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </Router>
  );
}
