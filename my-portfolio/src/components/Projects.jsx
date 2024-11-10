import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce application with React and Node.js.",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my skills and projects.",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Task Manager",
      description: "A task management app built with React and Redux.",
      img: "https://via.placeholder.com/300",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
