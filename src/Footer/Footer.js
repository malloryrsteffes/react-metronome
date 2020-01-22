import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const fontAwesomeStyle = {
  paddingRight: "10px",
  paddingLeft: "10px"
};
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="block-div"></div>
        <div className="sticky-footer">
          <div className="footer-text">
            <p>Copyright &copy; 2020 Mallory Steffes</p>
            <a
              href="https://www.linkedin.com/in/mallorysteffes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={fontAwesomeStyle} />
            </a>
            <a
              href="https://www.github.com/malloryrsteffes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} style={fontAwesomeStyle} />
            </a>
            <a
              href="https://www.mallorysteffes.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faHome} style={fontAwesomeStyle} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
