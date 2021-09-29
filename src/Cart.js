import "./styles.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.cartItems
    };
  }
  render() {
    const back_btn = "bx bx-arrow-back";
    const productItems = this.state.products.map((item) => (
      <div>
        <p>{item.name}</p>
      </div>
    ));
    return (
      <div className="Main">
        <div className="Cart-Header">
          <p>Hey there! 👋🏾</p>
          <h1>
            Welcome to your <span className="pzc-color">Shopping Cart</span>.
          </h1>
          <div className="Cart_Item_Holder">
            <i className="bx bxs-cart-download"></i>
            <h3>You currently dont have any item(s) in your cart.</h3>
          </div>
        </div>

        <div className="Make-Order">
          <Link to={"/home"}>
            <i className={back_btn}></i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state,
    total: state.reduce((prev, next) => prev + next.price * next.qty, 0)
  };
};

export default connect(mapStateToProps)(Cart);
