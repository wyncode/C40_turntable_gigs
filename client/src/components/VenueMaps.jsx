import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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
Maps.defaultProps = GoogleMapStyles;
export default GoogleApiWrapper({
  apiKey: process.env.MAP_API
})(Maps);
