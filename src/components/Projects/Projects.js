import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import medhub from "../../Assets/Projects/medHub.png";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/suicide.png";
import bookstore from "../../Assets/Projects/bookstore.png";
import khidefeast from "../../Assets/khidefeast.png";
import trena from "../../Assets/trenaservices.png";
import phoenix from "../../Assets/phoenix.png";
import abdulmat from "../../Assets/abdulmat.png";
import luck from "../../Assets/luck.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of the projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
        
     
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abdulmat}
              isBlog={false}
              title="ABDULMAT HOMES"
              description="The business profile of abdulmat which deals on estate management, it was built with Html, Css, Jquiry, bootstrap and JavaScript. The website is completely reponsive on all screen"
              link="https://compassionate-meninsky-dd581b.netlify.app/"
              links="https://github.com/Luckyaremu/tylerhomes"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luck}
              isBlog={false}
              title="REGULAR DESIGN"
              description="Just a regular design, it was built with Html, Css, Jquiry, bootstrap and JavaScript. The website is completely reponsive on all screen"
              link="https://jolly-swirles-0b8739.netlify.app/"
              links="https://github.com/Luckyaremu/designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MOVIE APP"
              description="This project is a very special one to me, i love movies. So i built this project with React and Redux. This project fetches any movies you want from an api and gives you all the details about the movies and even a link to watch"
              link="https://luckyaremu.github.io/movies-app/#/"
              links="https://github.com/Luckyaremu/movies-app/tree/dev-branch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="BOOKSTORE"
              description="This is a bookstore, it was built with JavaScript, CSS and HTML. It allows user to add any kind of book and also allow you to delete book, though not authenticated. It is completely responsive"
              link="https://goofy-engelbart-637e70.netlify.app/"
              links="https://github.com/Luckyaremu/react-bookstore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="NEWSWEEK CLONED"
              description="This project was somehow big at as the time i worked on it, The designing was an eye opener to what bootstrap can do and i really had a great time working on the project. I made the project to 98% of the original, it was built with BOOTSTRAP, CSS, HTML. It is completely responsive"
              link="https://frosty-leavitt-b9b46e.netlify.app/"
              links="https://github.com/Luckyaremu/newsweek-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medhub}
              isBlog={false}
              title="IPHONE CALCULATOR"
              description="This calculator was built with React and Redux with inspirations from Iphone calculator. It is completely responsive and can do some complex arritmetic"
              link="https://blissful-thompson-075242.netlify.app/"
              links="https://github.com/Luckyaremu/react-calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
