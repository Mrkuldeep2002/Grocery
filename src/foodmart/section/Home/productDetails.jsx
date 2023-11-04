import React from "react";
import { Link, useParams } from "react-router-dom";
import Items from "../data";

const ProductDetail = () => {
  const { id } = useParams();
  const product = Items.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div class="detail-Nav">
        <div class="detail-logo">
          <a href="#">
            <img
              src="/images/logo.312c90ddea629dd64ff6fc506a5f3e6c.svg"
              alt="logo"
            />{" "}
          </a>
        </div>
        <div class="detail-btn">
          <a href="/">Click here for more Shopping</a>
          <Link to={'/cart'}>
          <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
      <div className="Detail-container">
        <div className="left-detail">
          <img src={product.img} alt="" />
        </div>
        <div className="right-detail">
          <div class="product-description">
            <span>{product.name}</span>
            <h1>snack</h1>
            <p>{product.details}</p>
          </div>
          <div class="product-price">
            <span>{product.price}</span>
            <div class="Toastify"></div>
            <button class="addcart-btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
