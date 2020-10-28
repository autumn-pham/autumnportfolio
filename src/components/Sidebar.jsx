import React from "react";
import Autumn from "../assets/autumn_headshot.jpg";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar col-sm-3 desktop-display">
          <img src={Autumn} alt="autumn headshot" className="autumn-img"/>
          <h3 className="name">Autumn Pham</h3>
          <span className="email desktop-display"><i className="far fa-envelope"></i> ph.autumn@gmail.com</span><hr/>
          <a href="#about">About</a><br/>
          <a href="#projects">Projects</a><br/>
          <a href="#experience">Experience</a><hr/>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/autumn-pham" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a><br/>
            <a href="https://github.com/autumn-pham" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-2x"></i></a><br/>
            <a href="https://github.com/autumn-pham" target="_blank" rel="noreferrer"><i className="fas fa-file-alt fa-2x"></i></a><br/>
          </div><hr/>
          <div className="skills">
            <h6>Skills</h6>
            <span className="badge badge-pill badge-dark">html</span> <span className="badge badge-pill badge-dark">css</span> <span className="badge badge-pill badge-dark desktop-display">responsive design</span> <span className="badge badge-pill badge-dark desktop-display">object-oriented design</span> <span className="badge badge-pill badge-dark">javascript</span>  <span className="badge badge-pill badge-dark">react</span> <span className="badge badge-pill badge-dark">jquery</span> <span className="badge badge-pill badge-dark">node.js</span> <span className="badge badge-pill badge-dark">express</span> <span className="badge badge-pill badge-dark">php</span> <span className="badge badge-pill badge-dark">mongodb</span> <span className="badge badge-pill badge-dark">mongoose</span> <span className="badge badge-pill badge-dark">postgresql</span>
          </div>
        </div>
    );
  }
}

export default Sidebar;
