import React from "react";
import startImage from "../Images/start-temp.jpg";

class Start extends React.Component {
  render() {
    return (
      <div>
        <div className="row my-5">
          <h1>Sebastian & Elsa</h1>
          <p>Alingsås - 13/8 2022</p>
        </div>
        <img src={startImage} alt="Landing" className="img-fluid" />
      </div>
    );
  }
}

export default Start;
