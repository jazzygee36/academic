import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Bootstrap from "../../assets/bootstrap.png";
import JavaScript from "../../assets/javascript.png";
import React from "../../assets/React.png";
import Node from "../../assets/node.png";

import "./index.css";

function AutoLayoutExample() {
  return (
    <div className="coursesBg pt-5 pb-5">
      <Container>
        <h4 className="text-center welcome text-white">OUR COURSES</h4>
        <p className="text-center text-white mb-5"></p>
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
        <Row>
          <Col className="d-flex justify-content-center mt-3">
            <Card>
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
            <Card>
              <Card.Img variant="top" src={JavaScript} />
              <Card.Body>
                <Card.Title>JAVASCRIPT</Card.Title>
                <Card.Text>
                  Is a programming language that is one of the core
                  technologies.
                </Card.Text>
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
          <Col className="d-flex justify-content-center mt-3">
            <Card>
              <Card.Img variant="top" src={React} className="phone-img" />
              <Card.Body>
                <Card.Title>REACT</Card.Title>
                <Card.Text>
                  React is a free and open-source front-end JavaScript library.
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
          <Col className="d-flex justify-content-center mt-3">
            <Card>
              <Card.Img variant="top" src={Node} className="phone-img" />
              <Card.Body>
                <Card.Title>NODE JS</Card.Title>
                <Card.Text>
                  Node.js is an open-source, cross-platform, back-end JavaScript
                  .
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
  );
}

export default AutoLayoutExample;
