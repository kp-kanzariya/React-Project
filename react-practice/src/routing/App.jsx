import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Service1 from "./Service1";

// npm i react-router-dom

function AppRoute() {
  return (
    <div className="app">
      <h1>Route Example</h1>
      <BrowserRouter>
        <Link to="/123">Home</Link>
        <Link to="/1234">About</Link>
        <Link to="/services">Services</Link>

        <Routes>
          <Route path="/123" element={<Home />}></Route>
          <Route path="/1234" element={<About />}></Route>
          <Route path="/services" element={<Services />}>
            <Route path="/services/service1" element={<Service1 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Home/>
     <About/>
     <Services/> */}
    </div>
  );
}

export default AppRoute;
