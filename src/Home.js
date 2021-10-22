import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { products } from "./data";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
      name: "",
      selectValues: [],
      search: "Home-Search"
    };
  }

  loadProducts = () => {
    this.setState({
      products: products,
      inMemoryProducts: products,
      isLoading: false
    });
  };

  searchProducts = (value) => {
    const filteredProducts = this.state.inMemoryProducts.filter((products) => {
      let productsLowercase = products.name.toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return productsLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ products: filteredProducts });
  };

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    var cart_Ani = "bx bx-cart-alt bx-sm ";

    const input = () => {
      document.getElementById("searchItems").style.display = "flex";
      document.getElementById("closeSearch").style.display = "flex";
    };

    const closeSearch = () => {
      document.getElementById("searchItems").style.display = "none";
      document.getElementById("closeSearch").style.display = "none";
      this.setState({ search: "Home-Search" });
    };

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

    const SearchItems = this.state.items.map((item) => (
      <label onClick={() => this.props.addItemToCart(item)}>{item.name}</label>
    ));

    return (
      <div className="Main" id="exit">
        <div className="Home-Header">
          <h1>Welcome 😉</h1>
          <p>Atobiloye Usama Adedayo</p>
          <div id={this.state.search}>
            <input
              placeholder="Enter Search here..."
              onClick={() => {
                this.setState({ search: "Home-Search-active" }), input();
              }}
            />

            <div id="searchItems">{SearchItems}</div>
            <div id="closeSearch" onClick={() => closeSearch()}>
              <i className="bx bx-x"></i>
            </div>
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
