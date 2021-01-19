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
            Hi Everyone, I am <span className="purple">Aremu Lucky Baba </span>
            from <span className="purple">Lagos, Nigeria.</span>
            <br />I am a junior full-stack web-developer and puising 
            <br />a career in front-end web-development
            <br />I was introduced to codes a year ago and since 
            <br /> then, i have developed a passion to make our community more friendly through open source
            <br /> contributions and helping to push small scale
            <br /> business through tech innovations.

            <br /> 
            <br/> 
            I am open for any team with passion for <span className="purple">Front-End and Full-stack web-developmet</span>
            
            <br/>
            <br/>
            Apart from coding, some other activities that I do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Banking
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Writting Tech Blogs
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build a more friendly community for everyone!"{" "}
          </p>
          <footer className="blockquote-footer">@Luckaremu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
