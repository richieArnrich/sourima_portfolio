import React from "react";
import cover from "../images/cover_pic.avif";
import "../styles/Home.css";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/Layout";
function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="homeContent">
          <div>
            <h1>
              Hi, I'm<Typography variant="h1"> Sourima</Typography>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus velit corrupti nam quaerat fuga voluptates esse corporis
              non nemo magni. Assumenda laboriosam officiis rerum natus delectus
              omnis, incidunt aspernatur molestiae.
            </p>
            <div id="social">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  id="socialIcon"
                  style={{ color: "#FFD43B" }}
                />
              </a>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  id="socialIcon"
                  style={{ color: "#ffd43B" }}
                />
              </a>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  id="socialIcon"
                  style={{ color: "#ffd43B" }}
                />
              </a>
            </div>
          </div>
          <div className="imageContainer">
            <img src={cover} alt="pic here" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
