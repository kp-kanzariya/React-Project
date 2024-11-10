import img1 from "./imgs/img.png";
import i2 from "./imgs/i2.jpg";
import i3 from "./imgs/i3.jpg";
import i4 from "./imgs/i4.jpg";
export default function LazyC() {
    return (<div>
        <div class="container mt-5 d-flex  ">
          <div class="card position-relative mx-2" style={{ width: "18rem" }}>
            <img src={img1} class="card-img-top" alt="Card image" />
  
            <button class="share-btn">
              <i class="fas fa-share-alt"></i>
            </button>
  
            <div class="card-body">
              <h5 class="card-title">Stay in Prince's Purple Rain house</h5>
  
              <h6 class="card-subtitle mb-2">Hosted by Wendy and Lisa</h6>
  
              <p class="coming-soon">Coming September</p>
            </div>
          </div>
          <div class="card position-relative mx-2" style={{ width: "18rem" }}>
            <img src={i3} class="card-img-top" alt="Card image" />
  
            <button class="share-btn">
              <i class="fas fa-share-alt"></i>
            </button>
  
            <div class="card-body">
              <h5 class="card-title">Stay in Prince's Purple Rain house</h5>
  
              <h6 class="card-subtitle mb-2">Hosted by Wendy and Lisa</h6>
  
              <p class="coming-soon">Coming September</p>
            </div>
          </div>
          
          <div class="card position-relative mx-2" style={{ width: "18rem" }}>
            <img src={i4} class="card-img-top" alt="Card image" />
  
            <button class="share-btn">
              <i class="fas fa-share-alt"></i>
            </button>
  
            <div class="card-body">
              <h5 class="card-title">Stay in Prince's Purple Rain house</h5>
  
              <h6 class="card-subtitle mb-2">Hosted by Wendy and Lisa</h6>
  
              <p class="coming-soon">Coming September</p>
            </div>
          </div>
        </div>
      </div>
    )
  }