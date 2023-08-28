import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows11,
  SiIntellijidea,
  SiApachenetbeanside,
  SiAndroidstudio,
  SiXampp,
  SiSpotify,SiUbuntu,SiInsomnia,SiPostman
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpotify/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman/>
      </Col>
    </Row>
  );
}

export default Toolstack;
