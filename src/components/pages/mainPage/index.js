import React from "react";
import Avatar from "react-avatar";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HTML from "../../../assets/html.png";
import CSS from "../../../assets/css.png";

import "../index.css";

// import { useNavigate } from "react-router-dom";
// import jwt from "jsonwebtoken";
// import { Buffer } from "buffer";
// global.Buffer = Buffer;

const AppIndex = () => {
  // const navigate = useNavigate();

  // async function populateQuote() {
  //   const req = await fetch("http://localhost:5000/api/quote", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   });
  //   const data = req.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const user = jwt.decode(token);
  //     if (!user) {
  //       localStorage.removeItem("token");
  //       navigate = "/login";
  //     } else {
  //       populateQuote();
  //     }
  //   }
  // }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="logo">
            {" "}
            CodingTek Academic
          </Navbar.Brand>
          <Avatar size="45" name="C T A" />
        </Container>
      </Navbar>
      <div className="coursesBg pt-5 pb-5">
        <Container>
          <h4 className="text-center welcome text-white">OUR COURSES</h4>

          <Row>
            <Col className="d-flex justify-content-center mt-3">
              <Card>
                <Card.Img variant="top" src={HTML} className="phone-img" />
                <Card.Body>
                  <Card.Title>HTML</Card.Title>
                  <Card.Text>
                    Is the code that is used to structure a web page and its
                    content.
                  </Card.Text>
                  <a
                    href="https://en.wikipedia.org/wiki/HTML"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="primary">Read more...</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card>
                <Card.Img variant="top" src={CSS} className="phone-img" />
                <Card.Body>
                  <Card.Title>CSS</Card.Title>
                  <Card.Text>
                    CSS stands for Cascading Style Sheet is mainly for styling.
                  </Card.Text>
                  <a
                    href="https://en.wikipedia.org/wiki/CSS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="primary">Read more...</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AppIndex;
