import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shyam K </span>
            from <span className="purple"> Chennai, India.</span>
            <br /> I am a third year student pursuing B.TECH
            in INFORMATION TECHNOLOGY at ST. Joseph's Institute of Technology
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everyday life is like programming, I guess. If you love something, you can put beauty into it"{" "}
          </p>
          <footer className="blockquote-footer">Donald Knuth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
