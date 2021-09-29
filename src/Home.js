import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { products } from "./data";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products
    };
  }

  render() {
    var cart_Ani = "bx bx-cart-alt bx-sm ";

    const listItems = this.state.items.map((item) => (
      <div
        className="Product_Showcase"
        onClick={() => this.props.addItemToCart(item)}
      >
        <div className="Product_img">
          <img className="img" src={item.image} />
        </div>
        <label>{item.name}</label>
        <label>₦{item.price}</label>
        <a>Add to Cart</a>
      </div>
    ));

    return (
      <div className="Main">
        <div className="Home-Header">
          <h1>Welcome 😉</h1>
          <p>Atobiloye Usama Adedayo</p>
          <div className="Home-Search">
            <input placeholder="Enter Search here..." />
          </div>
          <div className="Product-Section">
            <label>Detergents</label>
            <div className="Product_Holder">{listItems}</div>
          </div>
          <div className="Product-Section">
            <label>Creams</label>

            <div className="Product_Holder">{listItems}</div>
          </div>

          <div
            className="Make-Order"
            onClick={() => this.props.history.push("/cart")}
          >
            <p>{this.props.cartItems.length}</p>
            <i className={cart_Ani}></i>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state
    // total: state.reduce((prev, next)=> prev + next.price * next.qty,0),
    // itemID: state.reduce((prev,item)=> item.id, 0),
    // itemQty: state.reduce((prev, item)=> item.AvailableQty, 0)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({ type: "ADD_TO_CART", payload: product })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
