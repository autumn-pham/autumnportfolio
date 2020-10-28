import React from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Banner from "../src/components/Banner";
import Main from "../src/components/Main";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <Banner/>
      </div>
      <div className="row">
        <Sidebar/>
        <Main/>
      </div>
      </div>
    );
  }
}

export default App;
