import "./styles.css";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Cart from "./Cart";
// import Counter from "./Counter";

export default function App() {
  return (
    <Router>
      {/* <div className="App"></div> */}
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}
