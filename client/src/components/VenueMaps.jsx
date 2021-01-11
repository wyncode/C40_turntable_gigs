import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import axios from 'axios';
import GoogleMapStyles from './GoogleMapStyles';

export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: '300px',
      height: '250px',
      marginTop: 20
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
Maps.defaultProps = GoogleMapStyles;
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API
})(Maps);
