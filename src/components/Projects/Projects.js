import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import medhub from "../../Assets/Projects/medHub.png";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/suicide.png";
import bookstore from "../../Assets/Projects/bookstore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="JOY BEAUTY LOUNGE BUSINESS PROFILE"
              description="The business profile of joy beauty lounge which deals mostly on service rendering, it was built with Html, Css and JavaScript. The process of booking was done with smtp, the site is completely reponsive"
              link="https://www.joybeautylounge.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MOVIE APP"
              description="This project is a very special one to me, i love movies. So i built this project with React and Redux. This project fetches any movies you want from an api and gives you all the details about the movies and even a link to watch"
              link="https://luckyaremu.github.io/movies-app/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="TWITTER CLONED"
              description="A clone of twitter built almost like the main popular social media app Twitter. It was built with rails, Images can be uplaod, including a wall paper on your profile, authentication was applied to the app and post can be made and deleted. You can follow and unfollow other users."
              link="https://glacial-gorge-46936.herokuapp.com/users/sign_in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="BOOKSTORE"
              description="This is a bookstore, it was built with JavaScript, CSS and HTML. It allows user to add any kind of book and also allow you to delete book, though not authenticated. It is completely responsive"
              link="https://goofy-engelbart-637e70.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="NEWSWEEK CLONED"
              description="This project was somehow big at as the time i worked on it, The designing was an eye opener to what bootstrap can do and i really had a great time working on the project. I made the project to 98% of the original, it was built with BOOTSTRAP, CSS, HTML. It is completely responsive"
              link="https://frosty-leavitt-b9b46e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medhub}
              isBlog={false}
              title="IPHONE CALCULATION"
              description="This calculator was built with React and Redux with inspirations from Iphone calculator. It is completely responsive and can do some complex arritmetic"
              link="https://blissful-thompson-075242.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
