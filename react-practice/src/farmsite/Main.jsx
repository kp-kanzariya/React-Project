import React from "react";
import i1 from "./img.jpg";

export default function Main() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={
                "https://img.freepik.com/free-photo/farm-concept-high-angle_23-2148573865.jpg"
              }
              style={{ height: "600px" }}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={i1}
              style={{ height: "600px" }}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={i1}
              style={{ height: "600px" }}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="text-center my-4">
        <h3 className="text-success">Servises</h3>
        <h1>Providing Fresh Produce Every Single Day</h1>
      </div>

      <div className="cards d-flex m-5">
        <div class="card mx-1" style={{ width: "300px" }}>
          <img
            class="card-img-top"
            style={{ height: "100px", width: "100px" }}
            src={
              "https://static.vecteezy.com/system/resources/previews/015/306/583/non_2x/farm-plant-icon-outline-style-vector.jpg"
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card mx-1" style={{ width: "300px" }}>
          <img
            class="card-img-top"
            style={{ height: "100px", width: "100px" }}
            src={
              "https://static.vecteezy.com/system/resources/previews/015/306/583/non_2x/farm-plant-icon-outline-style-vector.jpg"
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card mx-1" style={{ width: "300px" }}>
          <img
            class="card-img-top"
            style={{ height: "100px", width: "100px" }}
            src={
              "https://static.vecteezy.com/system/resources/previews/015/306/583/non_2x/farm-plant-icon-outline-style-vector.jpg"
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card mx-1" style={{ width: "300px" }}>
          <img
            class="card-img-top"
            style={{ height: "100px", width: "100px" }}
            src={
              "https://static.vecteezy.com/system/resources/previews/015/306/583/non_2x/farm-plant-icon-outline-style-vector.jpg"
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="cards d-flex m-5">
        <div class="card" style={{ width: "300px" }}>
          <img
            class="card-img-top"
            style={{ height: "100px", width: "100px" }}
            src={
              "https://static.vecteezy.com/system/resources/previews/015/306/583/non_2x/farm-plant-icon-outline-style-vector.jpg"
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card mx-1" style={{ width: "300px" }}>
          <img
            class="card-img-top"
            style={{ height: "100px", width: "100px" }}
            src={
              "https://static.vecteezy.com/system/resources/previews/015/306/583/non_2x/farm-plant-icon-outline-style-vector.jpg"
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card mx-1" style={{ width: "300px" }}>
          <img
            class="card-img-top"
            style={{ height: "100px", width: "100px" }}
            src={
              "https://static.vecteezy.com/system/resources/previews/015/306/583/non_2x/farm-plant-icon-outline-style-vector.jpg"
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card mx-1" style={{ width: "300px" }}>
          <img
            class="card-img-top"
            style={{ height: "100px", width: "100px" }}
            src={
              "https://static.vecteezy.com/system/resources/previews/015/306/583/non_2x/farm-plant-icon-outline-style-vector.jpg"
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="new bg-success d-flex p-4 ">
        <div className="left mx-5">
          <img
            className=""
            src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/img_long_5.jpg"
            alt=""
          />
        </div>
        <div className="right my-5">
          <h3 className="my-4">Why Choose Us</h3>
          <h2>More than 50 year experience in agriculture industry </h2>
          <p className="my-2">
            Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi illum
            minima nostrum <br /> perspiciatis error consequatur sit nulla.{" "}
          </p>
          <div className="ic m-5 w-50">
            <div className="icn d-flex my-4">
              <div className="icn m-3 text-light">
                <i class="fa-solid fa-heart"></i>

                {/* <i class="fa-solid fa-cloud-showers-water"></i> */}
              </div>
              <div className="tx">
                <h4 className="m-0"> Plants needs rain</h4>
                <p className="m-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="icn d-flex my-4 ">
              <div className="icn m-3">
                <i class="fa-solid fa-heart"></i>

                {/* <i class="fa-solid fa-cloud-showers-water"></i> */}
              </div>
              <div className="tx">
                <h4 className="m-0"> Plants needs rain</h4>
                <p className="m-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="icn d-flex my-4">
              <div className="icn m-3">
                <i class="fa-solid fa-heart"></i>

                {/* <i class="fa-solid fa-cloud-showers-water"></i> */}
              </div>
              <div className="tx">
                <h4 className="m-0"> Plants needs rain</h4>
                <p className="m-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
          </div>
<div id="carouselExampleIndicators" class="carousel slide w-75" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-50" src="https://static.vecteezy.com/system/resources/previews/026/798/266/large_2x/farmer-s-hands-over-farm-plants-realistic-image-ultra-hd-high-design-very-detailed-free-photo.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  );
}
