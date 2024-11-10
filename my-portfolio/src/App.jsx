import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import './App.css'; // Import custom styles for dark mode

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "bg-dark text-light abc" : "bg-light text-dark abc"}>
        <Navbar bg={darkMode ? "dark" : "light"} expand="lg" variant={darkMode ? "dark" : "light"}>
          <Container>
            <Navbar.Brand as={Link} to="/">
              Alpay's Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
              <Button variant="outline-primary" onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
