import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Platser.css";

class Platser extends React.Component {
  onMarkerClick(props, marker, e) {
    console.log("marker click");
    window.open("https://goo.gl/maps/8qHm2xSSVDCfcZbg9");
  }

  onFestMarkerClick(props, marker, e) {
    console.log("marker click");
    window.open("https://goo.gl/maps/4zSuPdvVvAgjzyQv8");
  }

  render() {
    const lat = 57.93388359648509;
    const lng = 12.5391922996654;
    const festlat = 57.712444;
    const festlng = 12.266444;
    const style = {
      width: "100%",
      height: "40vh",
    };

    const containerStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
    };
    return (
      <div>
        <div className="row">
          <div className="place-card">
            <h5>Vigsel</h5>
            <p>Landskyrkan Alingsås 15.00</p>
          </div>
          <div className="col-8 align-self-end">
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
        </div>
        <div className="row">
          <div className="fest">
            <h5>Fest och middag</h5>
            <p>Chalmers Grand Cabin i Härryda</p>
          </div>
          <div className="col-8 align-self-end">
            <Map
              google={this.props.google}
              style={style}
              containerStyle={containerStyle}
              zoom={17}
              initialCenter={{
                lat: festlat,
                lng: festlng,
              }}
            >
              <Marker
                name={"Landskyrkan"}
                position={{ lat: festlat, lng: festlng }}
                onClick={this.onFestMarkerClick}
              />
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMpszkUIXz_DDryO0k7EuRWrzN2Bx0Ejc",
})(Platser);
