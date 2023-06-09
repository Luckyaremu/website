import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lucky Aremu, a Professional in software development life cycle </span>
           with seven (7) years experience, three (4) years of those focused on software development and i am based in <span className="purple">Lagos state, Nigeria </span>
           and open for hybrid, onsight or remote oppotunity.
            <br/> 
            I am open for any team with passion for   
            <br/>
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> IT Project Management
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Front-end web development
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Finance and Business development
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
