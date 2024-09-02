import React from "react";

const data = [
  { id: 1, city: "Goa", title: "t1", desc: "desc1" },
  { id: 2, city: "Goa", title: "t1", desc: "desc1" },
  { id: 3, city: "Goa", title: "t1", desc: "desc1" },
];

function Booking() {
  return (
    <div>
      <input type="text" />
      <button>Search</button>
      {data.map((v) => (
        <div className="container-fluid bg-info">
          <div className="row bg-warning p-2 justify-content-around gap-2">
            <div className="col-xl-1 rounded-pill text-danger fw-bold fs-1 border border-dark border-3">
              {v.city} 
            </div>
            <div className="col-xl-2 rounded-pill text-danger fw-bold text-xl-center fs-1 border border-dark border-3">
              {v.title}
            </div>
            <div className="col-xl-3 rounded-pill text-danger fw-bold fs-1 border border-dark border-3">
              {v.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Booking;
