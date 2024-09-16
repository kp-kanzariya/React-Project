import { useState } from "react"; // Import useState hook for managing component state
import ModalDialog from "./ModalDialog";
import img1 from "./imgs/img.png";
import i2 from "./imgs/i2.jpg";
import i3 from "./imgs/i3.jpg";
import i4 from "./imgs/i4.jpg";
// import i5 from "./imgs/i5.jpg";

export default function ImgGrid() {
  const [show, setShow] = useState(false);
  return (
    <>
      <ModalDialog x={show}>
          {/* Modal content */}
          {/* <h1>THIS IS ALERT</h1> */}
          {/* Button to close the modal */}
          <button className="btn btn-info" onClick={() => setShow(false)}>Close</button>
        </ModalDialog>
      {/* <button >Open Modal</button> */}
      <div className="container-fluid  ">
        <div className="container d-flex justify-content-between ">
          
          <div className="star ">
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
          </div>
          <div className="share">
            <i class="fa-solid fa-heart mx-4"></i>
            <i class="fa-solid fa-share mx-4"></i>
            <button className="btn btn-primary">Reserve</button>
          </div>
        </div>
        <div className="container d-flex justify-content-between ">
          <div className="texts d-inline">
            <h2>The Sunbliss Cottages</h2>
            <h6 className="d-inline">
              MORJIM HOUSE BEARING NO 980A AND 980B MADHAWALA MORJIM GOA, 403512
              Morjim, India -
            </h6>
            <a href=""> Excellent location - show map </a>
          </div>
          <div className="right d-flex align-items-center justify-content-center p-4 ">
            <i className="fa-solid fa-phone"></i>
            <a href="" className="mx-2 ">
              We Price Match
            </a>
          </div>
        </div>
        {/* <div class="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-12 mb-3">
                  <img src={i2} class="img-fluid" alt="Image 1" />
                </div>
                <div className="col-12">
                  <img src={i3} class="img-fluid" alt="Image 2" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={i4} class="img-fluid" alt="Image 3" />
            </div>
          </div>
        </div> */}
        <div className="container d-flex grids " onClick={() => setShow(true)} >
          <div class="col-9 " style={{cursor:"pointer"}}>
            <div className="row">
              <div className="col-3">
                <div className="row">
                  <div className="col-12 mb-3">
                    <img src={i2} class="img-fluid" style={{height:"235px"}} alt="Image 1" />
                  </div>
                  <div className="col-12">
                    <img src={i3} class="img-fluid" style={{height:"235px"}} alt="Image 2" />
                  </div>
                </div>
              </div>
              <div className="col-9 mb-2 ">
                <img src={i4} class="img-fluid" alt="Image 3" />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <img src={i3} class="img-fluid" alt="Image 2" />
              </div>
              <div className="col-2">
                <img src={i3} class="img-fluid" alt="Image 2" />
              </div>
              <div className="col-2">
                <img src={i3} class="img-fluid" alt="Image 2" />
              </div>
              <div className="col-2">
                <img src={i3} class="img-fluid" alt="Image 2" />
              </div>
              <div className="col-2">
                <img src={i3} class="img-fluid" alt="Image 2" />
              </div>
              <div className="col-2">
                <img src={i3} class="img-fluid" alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card m-2">
              <div class="card-header">
                <div class="rating">
                  <span class="badge bg-primary px-4 py-2 mx-2">Superb</span>
                  <span class="star-rating text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                  <span class="review-count">25 reviews</span>
                </div>
              </div>
              <div class="card-body">
                <p class="guest-review px-4 border rounded">
                  "The proximity to both Morjim and Ashwem beaches is
                  unbeatable. Waking up to the sound of the waves at La Ritz was
                  a dream."
                </p>
                <div class="review-author d-flex justify-content-between px-4 border rounded py-2">
                  <span class="initials bg-primary px-2 border rounded-circle ">K</span>
                  <div>
                    <span> Niharika  - </span>
                    <a href="#">India</a>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <p class="top-rated-beach">Top-rated beach nearby: <span className="p-2 text-light m-2 rounded bg-info"> 8.6</span></p>
              </div>
            </div>
            <iframe className="m-2 border p-2" style={{height:"270px"}} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.4907297672!2d72.25008569347868!3d23.01990207203543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1726374800050!5m2!1sen!2sin"} ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
