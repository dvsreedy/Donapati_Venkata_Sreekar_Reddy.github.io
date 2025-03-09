import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="PDFChatBot is an AI-powered chatbot designed to read, learn from, and answer questions based on the content of PDF files stored in a designated folder. Leveraging LangChain, this chatbot is capable of processing and understanding complex documents, making it a versatile tool for various applications such as customer support, research assistance, and educational purposes."
              ghLink="https://github.com/dvsreedy/PDFChatBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Design Patterns in C++"
              description="This repo contains implementation of commonly used design patterns in C++."
              ghLink="https://github.com/dvsreedy/Design-Patterns-C-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="driver-drowsiness-and-yawn-detection-using-python-opencv-and-dlib"
              description="This project is used to detect the drowsiness and yawn of the driver using python, opencv and dlib"
              ghLink="https://github.com/dvsreedy/driver-drowsiness-and-yawn-detection-using-python-opencv-and-dlib"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
