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
            <FontAwesomeIcon icon={faLinkedin} style={fontAwesomeStyle} />
            <FontAwesomeIcon icon={faGithubSquare} style={fontAwesomeStyle} />
            <FontAwesomeIcon icon={faHome} style={fontAwesomeStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
