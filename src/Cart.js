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
      <div className="Login-Header">
        <p>Hey there! 👋🏾</p>
        <h1>
          Welcome to your <span className="pzc-color">Shopping Cart</span>.
        </h1>
      </div>
      <div className="Make-Order" onClick={() => Nav_back()}>
        <i className={back_btn}></i>
      </div>
    </div>
  );
}
