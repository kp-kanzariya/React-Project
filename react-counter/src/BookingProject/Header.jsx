import React, { useState } from "react";
import CardComp from "./CardComp";
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false); // For controlling the visibility of date picker
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <div className="container-fluid bg-primary">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary container">
          <div className="container-fluid">
            <a
              className="navbar-brand text-light"
              href="/imggrid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Booking.com
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    List Your Property
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="btn btn-outline-secondary text-primary bg-light mb-2"
                    href="#"
                  >
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-outline-secondary text-primary bg-light"
                    href="#"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary container">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <i class="fa-solid fa-bed"></i>
              Stays
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span class="navbar-toggler-icon"></span> */}
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa-solid fa-plane"></i>
                    Flights
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa-solid fa-map-marker"></i>
                    Flight + Hotel
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa-solid fa-car"></i>
                    Car Rentals
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa-solid fa-map-marker"></i>
                    Attractions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa-solid fa-taxi"></i>
                    Airport Taxis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="main container my-4 text-light">
          <h1 className="">Find your next stay</h1>
          <h3 className="">
            Search low prices on hotels, homes and much more...
          </h3>
          <div class="container">
            <div class="row">
              <div class="col-md-3 my-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Morjim"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div class="col-md-3">
                <div
                  className="input-group"
                  onClick={() => setShowDatePicker(!showDatePicker)} // Toggle the visibility of DateRange picker
                  style={{ cursor: "pointer" }}
                >
                  <div className="input-group-text my-2">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Check-in date - Check-out date"
                    readOnly
                    value={`${state[0].startDate.toLocaleDateString()} - ${state[0].endDate.toLocaleDateString()}`}
                  />
                </div>

                {/* Conditionally show the DateRange picker */}
                {showDatePicker && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className="mt-2"
                  />
                )}
              </div>
              <div class="col-md-3 my-2">
                <select class="form-select">
                  <option value="2">2 adults</option>
                  <option value="3">3 adults</option>
                </select>
              </div>
              <div class="col-md-3 my-2">
                <button class="btn btn-light">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardComp searchTerm={searchTerm} />
    </div>
  );
}
