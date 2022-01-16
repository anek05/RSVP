import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Platser.css";

class Platser extends React.Component {
  render() {
    return (
      <div className={"map"}>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "400px" }}
          zoom={17}
          initialCenter={{
            lat: 57.9331004,
            lng: 12.5368856,
          }}
        >
          <Marker
            name={"Landskyrkan"}
            position={{ lat: 57.93388359648509, lng: 12.5391922996654 }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMpszkUIXz_DDryO0k7EuRWrzN2Bx0Ejc",
})(Platser);
