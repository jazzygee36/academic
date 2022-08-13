// import React from "react";
import Avatar from "react-avatar";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HTML from "../../../assets/html.png";
import CSS from "../../../assets/css.png";
import Carousel from "../../pages/carousel";
import Bootstrap from "../../../assets/bootstrap.png";
import JavaScript from "../../../assets/javascript.png";
import React from "../../../assets/React.png";
import Node from "../../../assets/node.png";

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
          <Avatar size="40" name="C T A" />
        </Container>
      </Navbar>
      <Carousel />
      <div className=" pt-5 pb-5">
        <h4 className="text-center welcome ">OUR COURSES</h4>
        <Container>
          <Row>
            <Col>
              <Card className=" card-layout">
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
            <Col>
              <Card className=" card-layout">
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
          <Row>
            <Col className=" mt-3">
              <Card className=" card-layout">
                <Card.Img variant="top" src={Bootstrap} className="phone-img" />
                <Card.Body>
                  <Card.Title>BOOTSTRAP</Card.Title>
                  <Card.Text>
                    Bootstrap is a free and open-source CSS framework.
                  </Card.Text>
                  <a
                    href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="primary">Read more...</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card className=" card-layout">
                <Card.Img
                  variant="top"
                  src={JavaScript}
                  className="phone-img"
                />
                <Card.Body>
                  <Card.Title>JAVASCRIPT</Card.Title>
                  <Card.Text>Is a programming language technologies.</Card.Text>
                  <a
                    href="https://en.wikipedia.org/wiki/JavaScript"
                    taret="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="primary">Read more...</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className=" mt-3">
              <Card className=" card-layout">
                <Card.Img variant="top" src={React} className="phone-img" />
                <Card.Body>
                  <Card.Title>REACT</Card.Title>
                  <Card.Text>
                    React is a free and open-source front-end JavaScript
                    library.
                  </Card.Text>
                  <a
                    href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                    targte="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="primary">Read more...</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className=" mt-3">
              <Card className=" card-layout">
                <Card.Img variant="top" src={Node} className="phone-img" />
                <Card.Body>
                  <Card.Title>NODE JS</Card.Title>
                  <Card.Text>
                    Node.js is an open-source, cross-platform, back-end
                    JavaScript .
                  </Card.Text>
                  <a
                    href="https://en.wikipedia.org/wiki/Node.js"
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
