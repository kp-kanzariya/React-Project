import React from "react";
import "./index.css";

function UserProfile() {
  return (
    <div>
      <div>
        {/* Profile Header Section */}
        <section className="profile-header">
          <h1>User Profile</h1>
          <p>Explore your details and manage your account.</p>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-shop">Shop Now</button>
            <button className="btn btn-explore ms-3">Explore</button>
          </div>
        </section>
        {/* Profile Details Section */}
        <section className="profile-details container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="profile-card">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile Picture"
                />
                <h3>John Doe</h3>
                <p>Email: johndoe@example.com</p>
                <p>Location: London, UK</p>
                <div className="details">
                  <p>
                    <i className="fas fa-map-marker-alt" /> 43 Raymouth Rd,
                    London 3910
                  </p>
                  <p>
                    <i className="fas fa-envelope" /> johndoe@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone" /> +1 294 3925 3939
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
