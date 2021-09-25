import "./styles.css";

export default function Login() {
  return (
    <div className="Main">
      <div className="Login-Header">
        <p>Hello there! 👋🏾</p>
        <h1>Welcome to PZC Tuck shop.</h1>
      </div>
      <div className="Login-Inputs-Holder">
        <input placeholder="Enter Your Clock Number" />
      </div>
      <div className="Login-Inputs-Holder">
        <input placeholder="Enter Voucher Number" />
      </div>
      <div className="Login-Modes">
        <div className="Login-Mode">
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
