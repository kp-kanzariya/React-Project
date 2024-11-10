import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            I'm a fullstack developer passionate about creating impactful web applications.
            I enjoy working on challenging projects and constantly improving my skills in
            frontend and backend development.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
