import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "./AdminEdits";

function AdminSide() {
  // const { pId } = useParams();
  const [product1, setProduct1] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5555/product`)
      .then((response) => response.json())
      .then((data) => setProduct1(data));
  }, []);

  console.log(product1);
  return (
    <div>
      
      {/* <ProductForm/> */}
      <div>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          {/* Left: Admin Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
          <a
            className="navbar-brand text-success logo h1 align-self-center"
            href="#"
          >
            Zay
          </a>
            <span className="fw-bold">Admin Panel</span>
          </a>

          <div className="d-flex align-items-center ms-auto">
            
            <button className="btn btn-light position-relative me-3">
              <i className="fas fa-bell"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3 
              </span>
            </button>

            <div className="dropdown me-3">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="userMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle"></i> John Doe
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>

            <button className="btn btn-danger">
              <a href="/" className="text-decoration-none text-light"><i className="fas fa-sign-out-alt"></i> Logout</a>
            </button>
          </div>
        </div>
      </nav>
    </header>
        <div className="content">
          <p className="bg-primary p-2 text-light">
            All Products List{" "}
            <a href="/add" className="text-light mx-3 bg-info p-2 rounded text-decoration-none">
              Add Items<i class="fa-solid fa-plus mx-1"></i>
            </a>
            <a href="/add" className="text-light mx-3 bg-info p-2 rounded text-decoration-none">
              More
            </a>
          </p>
          {/* <li><img src={product.img1 } alt="" /></li> */}
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Products IMG</th>
                <th>Title</th>
                <th>Desc</th>
                <th>Brand</th>
                <th>Colors</th>
                <th>Specifiacation</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Comments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product1.map((prod) => (
                <tr key={prod.id}>
                  <td>
                    <img
                      src={prod.img}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img1}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img2}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img3}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img4}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img5}
                      className="product-img"
                      alt="Product Image"
                    />
                  </td>
                  <th>{prod.title}</th>
                  <th>{prod.desc}</th>
                  <th>{prod.brand}</th>
                  <th>{prod.colors}</th>
                  <th>{prod.sp}</th>
                  <th>{prod.cnt}</th>
                  <th>{prod.price}</th>
                  <th>{prod.rating}</th>
                  <th>{prod.cmt}</th>
                  <td>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="fas fa-times" />
                    </button>
                    <a href="/edit">
                    <button className="btn btn-sm btn-outline-success"  >
                      <i class="fa-solid fa-pen"></i>
                      {/* <i class="fa-solid fa-check"></i> */}
                    </button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-100 bg-black py-3">
    <div className="container">
      <div className="row pt-2">
        <div className="col-12">
          <p className="text-left text-light">
            Copyright © 2021 Company Name 
            | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default AdminSide;


