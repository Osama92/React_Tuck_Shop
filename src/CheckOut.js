import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.cartItems
    };
  }

  render() {
    const back_btn = "bx bx-arrow-back";

    const pickedItems = this.state.products.map((item) => (
      <div className="Picked_Product" id={item.id}>
        <div className="Picked_Details">
          <p>{item.name}</p>
          <p>₦{item.price * item.qty}</p>
        </div>
        <div className="Quantity">
          <p>Quantity</p>
          <p className="qty">{item.qty}</p>
        </div>
      </div>
    ));

    const TotalAmount = () => (
      <div className="TotalView">
        <p>Total Amount: ₦{this.props.total}.00</p>

        <div className="CheckOut">
          <Link to={"/checkOut"}>
            <p>Pay</p>
          </Link>
        </div>
      </div>
    );

    const emptyCart = () => (
      <div className="Cart_Item_Holder">
        <i className="bx bxs-cart-download"></i>
        <h3>You currently dont have any item(s) in your cart.</h3>
      </div>
    );

    return (
      <div className="Main">
        <div className="Cart-Header">
          <p>One Last Step!😊</p>
          <h1>
            Welcome to <span className="pzc-color">CheckOut page</span>.
          </h1>
          {this.props.cartItems.length > 0
            ? [pickedItems, TotalAmount()]
            : emptyCart()}
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
const mapStateToProps = (state) => {
  return {
    cartItems: state,
    total: state.reduce((prev, next) => prev + next.price * next.qty, 0)
  };
};

export default connect(mapStateToProps)(CheckOut);
