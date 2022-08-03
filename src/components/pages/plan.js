import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import Card from "react-bootstrap/Card";
const Plan = () => {
  const [plan, setPlan] = React.useState(true);
  const [alert, setAlert] = React.useState(false);

 
  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-5 flexDirection-column ">
        {plan ? (
          <Button
            variant="danger"
            className="p-2 pl-5 pr-5 btn-sub"
            onClick={() => setPlan(false)}
          >
            Click here to Subscribe
          </Button>
        ) : (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Monthly Payment</Card.Title>
              <Card.Text style={{ fontWeight: "bold" }}>N40,000.00</Card.Text>
              <Card.Text style={{ color: "red" }}>
                Please note that we receive payment before tutorial and money
                paid is not refundable.
              </Card.Text>
              <Button
                variant="info"
                onClick={() => setAlert(true)}
                href="#account"
                className="text-white"
              >
                Make Payment
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>

      {alert ? (
        <Alert variant="success">
          <Alert.Heading id="account">Account Details</Alert.Heading>
          <h5>
            Acct Name: Mesioye Samson <br />
            Acct Number: 3071846434 <br />
            First Bank Account
          </h5>
          <hr />
          <p className="mb-0">
            Kindly screen shot your payment and send to us, thank you.
          </p>
        </Alert>
      ) : null}

      
    </>
  );
};

export default Plan;
