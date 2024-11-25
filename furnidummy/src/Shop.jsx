import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice";

const products = [
  { id: 1, title: "Nordic Chair", price: 100, src: "images/product-1.png" },
  { id: 2, title: "Product 2", price: 200, src: "images/product-2.png" },
  { id: 3, title: "Product 3", price: 300, src: "images/product-3.png" },
  { id: 3, title: "Product 3", price: 250, src: "images/product-2.png" },
];
function Shop() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const handleAddToCart = (product) => {
    dispatch(addItem({ userId: user.id, item: product }));
    alert("Item added to cart!");
    nav("/");
  };
  return (
    <div>
      <div>
        {/* Start Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Shop </h1>
                </div>
              </div>
              <div className="col-lg-7"></div>
            </div>
          </div>
        </div>
        {/* End Hero Section */}
        <div className="untree_co-section product-section before-footer-section">
          <div className="container">
            <div className="row">
              {products.map((product) => (
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a className="product-item" href="/cart">
                    <img
                      src={product.src}
                      className="img-fluid product-thumbnail"
                    />
                    <h3 className="product-title">{product.title}</h3>
                    <strong className="product-price">${product.price}</strong>
                    <div
                      className="icon-cross"
                      onClick={() => handleAddToCart(product)}
                    >
                      <img src="images/cross.svg" className="img-fluid" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
