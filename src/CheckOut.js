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
          <p>One Last Step!😊</p>
          <h1>
            Welcome to <span className="pzc-color">CheckOut page</span>.
          </h1>
        </div>
        <Link to={"/cart"}>
          <div className="Make-Order">
            <i className={back_btn}></i>
          </div>
        </Link>
      </div>
    );
  }
}

export default CheckOut;
