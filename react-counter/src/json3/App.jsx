import { useState } from "react"; // Import React hook for managing state
import Home from "./Home"; // Import Home component
import Register from "./Register"; // Import Register component
import "../../node_modules/bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS for styling
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; // Import routing components from react-router-dom

// npm i react-router-dom
// npm i bootstrap  react-bootstrap
// npm i json-server db.json
// json-server --watch db.json --port 5000

function AppJson() {
  return (
    <>
      <div className="app">
        <h1>JSON-Server CRUD Example</h1>

        {/* Set up routing with BrowserRouter */}
        <BrowserRouter>
          {/* Navigation links */}
          <Link to='/'>Home</Link>
          {/* <Link to='/register'>Register</Link> */}
          
          {/* Define routes for the application */}
          <Routes>
            {/* Route for Home component */}
            <Route path="/" element={<Home/>}></Route>
            {/* Route for Register component */}
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
        </BrowserRouter>

        {/* Alternative component rendering (commented out) */}
        {/* <Home/>
        <Register/> */}
      </div>
    </>
  );
}

export default AppJson; // Export the AppJson component
