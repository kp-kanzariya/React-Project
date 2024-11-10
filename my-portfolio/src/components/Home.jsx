import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-circle img-fluid mb-3"
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Hi, I'm Alpay 👋</h1>
          <h2 className="text-muted">Fullstack Developer</h2>
          <p>
            I'm Alpay, a fullstack developer with the goal of advancing my career
            and participating in inspiring projects. Let's shape digital solutions together!
          </p>
          <div className="mt-4">
            <Link to="/contact">
              <Button variant="primary" className="me-2">
                Contact me
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="secondary">My Projects</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
