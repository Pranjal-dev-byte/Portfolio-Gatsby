import React from "react";
import linkedIn from "../../img/linked.svg";
import git from "../../img/github.svg";
import insta from "../../img/insta.svg";
import resume from "../../static/resume.pdf";

const SocalLinks = () => {
  return (
    <React.Fragment>
      <div className="heading__primary--icons">
        <span className="heading__primary--icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/PranjalMisra12"
          >
            <img src={linkedIn} alt="LinkedIn Profile" />
          </a>
        </span>
        <span className="heading__primary--icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Pranjal-dev-byte"
          >
            <img src={git} alt="LinkedIn Profile" />
          </a>
        </span>
        <span className="heading__primary--icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/misra_pranjal_"
          >
            <img src={insta} alt="LinkedIn Profile" />
          </a>
        </span>
      </div>
      <button
        className="btn btn-white btn-medium u-margin-medium-top"
        id="animateSocial"
      >
        <a target="_blank" rel="noreferrer" href={resume}>
          Resume
        </a>
      </button>
    </React.Fragment>
  );
};

export default SocalLinks;
