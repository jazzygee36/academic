import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./index.css";

const Navbarr = () => {
  return (
    <div className="top-navbar-section mb-5">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand href="/" className="logo">
              {" "}
              CodingTek Academic
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#">Home</Nav.Link> */}

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="../">About Us</Nav.Link>

              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>

            <Link to="/plan">
              <Button variant="danger" className="mt-3">
                Choose a plan
              </Button>
            </Link>
            {/* </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbarr;
