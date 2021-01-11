import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import googleMapStyles from '../GoogleMapStyles';

export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: '30%',
      height: '100%'
    };
    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      >
        <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
      </Map>
    );
  }
}

Maps.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API
})(Maps);
