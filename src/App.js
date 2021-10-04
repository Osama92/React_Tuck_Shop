import "./styles.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import CheckOut from "./CheckOut";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/checkOut" component={CheckOut}></Route>
      </Switch>
    </Router>
  );
}
