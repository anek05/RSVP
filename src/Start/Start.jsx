import React from "react";
import "./Start.css";
import startImage from "../Images/start.jpeg";

class Start extends React.Component {
  render() {
    return (
      <div classname="start">
        <div className="row my-5 text-center text-dark">
          <span className="small-font">VI SKA GIFTA OSS!</span>
          <span className="fat-font name">ELSA & SEBASTIAN</span>
          <span className="small-font">13 AUGUSTI 2022</span>
        </div>
        <div class="text-center">
          <div>
            <span className="fat-font welcome"> VÄLKOMMEN </span>
            <hr></hr>
          </div>
          <img src={startImage} alt="Landing" className="img-fluid mt-4" />
        </div>
      </div>
    );
  }
}

export default Start;
