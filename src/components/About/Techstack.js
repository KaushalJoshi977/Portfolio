import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiJava, DiHtml5, DiCss3 } from "react-icons/di";
import { SiMongodb, SiSpringboot } from "react-icons/si"; // Added SiSpringboot
import { FaCloud, FaJava } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot /> {/* Added Spring Boot icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCloud />
      </Col>
      
    </Row>
  );
}

export default Techstack;
