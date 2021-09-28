import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { products } from "./data";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 2
    };
  }

  render() {
    var cart_Ani = "bx bx-cart-alt bx-sm ";

    const listItems = products.map((item) => <li>{item}</li>);

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
            <div className="Product_Holder">
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img className="img" src={require("./products/ZipDet.png")} />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img
                    className="img"
                    src={require("./products/CanoeDet.png")}
                  />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img className="img" src={require("./products/ZipDet.png")} />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img
                    className="img"
                    src={require("./products/CanoeDet.png")}
                  />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img
                    className="img"
                    src={require("./products/MorningFrsh.png")}
                  />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="Product-Section">
            <label>Creams</label>

            <div className="Product_Holder">
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img className="img" src={require("./products/Robb23.png")} />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img
                    className="img"
                    src={require("./products/RobbInh.png")}
                  />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img className="img" src={require("./products/Robb23.png")} />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img
                    className="img"
                    src={require("./products/RobbInh.png")}
                  />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
              <div
                className="Product_Showcase"
                onClick={() => this.props.addItemToCart(this.state.item)}
              >
                <div className="Product_img">
                  <img className="img" src={require("./products/Robb23.png")} />
                </div>
                <label>Product Description</label>
                <label>₦400.00</label>
                <a>Add to Cart</a>
              </div>
            </div>
          </div>

          <div
            className="Make-Order"
            onClick={() => this.props.history.push("/cart")}
          >
            <i className={cart_Ani}></i>
            <p>{this.props.cartItems.length}</p>
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
