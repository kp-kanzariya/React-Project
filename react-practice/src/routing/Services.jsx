import React from 'react'; // Import React library for creating components
import { Link, Outlet } from 'react-router-dom'; // Import Link for navigation and Outlet for rendering nested routes

function Services() {
  return (
    <div>
      {/* Navigation link to the Service1 component */}
      <Link to='/services/service1'>Service 1</Link>

      {/* Additional placeholder links (not functional, no 'to' attribute) */}
      <Link>Service 1</Link>
      <Link>Service 1</Link>
      
      {/* Outlet component renders the matched child route components */}
      <Outlet/>
    </div>
  );
}

export default Services; // Export the Services component for use in routing
