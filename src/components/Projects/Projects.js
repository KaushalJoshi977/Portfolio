import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import userDetails from "../../Assets/Projects/UserDetails.jpeg";
import showtime from "../../Assets/Projects/showtime.jpeg";
import game from "../../Assets/Projects/Ecom.jpg";
import voting from "../../Assets/Projects/voting.jpeg";
import stocks from "../../Assets/Projects/stocks.jpeg";

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
              imgPath={game}
              isBlog={false}
              title="FullStack Ecom Website"
              description="Developed a responsive and dynamic e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented core features including product listings, user authentication, shopping cart, and checkout flow."
              ghLink="https://github.com/KaushalJoshi977/Ecom-f"
               demoLink="https://ecomperfect.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stocks}
              isBlog={false}
              title="Stocks App"
              description="Stocks Values is a Java Spring Boot microservice that allows users to subscribe to stock value changes and receive notifications via email according to their desired frequency (daily, weekly, or monthly). The application integrates with the Alpha Vantage API to fetch real-time stock data, extracts key metrics, and stores them in a local MongoDB instance."
              ghLink="https://github.com/KaushalJoshi977/StockesApp"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={showtime}
              isBlog={false}
              title="Its_Show_Time"
              description="Its_Show_Time is a comprehensive Spring Boot backend application designed to manage theatre operations, including booking tickets, managing theatres, movies, and shows. The application features a user-friendly Swagger UI for API interaction and integrates email functionality to send ticket confirmation mails."
              ghLink="https://github.com/KaushalJoshi977/Its-Show-Time.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userDetails}
              isBlog={false}
              title="GeoLocation and UserActivity "
              description="GeoLocation and UserActivity is a Spring Boot application that captures and displays geolocation data, browser details, OS name, and session details of a user. The application leverages Spring WebFlux for reactive programming, and uses HTML and CSS for the frontend. MongoDB is used for storing the user activity data."
              ghLink="https://github.com/KaushalJoshi977/Geolocation-and-userActivity.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voting}
              isBlog={false}
              title="Online Voting"
              description="The Online Voting System is a web-based application developed to facilitate secure and efficient online voting. This project showcases my web development skills using HTML, CSS, MySQL, Java servlets, and JSP. The system includes functionalities for voter and admin login, result checking, feedback collection, and new voter registration, demonstrating my ability to create dynamic and interactive web applications with Java."
              ghLink="https://github.com/KaushalJoshi977/Webpage"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
