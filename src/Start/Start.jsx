import React from "react";
import "./Start.css";
import startImage from "../Images/start-temp.jpg";

class Start extends React.Component {
  render() {
    return (
      <div>
        <div className="row my-5 text-center text-dark">
          <h5>Vi ska gifta oss!</h5>
          <h1>Elsa & Sebastian</h1>
          <h5>13 augusti 2022</h5>
        </div>
        <div class="text-center">
          <h3>Välkommen</h3>
          <img src={startImage} alt="Landing" className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default Start;
