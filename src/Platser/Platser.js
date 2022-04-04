import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Platser.css";
import vigselImage from "../Images/Landskyrkan.jpeg";
import festImage from "../Images/grandcabin.jpeg";

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
      height: "26em",
    };

    const containerStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
    };
    return (
      <div className="row">
        <div className="row my-5">
              <h5>Vigsel</h5>
              <p>Landskyrkan Alingsås 15.00</p>
          <div className="col">
            <div className="place-card">
            </div>
            <div className="">
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
          <div className="col image vigsel-image">
                <img src={vigselImage} alt="Landskyrkan" className="img-fluid"></img>
          </div>
        </div>
        <div className="row mt-3">
              <h5 className="fest-header">Fest och middag</h5>
              <p>Chalmers Grand Cabin i Härryda</p>
              <div className="col image fest-image">
                <img src={festImage} alt="Chalmers Grand cabin" className="img-fluid d-block"></img>
              </div>
            <div className="fest col">
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
