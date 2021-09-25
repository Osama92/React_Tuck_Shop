import "./styles.css";

export default function Home() {
  return (
    <div className="Main">
      <div className="Home-Header">
        <h1>Welcome 😉</h1>
        <p>User name</p>
        <div className="Home-Search">
          <input placeholder="Enter Search here..." />
        </div>
        <div className="Product-Section">
          <label>Detergents</label>

          <div className="Product_Holder">
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
          </div>
        </div>
        <div className="Product-Section">
          <label>Creams</label>

          <div className="Product_Holder">
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
            <div className="Product_Showcase">
              <div className="Product_img"></div>
              <label>Product Description</label>
              <label>Price</label>
            </div>
          </div>
        </div>
        <div className="Make-Order">
          <i className="bx bx-plus bx-md"></i>
        </div>
      </div>
    </div>
  );
}
