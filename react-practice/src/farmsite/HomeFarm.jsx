import React from "react";
import Header from "./Header";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Main from "./Main";


export default function HomeFarm() {
  return (
      <div>
        <BrowserRouter>
      
        
      

        <Routes>
          {/* Route for Home component */}
          {/* <Route path="/head" element={<Header />} /> */}
          
          
          {/* <Route path="/about" element={<About />} /> */}
          
       
   
          
        </Routes>
          </BrowserRouter>
          <Header />
          <Main/>

      
    </div>
  );
}
