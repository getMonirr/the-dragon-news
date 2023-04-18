import React from "react";
import { Row } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <Row className="my-5">
      <div className="text-center">
        <img src={Logo} alt="the dragon news logo" />
        <p className="mt-3">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="fw-normal fs-5">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </Row>
  );
};

export default Header;
