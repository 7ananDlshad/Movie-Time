import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer 
    // style={{position: "fixed", bottom: "0",width:"100%"}} //fixed-bottom
    className={"text-light text-center bg-secondary flex-shrink-1"}
    >
      <small style={{ marginRight: "20px" }}>Developed by </small>
      <a href="https://github.com/7ananDlshad" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faGithub} />
        <small style={{ marginRight: "20px" }}>Hanan</small>

      </a>
      <a href="https://github.com/QaysAyad" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faGithub} />
        <small style={{ marginRight: "20px" }}>Qays</small>

      </a>
      <a href="https://github.com/shirin-muataz" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faGithub} />
        <small style={{ marginRight: "20px" }}>Shirin</small>

      </a>
    </footer>
  );
}
export default Footer;
