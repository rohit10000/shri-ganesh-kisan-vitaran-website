import React from "react";
import { useParams } from "react-router-dom";
import Products from "../../items.json";
import "../../App.css";
import { Link } from "react-router-dom";
import BackImage from "../../images/back.svg";

function ProductItems() {
  const { id } = useParams();
  const product = Products[id];

  //If product not found
  if (!product) {
    return <h2>Product Not Found !</h2>;
  }

  return (
    <div>
      <Link className="back-btn" to="/product">
        <img src={BackImage} alt="Go Back" height={30} title="back" />
      </Link>
      <div className="product-items">
        <h3 className="shoe-name">{product.name}</h3>
        <h2 className="shoe-price"> Price = {product.price} </h2>
        <img
          className="item-image"
          alt="Product"
          title={product.name}
          src={product.img}
        />{" "}
      </div>
    </div>
  );
}

export default ProductItems;
