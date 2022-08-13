import React from "react";

import Carousel from "./carousel";
import Layouts from "./teachMe";
import Courses from "./courses";
import Plan from "./plan";
// import Navbar from "./navbar";
import Container from "react-bootstrap/Container";
import Footer from "./footer";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";

import "./index.css";

const Index = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div>
        <Container className="d-flex justify-content-between align-items-center mb-3 mt-3">
        <Navbar.Brand href="/" className="logo">
              {" "}
              CodingTek Academic
            </Navbar.Brand>
          <div className="menu-container">
          <Link to="/login">
          <Button variant="danger">Login</Button></Link>{" "}
          <Link to="register">
          <Button variant="secondary">Register</Button>{" "}

          </Link>
          </div>
        </Container>
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
