// Import necessary hooks and components
import { useState } from "react"; // Import useState hook for state management
import Home from "./Home"; // Import the Home component
import About from "./About"; // Import the About component
import Services from "./Services"; // Import the Services component
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; // Import routing components from react-router-dom
import Service1 from "./Service1"; // Import the Service1 component

// Note: Ensure that react-router-dom is installed using `npm i react-router-dom`

// Define the main component for routing
function AppRoute() {
  return (
    <div className="app">
      {/* Display a heading */}
      <h1>Route Example</h1>
      
      {/* Wrap routing components inside BrowserRouter to enable routing functionality */}
      <BrowserRouter>
        {/* Navigation links to different routes */}
        <Link to="/homeany">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>

        {/* Define Routes to render different components based on the URL path */}
        <Routes>
          {/* Route for Home component */}
          <Route path="/homeany" element={<Home />} />
          
          {/* Route for About component */}
          <Route path="/about" element={<About />} />
          
          {/* Route for Services component */}
          {/* Nested route for Service1 component under /services path */}
          <Route path="/services" element={<Services />}>
            <Route path="/services/service1" element={<Service1 />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* The following commented-out lines show alternative ways to include components without routing */}
      {/* <Home/>
      <About/>
      <Services/> */}
    </div>
  );
}

export default AppRoute; // Export the AppRoute component for use in other parts of the application
