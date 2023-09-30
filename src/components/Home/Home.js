import React from "react";
import Shoes from "../../latestShoes.json";

function Home() {
  return (
    <div>
      <div className="banner-image"></div>
      <div>
        <span className="tagline">Welcome to Shri Ganesh Kisan Vitaran!</span>
        <div className="tagline-para">
          We take immense pride in being your trusted source for premium quality rice and cereals.
          As a dedicated farmer with a passion for agriculture, we bring the bounty of our fertile
          fields straight to your table.
        </div>

        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-designs">Latest Yield</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          <div className="product-container image-gallery">
            {Object.keys(Shoes).map((keyName) => {
              const shoe = Shoes[keyName];
              return (
                <div className="home-products" key={keyName}>
                  <img
                    className="products-shoe-image"
                    alt={shoe.name}
                    src="https://m.media-amazon.com/images/I/81kz-cAPItL._AC_SR700,525_.jpg"

                  />
                  <h3 className="shoe-name">{shoe.name}</h3>
                  <h3 className="shoe-price">${shoe.price}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
