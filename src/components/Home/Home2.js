import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../components/Home/shyam.PNG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaFreeCodeCamp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a passionate developer skilled in Java applications, website design, and app development. 
              <br />
              <br />I am fluent in several programming languages like
              <i>
                <b className="purple"> C, Java, Javascript and Dart.</b>
              </i>
                 My programming journey started as a hobby and a led me to freelancing, where I transform ideas
 into functional solutions.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">advanced Java Applications </b> and
                also in areas related to{" "}
                <b className="purple">
                  App Developing and responsive web Designing ❤️
                </b>
              </i>
              <br />
              <br />
              With a love for learning and innovation, I'm dedicated to crafting elegant and user - centric software that makes a positive impact. Whenever possible, I also apply my passion for developing
              <b className="purple"> Real time Applications</b> and
              <i>
                <b className="purple">
                  {" "}
                  Works on Problem Solving
                </b>
              </i>
              &nbsp; with
              <i>
                <b className="purple"> DSA</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shyam2626"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shyam2626/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sam_jr26/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:shyamsam1818@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
