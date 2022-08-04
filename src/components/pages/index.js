import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Carousel from "./carousel";
import Layouts from "./teachMe";
import Courses from "./courses";
import Plan from "./plan";
import Form from "react-bootstrap/Form";
import Footer from "./footer";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./index.css";

const Index = () => {
  return (
    <>
      <div className="top-navbar-section mb-5">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#" className="logo">
              {" "}
              CodingTek Academic
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Courses</Nav.Link>
                <Nav.Link href="#action2">Contacts</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <Navbar bg="light" variant="light">
          <Container className="menu">
            <Navbar.Brand href="#home" className="logo">
              CodingTek Academic
            </Navbar.Brand> */}
        {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        {/* </Container>
        </Navbar> */}
      </div>

      <Carousel />
      <Layouts />
      <Courses />
      <Plan />
      <Footer />
    </>
  );
};

export default Index;
