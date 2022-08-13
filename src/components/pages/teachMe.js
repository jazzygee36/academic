import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.css";

function AutoLayoutExample() {
  return (
    <>
      <div className="teachMeBg pt-5 pb-5">
        <Container>
          <h4 className="text-center welcome ">About Us</h4>
          <p className="text-center">
            We are an education <strong>Tech</strong> organisation determined to
            redefine teaching-learning processes and experiences in schools,
            homes, and communities using technology and innovation to improve
            the quality of education at all levels for for both the old and
            young. We leverage cutting edge technologies to make the learning
            environment suitable for all. We equally provise capacity building
            programmes to teachers, students, and other stakeholders to support
            them in achieving global competitiveness.
          </p>
          <Row>
            <Col className="teachMeBox p-5 mb-4" lg="4" md="4" sm="12">
              <i class="fa fa-graduation-cap icons" aria-hidden="true"></i>
              <h5> Custom Courses</h5>
              <p>
                We create custom educational technology applications to address
                key educational problems whilst helping to shape a new narrative
                in education, such that teachers, learners and other
                stakeholders can reap the dividends of true quality education.
              </p>
            </Col>
            <Col className="teachMeBox p-5 mb-4 " lg="4" md="4" sm="12">
              <i class="fa fa-fort-awesome  icons" aria-hidden="true"></i>
              <h5> Awesome Teachers</h5>
              <p>
                Our teacher focused on making learning fun and interesting such
                that the learning environment can become stimulating and
                resourceful enough to inspire more creative and productive
                minds.
              </p>
            </Col>
            <Col className="teachMeBox p-5 " lg="4" md="4" sm="12">
              <i class="fa fa-book  icons" aria-hidden="true"></i>
              <h5> Pro Dashboards</h5>
              <p>
                At CodingTekAcademic, Education is our core business, because
                the Education of the mind is First among other things.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AutoLayoutExample;
