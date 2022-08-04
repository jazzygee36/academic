import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "../navbar";
import "../index.css";

const Plan = () => {
  return (
    <>
      <Navbar />

      <div className="plan-section pt-4 pb-4">
        <Container>
          <h2 className="mt-5">Subscriptions</h2>
          <p className="note mb-5">
            Please note that we receive payment before tutorial and money paid
            is not refundable.
          </p>
          <Row>
            <Col>
              <div className="subscription-plan p-3">
                <h3>Visible Tutorial</h3>
                <hr />
                <h6 className="details">Plan details</h6>
                <p>We come to teach 3 times a week</p>
                <hr />

                <h6 className="details">Price</h6>
                <p>N45,000 Monthly.</p>
                <Link to="/visiblePayment">
                  <Button variant="danger">Make Payment</Button>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="subscription-plan p-3 mt-5">
                <h3>Visual Tutorial</h3>
                <hr />
                <h6 className="details">Plan details</h6>
                <p>We come to teach 4 times a week</p>
                <hr />

                <h6 className="details">Price</h6>
                <p>N40,000 Monthly.</p>
                <Link to="/visualPayment">
                  <Button variant="danger">Make Payment</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <h2 className="CodingTek mt-5">CodingTek Academic</h2>
    </>
  );
};
export default Plan;
