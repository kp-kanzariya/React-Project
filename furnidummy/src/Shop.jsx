import React from "react";

import { products } from './App'
import {Link} from 'react-router-dom'

function Shop() {
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
              {/* Start Column 1 */}
              {products && products.map((p)=>(
              <div className="col-12 col-md-4 col-lg-3 mb-5" key={p.id}>
                <a className="product-item" href="#">
                  <img
                    src={p.img}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">{p.prodName}</h3>
                    <strong className="product-price">${p.price}</strong>
                  <Link className="icon-cross" to={`/cart/${p.id}`}>
                    <img src="images/cross.svg" className="img-fluid" />
                  </Link>
                </a>
                </div>
              ))}
              {/* End Column 1 */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
