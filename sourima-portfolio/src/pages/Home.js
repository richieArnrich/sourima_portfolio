import React from "react";
import cover from "../images/Sourima_cover2.jpg";
import "../styles/Home.css";
import "../styles/scrollbar.css";
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
            <p>"Words have the power to shape the world"</p>
            <p>
              Let me help you craft your message and make an impact through
              content
            </p>
            <div id="social">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  id="socialIcon"
                  style={{ color: "#FFD43B" }}
                />
              </a>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  id="socialIcon"
                  style={{ color: "#ffd43B" }}
                />
              </a>
              <a href="https://www.linkedin.com/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  id="socialIcon"
                  style={{ color: "#ffd43B" }}
                />
              </a>
            </div>
          </div>
          <div className="imageContainer">
            <p></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
