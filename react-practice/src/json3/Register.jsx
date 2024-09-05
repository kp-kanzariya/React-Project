import React, { useState } from "react"; // Import React and useState hook for managing component state
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation and useNavigate for programmatic navigation

function Register() {
  // State hooks to manage form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create an object to send as JSON
    const jsonData = { name, email };
    console.log(jsonData); // Log the data to the console for debugging

    // Send POST request to the server to add a new user
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: { 'content-type': "application/json" },
      body: JSON.stringify(jsonData) // Convert the data to JSON format
    })
      .then((res) => {
        if (res.ok) { // Check if the response status is OK (status code 200-299)
          alert("Records inserted..!"); // Show an alert on successful record insertion
          navigate('/'); // Navigate back to the home page
        }
      });
  };

  return (
    <div>
      <h2>Register Page</h2>
      <div className="container">
        <div className="row justify-content-center text-start">
          <div className="col-xl-6">
            <div>
              {/* Navigation link to go back to the home page */}
              <Link to="/" className="btn btn-warning">
                Go back
              </Link>
            </div>
            <div>
              {/* Form for user registration */}
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Update the name state on input change
                    className="form-control"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn btn-primary my-2"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register; // Export the Register component
