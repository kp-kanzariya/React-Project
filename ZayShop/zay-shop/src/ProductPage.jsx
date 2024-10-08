import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

function ProductPage() {
  const { pId } = useParams();
  const [size, setSize] = useState("S");
  const [qnt, setQnt] = useState(1);
  const [product1, setProduct1] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5555/product/${pId}`)
      .then((response) => response.json())
      .then((data) => setProduct1(data));
  }, [pId]);

  // console.log(product1);

  
  
  return (
    <div>
      <Header/>
      <div>
        {/* Open Content */}

        <section className="bg-light">
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                  <img
                    className="card-img img-fluid"
                    src={product1.img1}
                    alt="Card image cap"
                    id="product-detail"
                  />
                </div>
                <div className="row">
                  {/*Start Controls*/}
                  <div className="col-1 align-self-center">
                    <a
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="text-dark fas fa-chevron-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                  </div>
                  {/*End Controls*/}
                  {/*Start Carousel Wrapper*/}
                  <div
                    id="multi-item-example"
                    className="col-10 carousel slide carousel-multi-item"
                    data-bs-ride="carousel"
                  >
                    {/*Start Slides*/}
                    <div
                      className="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      {/*First slide*/}
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img2}
                                alt="Product Image 1"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img3}
                                alt="Product Image 2"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img4}
                                alt="Product Image 3"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.First slide*/}
                      {/*Second slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img5}
                                alt="Product Image 4"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img6}
                                alt="Product Image 5"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img5}
                                alt="Product Image 6"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.Second slide*/}
                      {/*Third slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img3}
                                alt="Product Image 7"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img1}
                                alt="Product Image 8"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src={product1.img2}
                                alt="Product Image 9"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.Third slide*/}
                    </div>
                    {/*End Slides*/}
                  </div>

                  <div className="col-1 align-self-center">
                    <a
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i className="text-dark fas fa-chevron-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  {/*End Controls*/}
                </div>
              </div>
              {/* col end */}
              <div className="col-lg-7 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h1 className="h2">{product1.title} </h1>
                    <p className="h3 py-2">${product1.price}</p>
                    <p className="py-2">
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-secondary" /> <br />
                      <span className="list-inline-item text-dark my-2">
                        Rating {product1.rating} | {product1.cmt} Comments
                      </span>
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <h6>Brand:</h6>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted">
                          <strong>{product1.brand}</strong>
                        </p>
                      </li>
                    </ul>
                    <h6>Description:</h6>
                    <p>{product1.desc}</p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <h6>Avaliable Color :</h6>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted">
                          <strong>{product1.colors}</strong>
                        </p>
                      </li>
                    </ul>
                    <h6>Specification:</h6>
                    <ul className="list-unstyled pb-3">
                      <li>{product1.sp} </li>
                    </ul>
                    <form action method="GET">
                      <input
                        type="hidden"
                        name="product-title"
                        defaultValue="Activewear"
                      />
                      <div className="">
                        <div className="col-auto">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              Size :
                              <input
                                type="text"
                                name="product-size"
                                id="product-size"
                                // defaultValue={size}
                                maxLength={1}
                                value={size}
                              />
                            </li>{" "}
                            <br />
                            <li
                              className="list-inline-item m-2 "
                              onClick={() => setSize("S")}
                            >
                              <span className="btn btn-success btn-size">
                                S
                              </span>
                            </li>
                            <li
                              className="list-inline-item"
                              onClick={() => setSize("M")}
                            >
                              <span className="btn btn-success btn-size">
                                M
                              </span>
                            </li>
                            <li
                              className="list-inline-item"
                              onClick={() => setSize("L")}
                            >
                              <span className="btn btn-success btn-size">
                                L
                              </span>
                            </li>
                            <li
                              className="list-inline-item"
                              onClick={() => setSize("XL")}
                            >
                              <span className="btn btn-success btn-size">
                                XL
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-auto">
                          <ul className="list-inline pb-2">
                            <li className="list-inline-item text-right m-2">
                              Quantity :{product1.cnt}
                              <input
                                type="hidden"
                                name="product-quanity"
                                id="product-quanity"
                                defaultValue={1}
                              />
                            </li>{" "}
                            <br />
                            <li className="list-inline-item" onClick={()=>setQnt(qnt - 1)}>
                              <span className="btn btn-success" id="btn-minus">
                                -
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span
                                className="badge bg-secondary"
                                id="var-value"
                              >
                                {qnt}
                              </span>
                            </li>
                            <li className="list-inline-item" onClick={()=>setQnt(qnt + 1)}>
                              <span className="btn btn-success" id="btn-plus">
                                +
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row pb-3">
                        <div className="col d-grid">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                            name="submit"
                            value="buy"
                          >
                            Buy
                          </button>
                        </div>
                        <div className="col d-grid">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                            name="submit"
                            value="addtocard"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Close Content */}
      </div>
      <Footer/>
    </div>
  );
}

export default ProductPage;
