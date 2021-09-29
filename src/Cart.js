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

    const removeItem = (item) => {
      var remove = item.id.toString();
      this.props.removeItem(item);
      document.getElementById(remove).style.display = "none";
    };

    // Items picked View
    const productItems = this.state.products.map((item) => (
      <div className="Pick_Product" id={item.id}>
        <img src={item.image} />
        <div className="Product_Details">
          <p>{item.name}</p>
          <p>₦{item.price}</p>
          <p onClick={() => removeItem(item)}>Remove Item</p>
        </div>
      </div>
    ));
    // Empty Cart
    const emptyCart = () => (
      <div className="Cart_Item_Holder">
        <i className="bx bxs-cart-download"></i>
        <h3>You currently dont have any item(s) in your cart.</h3>
      </div>
    );
    return (
      <div className="Main">
        <div className="Cart-Header">
          <p>Hey there! 👋🏾</p>
          <h1>
            Welcome to your <span className="pzc-color">Shopping Cart</span>.
          </h1>
          {this.props.cartItems.length > 0 ? productItems : emptyCart()}
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: product }),
    increaseCounter: (products) =>
      dispatch({ type: "INCREASE", payload: products }),
    decreaseCounter: (products) =>
      dispatch({ type: "DECREASE", payload: products })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
