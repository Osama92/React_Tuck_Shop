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
          <p style={{fontWeight:600}}>₦{item.price * item.qty}.00</p>
          <p onClick={() => removeItem(item)} className="RemoveLabel">
            Remove Item
          </p>
        </div>
        <div className="Quantity">
          <p>Quantity</p>
          <p className="qty">{item.qty}</p>
          <div className="IncDec">
            <div
              className="Inc"
              onClick={() => this.props.increaseCounter(item)}
            >
              <i className="bx bx-plus"></i>
            </div>
            <div
              className="Dec"
              onClick={() => this.props.decreaseCounter(item)}
            >
              <i className="bx bx-minus"></i>
            </div>
          </div>
        </div>
      </div>
    ));

    // Total Amount:
    const TotalAmount = () => (
      <div className="TotalView">
        <p>Total Amount: ₦{this.props.total}.00</p>

        <div className="CheckOut">
          <Link to={"/checkOut"}>
            <p>Check Out</p>
          </Link>
        </div>
      </div>
    );
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
          {this.props.cartItems.length > 0
            ? [productItems, TotalAmount()]
            : emptyCart()}
        </div>
        <Link to={"/"}>
          <div className="Make-Order" id="pop">
            <i className={back_btn}></i>
          </div>
        </Link>
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
