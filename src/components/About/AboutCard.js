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
            Hi Everyone, I am <span className="purple">Lucky Aremu </span>
            from <span className="purple">Lagos, Nigeria.</span>
            <br />I am a junior full-stack web-developer and searching for 
            <br />a career with a great community.
            <br />After I was introduced to writting codes a year ago, I
            <br />developed a deep passion for software development and open source community, Since then i have always
            <br />been writting codes and contributing to different communities through open source and helping to develope small scale
            <br />business through tech innovations.
            <br /> I look forward to bringing the same kind of fire to the right community.
            <br /> I am currently proficient in Ruby, Rails, HTML, CSS, JavaScript, and React.

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
