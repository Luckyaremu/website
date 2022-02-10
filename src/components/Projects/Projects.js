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
import rotex from "../../Assets/rotex.png";
import abdulmat from "../../Assets/abdulmat.png";
import luck from "../../Assets/luck.png";
import ecommerce from "../../Assets/ecommerce.png";

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
              imgPath={ecommerce}
              isBlog={false}
              title="E COMMERCE"
              description="An e commerce website that was designed for some specific requirement by the recruiter for the interview, it was built with REACT and REDUX."
              link="https://hungry-aryabhata-d11a47.netlify.app/"
              links="https://github.com/Luckyaremu/e-commerce-prototype"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rotex}
              isBlog={false}
              title="RHOTEX EXCHANGE"
              description="A crptocurrency website that deals mainly on crypto sales, it was built with REACT, REDUX AND RAPID API. The website is completely reponsive on all screen"
              link="https://rhotexexchange.com/"
              links="https://github.com/Luckyaremu/rotexexhange"
            />
          </Col>
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
              imgPath={khidefeast}
              isBlog={false}
              title="KHIDE FEAST BUSINESS PROFILE"
              description="The business profile of khide feast which deals mostly on online food processing and vending, it was built with Html, Css and JavaScript. The website is completely reponsive on all screen"
              link="https://www.khidefeast.com/"
              links="https://github.com/Luckyaremu/khidefeast"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trena}
              isBlog={false}
              title="TRENA GENERAL SERVICES"
              description="The business profile of trena general services which deals mostly on offshare sea service, it was built with react. The website is completely reponsive on all screen"
              link="https://www.trenageneralservices.com/"
              links="https://github.com/Luckyaremu/perryfirm"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phoenix}
              isBlog={false}
              title="PHOENIX UNIVERSALLY CLUB "
              description="The business profile of phoenix universally was built with Html, Css, jquery, bootstrap and JavaScript. The website is completely reponsive on all screensize and other important functions is to be built by another team"
              link="https://phoenixuc.com/"
              links="https://github.com/Luckyaremu/phoenix-club"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="JOY BEAUTY LOUNGE BUSINESS PROFILE"
              description="The business profile of joy beauty lounge which deals mostly on service rendering, it was built with Html, Css and JavaScript. The process of booking was done with smtp, the site is completely reponsive"
              link="https://www.joybeautylounge.com/"
              links="https://github.com/Luckyaremu/joylounge"
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
              imgPath={suicide}
              isBlog={false}
              title="TWITTER CLONED"
              description="A clone of twitter built almost like the main popular social media app Twitter. It was built with rails, Images can be uplaod, including a wall paper on your profile, authentication was applied to the app and post can be made and deleted. You can follow and unfollow other users."
              link="https://glacial-gorge-46936.herokuapp.com/users/sign_in"
              links="https://github.com/Luckyaremu/ror-twitterredesign"
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
