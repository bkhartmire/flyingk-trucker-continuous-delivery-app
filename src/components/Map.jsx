import React, { Component } from "react";
import PropTypes from "prop-types";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const imgC = require("../C.png"); // this is the C logo(for country store) on the map
const imgT = require("../T.png"); // this is the T logo(for truck stop)

const MyMap = withGoogleMap((props) => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={4}
      defaultCenter={{ lat: 38, lng: -99.6194 }}
      defaultOptions={{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        mapTypeId: "roadmap", //google.maps.MapTypeId.TERRAIN,
      }}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker) => {
        let imgTag = marker.type === "travel stop" ? imgT : imgC;
        return (
          <Marker
            key={marker.siteName}
            icon={{ url: imgTag, scaledSize: { width: 10, height: 10 } }}
            {...marker}
            onRightClick={() => props.onMarkerRightClick(marker)}
          />
        );
      })}
    </GoogleMap>
  );
});

class Map extends Component {
  async componentDidMount() {
    if (this.props.locations.length <= 0) {
      this.props.getLocations();
    }
  }

  render() {
    return process.env.npm_lifecycle_event === "test" ? (
      <div />
    ) : (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `75%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {}}
        markers={this.props.locations}
        onMarkerRightClick={() => {}}
      />
    );
  }
}

Map.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default Map;
