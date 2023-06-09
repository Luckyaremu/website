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
            based <span className="purple">Lagos, Nigeria.</span>
           <br></br> 
  As a project manager and web developer with 7 years of experience in the labour market,
  I have acquired a diverse skill set that combines technical expertise with project management 
  prowess. With a keen understanding of the software development lifecycle, I have dedicated 4 
  years of my career specifically to mastering the intricacies of this crucial process.

In my role as a project manager, I have successfully led teams and overseen the development 
of various software projects. My primary focus is to ensure the seamless execution of projects 
from inception to delivery. I possess a deep understanding of project management methodologies and tools,
 allowing me to effectively plan, execute, monitor, and control project activities.

One of my key strengths is my ability to bridge the gap between technical teams and stakeholders. 
I excel at translating business requirements into technical specifications, ensuring a clear understanding 
of project goals and objectives. I collaborate closely with cross-functional teams, including developers, 
designers, and quality assurance professionals, fostering effective communication and teamwork.

Combining my web developement skills, I bring hands-on expertise in front-end web development technologies 
to become a professional in software developement lifecycle. I am proficient in HTML, CSS, JavaScript, and 
have experience with popular frameworks and libraries such as REACT. I am well-versed in building responsive and 
user-friendly web applications that adhere to industry best practices. With a strong understanding of 
databases and server-side technologies, I am capable of designing and developing robust and scalable 
software solutions.

Throughout my career, I have successfully delivered projects on time and within budget while maintaining 
a high level of quality. I am skilled in risk assessment and mitigation, ensuring potential roadblocks are
 proactively identified and addressed. Additionally, I am adept at managing project timelines, allocating
  resources effectively, and adapting to changing requirements and priorities.

With my combined experience as a project manager and web developer, I bring a holistic approach to project 
management in the software development realm. I am passionate about leveraging my technical expertise and 
project management skills to drive successful outcomes and exceed client expectations.







            {/* <br />I am a professional Project manager and front-end web-developer.
            <br />I have been in the active labour market in the past seven (7) years with three (3) years
            <br />with Qservicesit, Mohali India, remotely as an IT project manager overseaing and planning projects from start to finnish
            <br /> and also functioned as a web developer and code review based on my vast knowlege with software development life cycle
            <br />business through tech innovations.
            <br />I look forward to bringing the same kind of fire to the right community.
            <br />I am currently proficient in Ruby, Rails, HTML, CSS, JavaScript, and React. */}

            <br /> 
            <br/> 
            I am open for any team with passion for <span className="purple">Software development life cycle</span>
            
            <br/>
            <br/>
            Apart from project planning and coding, some other activities that I do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Banking and Business Development
            </li>
            {/* <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Project Management
            </li> */}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
