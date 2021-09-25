import "./styles.css";

export default function Login() {
  //Variables

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
    console.log(clockNumber);
    console.log(voucherNumber);
  };
  function Mynav() {
    // return <Link to="/home"></Link>;
    // console.log("HDH");
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
          placeholder="Enter Your Clock Number"
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
        <div className="Login-Mode" onClick={() => Mynav()}>
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
