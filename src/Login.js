import "./styles.css";
import { useHistory } from "react-router-dom";
export default function Login() {
  //Variables
  const history = useHistory();
  var clockNumber = "";
  var voucherNumber = "";

  //Functionalities:

  const _get_clock_number = (value) => {
    clockNumber = value;
  };
  const _get_voucher_number = (value) => {
    voucherNumber = value;
  };
  const _check = () => {
    if (clockNumber === "Ade" && voucherNumber === "pvc") {
      Mynav();
      console.log("Success");
    }
  };

  function Mynav() {
    history.push("/home");
  }

  return (
    <div className="Main">
      <div className="Login-Header">
        <p>Hello there! 👋🏾</p>
        <h1>
          Welcome to <span className="pzc-color">PZC</span> Tuck shop.
        </h1>
      </div>
      <div className="Login-Inputs-Holder">
        <input
          placeholder="Ente Clock Number"
          onChange={(e) => _get_clock_number(e.target.value)}
        />
      </div>
      <div className="Login-Inputs-Holder">
        <input
          placeholder="Enter Voucher Number"
          onChange={(e) => _get_voucher_number(e.target.value)}
        />
      </div>
      <div className="Login-Modes">
        <div className="Login-Mode" onClick={() => _check()}>
          <p>
            Log in <span> › </span>
          </p>
        </div>
        <div className="Guest-Mode">
          <p>Guest Mode</p>
        </div>
      </div>
    </div>
  );
}
