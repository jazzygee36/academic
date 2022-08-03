import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Carousel from "./carousel";
import Layouts from "./teachMe";
import Courses from "./courses"
import Plan from "./plan"
import Footer from "./footer"
import "./index.css";

const Index = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="menu">
          <Navbar.Brand href="#home" className="logo">
            CodingTek Academic
          </Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>

      <Carousel />
      <Layouts />
      <Courses />
      <Plan />
      <Footer />
    </>
  );
};

export default Index;
