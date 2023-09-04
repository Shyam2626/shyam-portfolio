import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import p1 from "../../Assets/Projects/p1.png";
import p2 from "../../Assets/Projects/p2.png";
import p3 from "../../Assets/Projects/p3.png";
import p4 from "../../Assets/Projects/p4.png";
import p5 from "../../Assets/Projects/p5.png";
import p6 from "../../Assets/Projects/p6.png";
import p7 from "../../Assets/Projects/p7.png";
import p8 from "../../Assets/Projects/p8.png"
import p9 from "../../Assets/Projects/p9.png";
import p10 from "../../Assets/Projects/p10.png";
import p11 from "../../Assets/Projects/p11.png";
import p12 from "../../Assets/Projects/p12.png";
import p13 from "../../Assets/Projects/p13.png";
import p14 from "../../Assets/Projects/p14.png";
import p15 from "../../Assets/Projects/p15.png";


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
              imgPath={p10}
              isBlog={false}
              title="Blog APP "
              description="Created a dynamic blog application using Bootstrap for a sleek UI. Utilize Node.js and Express to establish the backend, allowing users to store, view, and delete their blogs. Employ EJS for seamless rendering of blog content. Enhance data management using MongoDB for efficient storage and retrieval of user-generated blog posts."
              ghLink="https://github.com/Shyam2626/BlogApp"
              demoLink="https://shyams-blogapp.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p12}
              isBlog={false}
              title="Covid-API"
              description="Crafted a COVID-19 API utilizing the dynamic quartet of MongoDB, Node.js, Express, and EJS. Users input a country's name, triggering the API to retrieve and showcase vital pandemic statistics: total cases, deaths, and recoveries. Leveraging Express for routing and middleware, Node.js for backend logic, and EJS for dynamic rendering, the MongoDB database ensures seamless data storage and retrieval, delivering users real-time insights into the impact of COVID-19 across different countries."
               ghLink="https://github.com/Shyam2626/covidAPI"
               demoLink="https://covidapi-aucv.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p15}
              isBlog={false}
              title="ToDo-List"
              description="Discover the power of our To-Do List Application, crafted using Node.js, Express, MongoDB, and EJS. This intuitive tool simplifies task management with the ability to effortlessly add and delete tasks, helping you stay organized and in control of your daily agenda. Experience a seamless, efficient way to tackle your to-do list."
               ghLink="https://github.com/Shyam2626/Todo-App"
               demoLink="https://todo-app-7891.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p11}
              isBlog={false}
              title="Sign-Up Authentication"
              description="Implement robust user authentication in your web application by harnessing the power of Express, Node.js, MongoDB, and JSON Web Tokens (JWT). This secure approach ensures that users can sign up, log in, and access personalized content. Utilize Express to handle routing and middleware, MongoDB for reliable data storage, and JWT for creating and verifying authentication tokens, thus safeguarding user credentials and enhancing the overall security of your application."
              ghLink="https://github.com/Shyam2626/SignUp-Auth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p13}
              isBlog={false}
              title="QrCode-Generator"
              description="Developed a QR code generator using the 'qr-image' npm package. This JavaScript-based solution enables seamless creation of QR codes. By leveraging the package's capabilities, the application produces QR codes with embedded data such as URLs or text. This dynamic feature serves a myriad of purposes, including contactless information sharing, efficient URL redirection, and streamlined data exchange, enhancing user convenience and connectivity."
              ghLink="https://github.com/Shyam2626/QrGenerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p14}
              isBlog={false}
              title="Receipe Finder"
              description="Crafted a user-friendly recipe finder powered by a JavaScript API. Users input the name of a recipe, prompting the API to return a list of ingredients required for that recipe. Additionally, the API provides detailed step-by-step instructions for preparing the selected dish. This innovative solution simplifies the cooking process, offering users quick access to essential information, enabling them to seamlessly gather ingredients and follow instructions, resulting in successful and delicious culinary creations."
              ghLink="https://github.com/Shyam2626/Receipe_Finder"
              demoLink="https://shyam2626.github.io/Receipe_Finder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p9}
              isBlog={false}
              title="E-SHOP"
              description="Discover the latest fashion trends and shop for stylish clothing, accessories, and footwear on our fashion-focused e-commerce web app. Explore a curated collection of brands, enjoy personalized recommendations, and experience a seamless shopping journey with secure transactions and prompt delivery."
              ghLink="https://github.com/Shyam2626/Ecommerce"
              demoLink="https://shyam2626.github.io/Ecommerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Airline Reservation System 🛫"
              description="Developed a comprehensive airline reservation system, enabling users to search and book flights, manage reservations, process payments, and generate e-tickets seamlessly. The system incorporated intuitive user interfaces, real-time flight availability updates, secure payment processing, and efficient ticket management for a seamless and convenient booking experience."
              ghLink="https://github.com/Shyam2626/AirLine-Reservation-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title="Quiz App ❔❓❔"
              description="Designed an engaging and visually appealing quiz app with a wide range of question types, including multiple-choice, true/false, and fill in the blanks. The app provides real-time feedback on user answers, offers hints when needed, and generates a comprehensive score report at the end, promoting a challenging and rewarding quiz experience for users."
              ghLink="https://github.com/Shyam2626/Quiz_APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title="Just Apple 🍎"
              description="Developed a sleek and visually stunning frontend website for Apple, featuring a modern and responsive design. The website showcases Apple's products, services, and latest innovations, providing users with an immersive browsing experience and easy access to information about Apple's offerings."
              ghLink="https://github.com/Shyam2626/apple-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="Tic Tac Toe ❌⭕"
              description="Created a dynamic and interactive Tic Tac Toe game with a user-friendly interface. The game allows players to take turns, provides real-time feedback on game progress, and declares the winner or a draw at the end. The implementation includes intelligent logic to handle player moves and ensure an enjoyable gaming experience"
              ghLink="https://github.com/Shyam2626/Java/tree/main/TICTACTOE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5}
              isBlog={false}
              title="Number Guessing Game 🔢"
              description="Designed an interactive number guessing game where players attempt to guess a randomly generated number within a specified range. The game provides feedback on each guess, indicating whether the guessed number is too high or too low. With each attempt, players narrow down their choices until they successfully guess the correct number, fostering a fun and challenging gaming experience."
              ghLink="https://github.com/Shyam2626/OIBSIP/blob/main/NumberGuessingGame.java"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p6}
              isBlog={false}
              title="Banking Management System 💰💰"
              description="Developed a comprehensive banking management system with advanced features such as customer account management, transaction processing, balance tracking, and secure authentication. The system ensures efficient handling of banking operations, facilitates seamless transactions, and provides robust security measures to safeguard sensitive customer information."
              ghLink="https://github.com/Shyam2626/OIBSIP/blob/main/atm.java"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p7}
              isBlog={false}
              title="Note Taking Application 📋"
              description="Created a user-friendly note taking application with features such as note creation, editing, and organization. The application allows users to categorize and prioritize their notes, add tags or labels, and provides a search functionality for quick retrieval. It also supports additional features like reminders, attachments, and synchronization across multiple devices for enhanced productivity and convenience."
              ghLink="https://github.com/Shyam2626/NoteTakingApplication"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p8}
              isBlog={false}
              title="Scientic_Calc 🔢"
              description="Developed a versatile scientific calculator application that includes advanced mathematical functions, trigonometric calculations, and logarithmic operations. The application also features unit converters for seamless conversion between different measurement units, such as length, weight, temperature, and more. This comprehensive tool provides users with precise calculations and convenient unit conversions all in one place."
              ghLink="https://github.com/Shyam2626/Scientific_Calc"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
