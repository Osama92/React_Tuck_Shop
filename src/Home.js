import "./styles.css";

export default function Home() {
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
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/ZipDet.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/CanoeDet.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/ZipDet.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/CanoeDet.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
            <div className="Product_Showcase">
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
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/Robb23.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/RobbInh.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/Robb23.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/RobbInh.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img">
                <img className="img" src={require("./products/Robb23.png")} />
              </div>
              <label>Product Description</label>
              <label>₦400.00</label>
              <a>Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="Make-Order">
          <i className="bx bx-cart-alt bx-sm"></i>
        </div>
      </div>
    </div>
  );
}
