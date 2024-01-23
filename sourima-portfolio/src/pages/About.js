import React from "react";
import "../styles/About.css";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image from "../images/cover_pic.avif";
function About() {
  return (
    <div>
      <Layout>
        <div className="grid-container">
          <Container>
            <Row>
              <Col>
                <img src={image} alt="image here" id="grid-item" />
              </Col>
              <Col>
                <p id="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum expedita optio dicta tempore ullam molestiae
                  consequatur qui dignissimos fugit minima aut ipsa, esse
                  deserunt, doloremque ex quam quia repellat possimus.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
}

export default About;
