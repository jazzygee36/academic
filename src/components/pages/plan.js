import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
import "./index.css";



const Plan = () => {
  return (
    <>
      <div className=" mt-5 mb-5 plan-sub">
       <Link to="/plan">
       <Button
          variant="danger"
          className="p-2 pl-5 pr-5 btn-sub"
        
        >
          Click here to choose a plan
        </Button>
       </Link>

       
      </div>

    
    </>
  );
};

export default Plan;
