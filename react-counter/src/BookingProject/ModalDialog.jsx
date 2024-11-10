import React, { useEffect, useRef } from "react"; // Import necessary React hooks
import i2 from "./imgs/i2.jpg";
import i3 from "./imgs/i3.jpg";
import i4 from "./imgs/i4.jpg";
function ModalDialog({ x, children }) {
  // Create a reference to access the dialog element
  const diaRef = useRef();

  useEffect(() => {
    // Access the current dialog element
    const dialog = diaRef.current;

    // Check if 'x' is false, do nothing and return early
    if (!x) {
      return;
    } else {
      // If 'x' is true, show the modal dialog
      dialog.showModal();
    }

    // Cleanup function to close the dialog when component unmounts or 'x' changes
    return () => {
      dialog.close();
    };
  }, [x]); // Dependency array, effect will run when 'x' changes

  return (
    <div>
      {/* Render the dialog element with a reference */}
      <dialog ref={diaRef}>
        <div className="container d-flex">
          <div className="grids col-9 ">
            <div className="row">
              <div className="col-3">
                <img src={i2} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i4} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={i2} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i4} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={i2} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i4} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={i2} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i4} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={i2} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i4} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={i2} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i4} alt="" style={{ width: "230px" }} />
              </div>
              <div className="col-3">
                <img src={i3} alt="" style={{ width: "230px" }} />
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
                  <span class="initials bg-info px-2 border rounded-circle ">T</span>
                  <div>
                    <span> Niharika  - </span>
                    <a href="#">India</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <p class="guest-review px-4 border rounded">
                  "The proximity to both Morjim and Ashwem beaches is
                  unbeatable. Waking up to the sound of the waves at La Ritz was
                  a dream."
                </p>
                <div class="review-author d-flex justify-content-between px-4 border rounded py-2">
                  <span class="initials bg-dark text-light px-2 border rounded-circle ">K</span>
                  <div>
                    <span> Niharika  - </span>
                    <a href="#">India</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <p class="guest-review px-4 border rounded">
                  "The proximity to both Morjim and Ashwem beaches is
                  unbeatable. Waking up to the sound of the waves at La Ritz was
                  a dream."
                </p>
                <div class="review-author d-flex justify-content-between px-4 border rounded py-2">
                  <span class="initials bg-danger px-2 border rounded-circle ">K</span>
                  <div>
                    <span> Niharika  - </span>
                    <a href="#">India</a>
                  </div>
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
          </div>
        </div>
        {children} {/* Render the children inside the dialog */}
      </dialog>
    </div>
  );
}

export default ModalDialog; // Export the ModalDialog component
