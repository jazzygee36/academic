import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.css";

function AutoLayoutExample() {
  return (
    <div className="teachMeBg pt-5 pb-5">
      <Container>
        <h4 className="text-center welcome ">WELCOME TO THE TEACHME</h4>
        <p className="text-center">
          We build awesome course & university sites! Don't miss out join us
          today!
        </p>
        <Row>
          <Col className="teachMeBox p-5 mb-4" lg="4" md="4" sm="12">
            <i class="fa fa-graduation-cap icons" aria-hidden="true" ></i>
            <h5> Custom Courses</h5>
            <p>
              Professional responsive and retina ready template for online
              learning websites!
            </p>
          </Col>
          <Col className="teachMeBox p-5 mb-4 " lg="4" md="4" sm="12">
          <i class="fa fa-fort-awesome  icons" aria-hidden="true"></i>
            <h5> Awesome Teachers</h5>
            <p>
              Professional responsive and retina ready template for online
              learning websites!
            </p>
          </Col>
          <Col className="teachMeBox p-5 " lg="4" md="4" sm="12">
          <i class="fa fa-book  icons" aria-hidden="true"></i>
            <h5> Pro Dashboards</h5>
            <p>
              Professional responsive and retina ready template for online
              learning websites!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AutoLayoutExample;
