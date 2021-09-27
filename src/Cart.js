import "./styles.css";
import { useHistory } from "react-router-dom";
export default function Cart() {
  const back_btn = "bx bx-arrow-back";
  const history = useHistory();

  function Nav_back() {
    history.push("/home");
  }
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

      <div className="Make-Order" onClick={() => Nav_back()}>
        <i className={back_btn}></i>
      </div>
    </div>
  );
}
