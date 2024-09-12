import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Filter to remove students with empty names and check for duplicate emails
  const filteredUsers = users
    .filter((user) => user.name.trim() !== "") // Skip students with empty names//if the name property of each student is not just whitespace.
    .filter(
      (user, index, self) =>
        index === self.findIndex((s) => s.email === user.email) // Ensure unique emails// if the current student's index is the same as the index of the first occurrence of their email.
    );
  return (
    <div className="container bg-info p-4 rounded">
      <h2>User List</h2>
      <Link to="/register" className="btn btn-primary mb-3">
        Register/Add User
      </Link>
      <table className="table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredUsers.map((user)=>( */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/view/${user.id}`} className="btn btn-info">
                  View
                </Link>
                <Link to={`/edit/${user.id}`} className="btn btn-warning mx-2">
                  Edit
                </Link>
                <Link to={`/delete/${user.id}`} className="btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
