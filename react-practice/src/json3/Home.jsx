import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  // State to hold the fetched student data
  const [students, setStudents] = useState([]);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => {
        // Set state with fetched data
        setStudents(data);
      });
  }, []);

  // Filter to remove students with empty names and check for duplicate emails
  // const filteredStudents = students
  //   .filter(student => student.name.trim() !== "") // Skip students with empty names//if the name property of each student is not just whitespace.
  //   .filter((student, index, self) => 
  //     index === self.findIndex(s => s.email === student.email) // Ensure unique emails// if the current student's index is the same as the index of the first occurrence of their email.
  //   );

  return (
    <div>
      <h2>HOME PAGE</h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div>
              {/* Link to the Register page */}
              <Link to="/register" className="btn btn-warning">
                Register
              </Link>
            </div>
            <div>
              {/* Table to display the student data */}
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {filteredStudents.map((student) => ( */}
                  {students.map((student) => (
                    <tr key={student.email}> {/* Use email as key assuming it's unique */}
                      <td>{student.name || "No Name Provided"}</td> {/* Display a default message if name is empty */}
                      <td>{student.email || "No Email Provided"}</td> {/* Display a default message if email is empty */}
                      <td>
                        <button className="btn btn-info">View</button>
                        <button className="btn btn-success mx-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Uncomment to see a list of student names */}
      {/* 
        {filteredStudents.map((student) => (
          <li key={student.email}>{student.name}</li> 
        ))
      */}
    </div>
  );
}

export default Home;
