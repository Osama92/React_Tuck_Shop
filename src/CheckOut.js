import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.cartItems,
      inputValue: 0,
      firstNumber: 0,
      secondNumber: 0
    };
  }

  render() {
    const _btn = "bx bx-right-arrow-alt bx-md bx-burst";
    const back_btn = "bx bx-arrow-back";

    const pickedItems = this.state.products.map((item) => (
      <div className="Picked_Product" id={item.id}>
        <div className="Picked_Details">
          <p>{item.id}.</p>
          <p>{item.name}</p>
          <p>Quantity: {item.qty}</p>
          <p>Price: ₦{item.price * item.qty}.00</p>
        </div>
      </div>
    ));

    const _get_answer = (value) => {
      this.setState({ inputValue: value });
    };

    const payment = () => (
      <div id="paymentModal">
        <div className="Paylabel">
          <p>Why so serious 😁, Show your SMART </p>
        </div>
        <div className="Question">
          <p>{this.state.firstNumber}</p>
          <p>+</p>
          <p>{this.state.secondNumber}</p>
          <p>=</p>
          <input type="number" onChange={(e) => _get_answer(e.target.value)} />
        </div>
      </div>
    );

    const random = () => {
      this.setState({
        firstNumber: Math.floor(Math.random() * 11),
        secondNumber: Math.floor(Math.random() * 11)
      });
    };

    const payCheck = () => {
      const result = this.state.firstNumber + this.state.secondNumber;
      const inputValue = this.state.inputValue;

      if (inputValue === result) {
        alert("Success");
      } else {
        alert("You didnt get that buddy!");
        // alert(this.state.inputValue);
      }
    };

    const TotalAmount = () => (
      <div className="TotalView">
        <p>Check Out Pay: ₦{this.props.total}.00</p>

        <div
          className="CheckOut"
          onClick={() => [
            (document.getElementById("paymentModal").style.display = "block"),
            (document.getElementById("two").style.display = "block"),
            (document.getElementById("one").style.display = "none"),
            random()
          ]}
        >
          <p>Pay</p>
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
            Welcome to <span className="pzc-color">CheckOut Page.</span>
          </h1>
          {this.props.cartItems.length > 0
            ? [pickedItems, TotalAmount()]
            : emptyCart()}
          {payment()}
        </div>

        <Link to={"/checkout"}>
          <div className="Make-payment">
            <i className={back_btn} id="one"></i>
            <i className={_btn} id="two" onClick={() => payCheck()}></i>
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
