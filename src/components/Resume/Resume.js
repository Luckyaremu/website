import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Aremu-Lucky-Resume.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="MENTOR & TECHNICAL SOFTWARE ENGINEER [Microverse]"
              date="January 2020 - Present"
              content={[
                "Proposed improvements to code organization to improve code quality and overall performance.",
                "Mentored junior web developers, providing technical support through code reviews.",
                "Provided support to junior web developers through professional assistance platforms such as Zoom and Slack as they needed extra support during projects"
              ]}
            />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
               title="Web Developer [www.joybeautylounge]"
               content={[
                 "Working on improving the website using Html, Css, Bootstrap and Javascript.",
               ]}
            />
            <Resumecontent
               title="Web Developer [Twitter Cloned]"
               content={[
                 "Working on improving the frontend-end of the website using Css, Bootstrap",
               ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
