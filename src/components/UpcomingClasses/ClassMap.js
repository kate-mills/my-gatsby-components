import React from 'react'
import GoogleMapReact from 'google-map-react';

import {getGoogleApi} from "../../utils/mapper"

const mapApi = getGoogleApi()

const AnyReactComponent = ({ text }) => <div style={{color: "#ff665e"}}className="map-marker">{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: parseFloat(mapApi.lat),
      lng: parseFloat(mapApi.lng),
      isBrowser: mapApi.isBrowser,
      address: mapApi.address,
    },
    zoom: 11,
    key: mapApi.api_key,
  };
 
render() {
    return (
      <div style={{ height: '200px', width: '400px', margin: "0 auto" }} className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={parseFloat(mapApi.lat)}
            lng={parseFloat(mapApi.lng)}
            text="Monticello Vineyards"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default SimpleMap;
