import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner col">
        <h1>"autumn is an artist<br/>who uses an oak leaf<br/>on which to paint a<br/>masterpiece"<br/> -william allen ward</h1>
        <div className="links">
          <div className="links1"><a href="#about"><i className="fas fa-info-circle fa-2x"></i></a></div>
          <div className="links2"><a href="#projects"><i className="fas fa-briefcase fa-2x"></i></a></div>
          <div className="links3"><a href="mailto:ph.autumn@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope fa-2x"></i></a></div>
          <div className="links4"><a href="#" target="_blank" rel="noreferrer"><i className="fas fa-file-alt fa-2x"></i></a></div>
          <div className="links5"><a href="https://www.linkedin.com/in/autumn-pham" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a></div>
        </div>
      </div>
    );
  }
}

export default Banner;
