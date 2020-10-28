import React from "react";
import FightingFit from "../assets/fightingfit.png";
import FightingFitMeetup from "../assets/fightingfitmeetup.png";
import PinchofSalt from "../assets/pinchofsalt.png";
import NovelIdea from "../assets/anovelidea.png";

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="card">
          <div className="card-header text-center">Fighting Fit</div>
          <img src={FightingFit} className="card-img-top" alt="fighting fit site"/>
          <div className="card-body">
            <a href="https://fightingfit.herokuapp.com" className="btn btn-outline-dark btn-block" target="_blank"><i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center">Fighting Fit Meetup</div>
          <img src={FightingFitMeetup} className="card-img-top" alt="fighting fit meetup site"/>
          <div className="card-body">
            <a href="https://fightfitmeetup.herokuapp.com" className="btn btn-outline-dark btn-block" role="button" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center">Pinch of Salt</div>
          <img src={PinchofSalt} className="card-img-top" alt="pinch of salt site"/>
          <div className="card-body">
            <a href="https://pinch-of-salt.herokuapp.com" className="btn btn-outline-dark btn-block" role="button" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center">A Novel Idea</div>
          <img src={NovelIdea} className="card-img-top" alt="..."/>
          <div className="card-body">
            <a href="https://infinite-stream-72673.herokuapp.com" className="btn btn-outline-dark btn-block" role="button" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
