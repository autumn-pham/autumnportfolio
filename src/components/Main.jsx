import React from "react";
import Project from "./Project";
import Autumn from "../assets/autumn_headshot.jpg";

class Main extends React.Component {
  render() {
    return (
      <div className="main col col-sm-9">
        <hr/><h3 id="about">about autumn</h3><hr/>
        <div className="about">
          <img src={Autumn} alt="autumn headshot" className="autumn-mobile-img mobile-display img-fluid"/>
          <p className="about-text">As a full-stack software engineer, I create beautiful, functional, and responsive web applications. An avid learner, I tackle problems through a multicultural, multidisciplinary perspective to find the best solutions for each unique project. Through creative problem-solving, grit, and keen attention to detail, I strive to make every web app a masterpiece, each better than the last.</p>
        </div>
        <hr/><h3 id="projects">projects</h3><hr/>
        <Project/>
        <hr/><h3 id="experience">experience</h3><hr/>
          <div className="experience">
            <div className="experience-icon"><i className="fas fa-angle-double-right"></i></div>
            <div className="experience-text"><span className="title">General Assembly</span><span className="date">Aug 2020-Nov 2020</span><br/>13-week, full-time immersive course on web development. Curriculum included HTML, CSS, JavaScript, PHP, modern front-end frameworks, back-end web applications and API development with modern programming languages and MVC, and consummation of third-party APIs. GA also focused on collaboration in teams using agile development workflow and widely accepted collaboration practices in Git/Github.</div>
          </div>

        <p>View my full resume <a href="#">here</a>.</p>
      </div>
    );
  }
}

export default Main;
