import React from "react";
import img1 from "./imgs/img.png";
import i2 from "./imgs/i2.jpg";
import i3 from "./imgs/i3.jpg";
import i4 from "./imgs/i4.jpg";
function CardComp() {
  return (
    <div>
      <div class="container mt-4">
        <div class="card d-flex flex-row p-3 position-relative">
          <div class="image-wrapper position-relative">
            <img src={i3} className="" style={{ width: "222px" }} />
          </div>

          <div class="flex-grow-1 ms-3">
            <div class="d-flex align-items-start">
              <h5 class="card-title me-2">Nirvana Hill Resort</h5>
              <span class="rating-badge">
                <i class="fas fa-thumbs-up"></i>
              </span>
              <span class="rating-badge">
                <i class="fas fa-coffee"></i>
              </span>
            </div>

            <div class="card-subtitle mb-2 text-muted">
              <a href="#" class="text-decoration-none">
                Curtorim
              </a>{" "}
              ·{" "}
              <a href="#" class="text-decoration-none">
                Show on map
              </a>
            </div>

            <p class="mb-1">
              <strong>Lake View Stone Cottage</strong>
              <br />1 extra-large double bed
            </p>
            <p class="text-danger">
              Only 3 rooms left at this price on our site
            </p>
          </div>

          <div class="d-flex flex-column justify-content-between text-end">
            <div>
              <p class=" btn btn-info">Very good</p>
              <span class="review-score ">8.4</span>
              <p class="text-muted">114 reviews</p>
            </div>
            <div class="price-info">
              ₹ 5,100
              <br />
              <span class="text-muted">+ ₹ 612 taxes and charges</span>
            </div>
            <a href="#" class="btn btn-primary mt-2">
              See availability
            </a>
          </div>
        </div>
        <div class="card d-flex flex-row p-3 my-2 position-relative">
          <div class="image-wrapper position-relative">
            <img src={i2} className="" style={{ width: "222px" }} />
          </div>

          <div class="flex-grow-1 ms-3">
            <div class="d-flex align-items-start">
              <h5 class="card-title me-2">Nirvana Hill Resort</h5>
              <span class="rating-badge">
                <i class="fas fa-thumbs-up"></i>
              </span>
              <span class="rating-badge">
                <i class="fas fa-coffee"></i>
              </span>
            </div>

            <div class="card-subtitle mb-2 text-muted">
              <a href="#" class="text-decoration-none">
                Curtorim
              </a>{" "}
              ·{" "}
              <a href="#" class="text-decoration-none">
                Show on map
              </a>
            </div>

            <p class="mb-1">
              <strong>Lake View Stone Cottage</strong>
              <br />1 extra-large double bed
            </p>
            <p class="text-danger">
              Only 3 rooms left at this price on our site
            </p>
          </div>

          <div class="d-flex flex-column justify-content-between text-end">
            <div>
              <p class=" btn btn-info">Very good</p>
              <span class="review-score ">8.4</span>
              <p class="text-muted  ">114 reviews</p>
            </div>
            <div class="price-info text-warning">
              ₹ 5,100
              <br />
              <span class="text-muted">+ ₹ 612 taxes and charges</span>
            </div>
            <a href="#" class="btn btn-primary mt-2">
              See availability
            </a>
          </div>
        </div>
        <div class="card d-flex flex-row p-3 position-relative">
          <div class="image-wrapper position-relative">
            <img src={i4} className="" style={{ width: "222px" }} />
          </div>

          <div class="flex-grow-1 ms-3">
            <div class="d-flex align-items-start">
              <h5 class="card-title me-2">Nirvana Hill Resort</h5>
              <span class="rating-badge">
                <i class="fas fa-thumbs-up"></i>
              </span>
              <span class="rating-badge">
                <i class="fas fa-coffee"></i>
              </span>
            </div>

            <div class="card-subtitle mb-2 text-muted">
              <a href="#" class="text-decoration-none">
                Curtorim
              </a>{" "}
              ·{" "}
              <a href="#" class="text-decoration-none">
                Show on map
              </a>
            </div>

            <p class="mb-1">
              <strong>Lake View Stone Cottage</strong>
              <br />1 extra-large double bed
            </p>
            <p class="text-danger">
              Only 3 rooms left at this price on our site
            </p>
          </div>

          <div class="d-flex flex-column justify-content-between text-end">
            <div>
              <p class=" btn btn-info">Very good</p>
              <span class="review-score ">8.4</span>
              <p class="text-muted">114 reviews</p>
            </div>
            <div class="price-info text-warning">
              ₹ 5,100
              <br />
              <span class="text-muted">+ ₹ 612 taxes and charges</span>
            </div>
            <a href="#" class="btn btn-primary mt-2">
              See availability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComp;
