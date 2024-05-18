import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kaushal Joshi </span>
            from <span className="purple"> Dungarpur, Rajasthan, India.</span>
            <br />
            I am currently employed as a Master Trainer at Edunet Foundation.
            <br />
            I have completed my B.Tech from <b>Lovely Professional University</b>, Punjab. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kaushal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
