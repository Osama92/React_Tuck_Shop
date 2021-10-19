import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { products } from "./data";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
      name: ""
    };
  }

  render() {
    var cart_Ani = "bx bx-cart-alt bx-sm ";

    const searchItem = products.map(function (item) {
      return {
        itemName: item.name
      };
    });

    const data = searchItem.map((i) => i.itemName);
    console.log(data);

    const touchANimation = (item) => {
      document.getElementById(item.id).style.transform = "scale(0.8)";

      setTimeout(() => {
        document.getElementById(item.id).style.transform = "scale(1)";
        document.getElementById(item.name).innerHTML = "Added to Cart ✔";
        document.getElementById(item.name).style.color = "Green";
      }, 300);
    };

    const listItems = this.state.items.map((item) => (
      <div
        className="Product_Showcase"
        id={item.id}
        onClick={() => [this.props.addItemToCart(item), touchANimation(item)]}
      >
        <div className="Product_img">
          <img className="img" src={item.image} />
        </div>
        <label>{item.name}</label>
        <label>₦{item.price}</label>
        <a id={item.name}>Add to Cart</a>
      </div>
    ));

    return (
      <div className="Main">
        <div className="Home-Header">
          <h1>Welcome 😉</h1>
          <p>Atobiloye Usama Adedayo</p>
          <div className="Home-Search">
            {/* <input placeholder="Enter Search here..." /> */}
            <Select
              option={data}
              value={this.state.name}
              placeholder="Enter Search here..."
              style={{
                width: "130%",
                height: "100%",
                paddingLeft: "0px",
                border: "none"
              }}
            />
          </div>
          <div className="Product-Section">
            <label className="Section_label">Detergents</label>
            <div className="Product_Holder">{listItems}</div>
          </div>
          <div className="Product-Section">
            <label className="Section_label">Creams</label>

            <div className="Product_Holder">{listItems}</div>
          </div>

          <Link to="/cart">
            <div className="Make-Order">
              <p>{this.props.cartItems.length}</p>
              <i className={cart_Ani}></i>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({ type: "ADD_TO_CART", payload: product })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
