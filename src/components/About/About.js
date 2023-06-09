import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import myImg from "../../Assets/avatar.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col> */}
        </Row>
        <div className="devicon">
        <h1 className="project-heading">
          Professional <strong className="purple">Skill set </strong>
        </h1>
        <div className="skillset">
         <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Time management
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Leadership
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Effective communication
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Customer services
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Ability to work with and lead a team
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Microsoft office
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Critical thinking
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Leadership and teamwork
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Agile and waterfall methodology
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Jira
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> AzureDevsOps
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> React
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> HTML, CSS, SASS
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Web responsive design
            </li>
          </div>

        {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-ruby-plain-wordmark " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row> */}

        
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use the most
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px", fontsize: "10px" }}>
          <Techstack iconName="cib-github" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-azure-devops" />
          <Techstack iconName="cib-jira" />
          <Techstack iconName="cib-windows" />
          <Techstack iconName="cib-apple" />
        </Row>
        </div>
      </Container>
    </Container>
  );
}

export default About;
