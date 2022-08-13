import React from "react";

import Layouts from "./teachMe";
import LangingPageBanner from "../pages/landingPageBanner";

// import Navbar from "./navbar";
import Container from "react-bootstrap/Container";
import Footer from "./footer";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import "./index.css";

const Index = () => {
  return (
    <>
      <Container className="d-flex justify-content-between align-items-center mb-3 mt-3">
        <Navbar.Brand href="/" className="logo">
          {" "}
          CodingTek Academic
        </Navbar.Brand>
        <div className="menu-container">
          <Link to="/login">
            <Button variant="danger">Login</Button>
          </Link>{" "}
          <Link to="register">
            <Button variant="secondary">Register</Button>{" "}
          </Link>
        </div>
      </Container>
      <LangingPageBanner />

      <Layouts />

      {/* <Plan /> */}
      <Footer />
    </>
  );
};

export default Index;
