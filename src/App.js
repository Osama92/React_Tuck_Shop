import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import CheckOut from "./CheckOut";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
        <Route path="/checkOut" component={CheckOut} exact></Route>
      </Switch>
    </Router>
  );
}
