import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Aremu Lucky</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>

        <Col md="4" className="footer-body">
          <h6 span className="white">Call or send an Email</h6>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white" }}
              >
                <i className="fas fa-phone"> +2348032236791</i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white" }}
              >
                <i className="fas fa-envelope-square"> aremu.baba70@gmail.com</i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
