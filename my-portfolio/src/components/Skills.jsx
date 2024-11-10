
import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "CSS", "HTML"];

  return (
    <Container className="py-5">
      <h2 className="mb-4">My Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} key={index}>
            <ListGroup>
              <ListGroup.Item>{skill}</ListGroup.Item>
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
