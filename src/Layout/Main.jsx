import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
import LeftSideBar from "../Pages/Shared/LeftSideBar";
import RightSideBar from "../Pages/Shared/RightSideBar";

const Main = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Col sm={3}>
          <LeftSideBar />
        </Col>
        <Col sm={6}>
          <h4>main content goes here</h4>
        </Col>
        <Col sm={3}>
          <RightSideBar />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Main;
