import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Platser.css";

class Platser extends React.Component {
  onMarkerClick(props, marker, e) {
    console.log("marker click");
    window.open(
      "https://www.google.se/maps/place/Landskyrkan/@57.9338745,12.5370038,17z/data=!3m1!4b1!4m5!3m4!1s0x46455281b78cb705:0xd2864645957ba7fa!8m2!3d57.9339299!4d12.5391912"
    );
  }

  render() {
    const lat = 57.93388359648509;
    const lng = 12.5391922996654;
    const style = {
      width: "100%",
      height: "70vh",
    };

    const containerStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
    };
    return (
      <div>
        <Map
          google={this.props.google}
          style={style}
          containerStyle={containerStyle}
          zoom={17}
          initialCenter={{
            lat: lat,
            lng: lng,
          }}
        >
          <Marker
            name={"Landskyrkan"}
            position={{ lat: lat, lng: lng }}
            onClick={this.onMarkerClick}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMpszkUIXz_DDryO0k7EuRWrzN2Bx0Ejc",
})(Platser);
