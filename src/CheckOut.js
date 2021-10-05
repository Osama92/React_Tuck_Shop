import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: products
    // };
  }

  render() {
    const back_btn = "bx bx-arrow-back";

    return (
      <div className="Main">
        <div className="Cart-Header">
          <p>Hey there! 👋🏾</p>
          <h1>
            Welcome to your <span className="pzc-color">Shopping Cart</span>.
          </h1>
        </div>
        <Link to={"/cart"}>
          <div className="Make-Order">
            <i className={back_btn}></i>
          </div>
        </Link>
      </div>
    )
  }
}

export default CheckOut;
