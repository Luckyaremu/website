import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Lucky Aremu Baba.pdf";

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
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row> */}
        <Row className="resume">
          <Col md={12} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="IT Project Manager | Web Developer at Qservicesit, Mohali, India"
              date="Febuary 2021 - May 2023"
              content={[
                "I lead the planning, execution, and delivery of IT projects, ensuring adherence to project timelines, budgets, and quality standards.",
                "Played a key role in facilitating effective collaboration among cross-functional teams, resulting in the accurate definition of project scope and objectives.",
                "Received positive feedback from stakeholders for strong teamwork and communication skills, leading to successful project outcomes.",
                "Created comprehensive project plans that successfully guided project teams, resulting in improved project efficiency and timely completion.",
                "Implemented an effective project tracking system that resulted in enhanced visibility and streamlined project progress monitoring.",
                "Developed and implemented innovative web solutions that exceeded client expectations and received positive user feedback.",
                "Demonstrated a deep understanding of web development technologies, resulting in the successful delivery of high-quality web solutions.",
                "Proactively identified and addressed project risks, resulting in successful risk mitigation and project delivery without major disruptions.",
                "Monitoring project progress and providing regular status updates to key stakeholders, identifying and addressing any deviations from the project plan.",
                "Managed project budgets, tracked expenses, and reported on project finance to ensure effective resource allocation.",
                "Fostering strong relationships with clients and stakeholders by actively managing their expectations and ensuring their satisfaction with project outcomes.",
                "Identified opportunities for process improvements and implemented best practices to enhance project delivery efficiency and quality"

              ]}
            />

<Resumecontent
              title="Technical Support Engineer at Microverse inc, California, US"
              date="January 2020 - December 2020"
              content={[
                "Provided technical support through various channels (email, Slack, Teams, Zoom) and resolved software, hardware, and network issues efficiently.",
                "Guiding partners in installing, configuring, and utilizing software applications and tools.",
                "Reviewed code submissions, ensuring adherence to coding standards, best practices, and security guidelines.",
                "Identified and documented code bugs, performance bottlenecks, and potential security vulnerabilities.",
                "Collaborated with teams, providing constructive feedback and suggestions for code improvement.",
                "Created and maintained technical documentation, troubleshooting guides, and knowledge base articles.",
                "Contributed to the company's internal knowledge base by documenting code review findings and best practices.",
                "Build and maintain positive partner relationships, ensuring timely issue resolution and effective communication.",
                "Staying updated on industry trends, technologies, and best practices through continuous learning and professional development.",
                    ]}
            />


<Resumecontent
              title="Customer Services Representative | Transaction Officer  at GTBank, Lagos, Nigeria"
              date="September 2017 — January 2021"
              content={[
                "Contributed towards the preparation of annual budgets, forecasts, and budgetary control.",
                "Created and maintained the chart of accounts and other company financial records.",
                "Paid and received cash/cheques from customers.",
                "Assisting in the development of reports and data.",
                "Performed general accounts and financial reconciliation, and performed any other role assigned by the manager.",
                "Ensure customer satisfaction and provide professional customer support.",
                "Provided feedback on the efficiency of the service process.",
                "Processed orders, forms, requests, and applications.",
                "Acknowledged and resolved customer complaints, and responded promptly to a customer complaint.",
                "Keeping records of customer interactions, transactions, comments, and complaints.",
                "Responded promptly to a customer complaint.",
                "Maintained a positive, empathetic, and professional attitude toward the customer at all times.",
                "Utilized customer feedback to improve existing products and services, resulting in increased customer satisfaction.",
                "Developed and implemented customer service training programs to ensure customer service representatives are knowledgeable and up-to-date on products and services"

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
