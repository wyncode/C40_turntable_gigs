import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import googleMapStyles from '../GoogleMapStyles.js';

export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: '400px',
      height: '300px'
    };
    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{ lat: 40.139714, lng: -84.283182 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Center for Subtropical Affairs'}
        />
      </Map>
    );
  }
}

Maps.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: process.env.MAP_API
})(Maps);
