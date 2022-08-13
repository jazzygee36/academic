import "../index.css";
import Alert from "react-bootstrap/Alert";
import Navbar from "../navbar"

import Container from "react-bootstrap/Container";


const VisualPayment = () => {
  return (
    <>
      <Navbar/>
    <div className="plan-section pt-4 pb-4">
        <Container >

        <h2 className="mt-5">N40,000 Visual Payment</h2>
          <p className="note mb-5">
          Kindly make a transfer and screen shot your payment to us, thank you.
          </p>
      {["primary"].map((variant) => (
        <Alert key={variant} variant={variant}>
            <h2>Account Details</h2>
          <h5>
            Acct Name: Mesioye Samson <br />
            Acct Number: 3071846434 <br />
            First Bank Account
          </h5>
          <hr />
        
        </Alert>
      ))}
      </Container>
     <h3>CodingTek Academic</h3>

    </div>
    </>

  );
};

export default VisualPayment;
