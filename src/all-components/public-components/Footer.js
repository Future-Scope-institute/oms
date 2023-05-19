import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div
        style={{bottom: "0" , width:'-webkit-fill-available'}}
        className="text-center bg-dark text-light py-2"
      >
        <p className="text-center f-size">
          &nbsp;Copyright ©
          <Link
            to="#"
            className="text-light text-decoration-none f-size"
          >
            &nbsp;Future Scope Technology Pvt.Ltd.&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none text-light">
            &nbsp;Terms&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none">
            &nbsp;Placement&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none">
            &nbsp;Privacy&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none">
            &nbsp;Refund&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none">
            &nbsp;Referral Policy
          </Link>
        </p>
      </div>
    )
}
export default Footer;