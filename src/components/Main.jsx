import React from "react";
import Project from "./Project";
import Autumn from "../assets/autumn_headshot.jpg";

class Main extends React.Component {
  render() {
    return (
      <div className="main col col-sm-9">
        <hr/><h3 id="about">about autumn</h3><hr/>
        <div className="about">
          <img src={Autumn} alt="autumn photo" className="autumn-mobile-img mobile-display"/>
          <p className="about-text">As a full-stack software engineer, I bring x, y, and z to my work.</p>
        </div>
        <hr/><h3 id="projects">projects</h3><hr/>
        <Project/>
        <hr/><h3 id="experience">experience</h3><hr/>
          <div className="experience">
            <div className="experience-icon"><i className="fas fa-angle-double-right"></i></div>
            <div className="experience-text">General Assembly<span className="date">Aug 2020-Nov 2020</span><br/>[description goes here]</div>
          </div>

        <p>View my full resume <a href="#">here</a>.</p>
      </div>
    );
  }
}

export default Main;
