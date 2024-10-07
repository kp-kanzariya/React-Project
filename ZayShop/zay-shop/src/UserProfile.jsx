import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

function UserProfile() {
  // Dummy user data
  const user = {
    profilePicture: "https://via.placeholder.com/150", // Placeholder for profile image
    name: "John Doe",
    email: "john.doe@example.com",
    location: "San Francisco, CA",
    bio: "I am a front-end developer with a passion for building responsive and interactive websites. I love learning new technologies and improving my skills.",
    joined: "January 2021",
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Row>
          <Col md={4} className="text-center">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "150px", height: "150px", border: "5px solid #4CAF50" }}
            />
            <h4>{user.name}</h4>
            <p className="text-muted">{user.location}</p>
          </Col>
          <Col md={8}>
            <Card.Body>
              <h5 className="mb-3">User Information</h5>
              <p>
                <strong>Email: </strong> {user.email}
              </p>
              <p>
                <strong>Location: </strong> {user.location}
              </p>
              <p>
                <strong>Joined: </strong> {user.joined}
              </p>
              <p>
                <strong>Bio: </strong> {user.bio}
              </p>
              <Button variant="success" className="mt-3">
                Edit Profile
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default UserProfile;
