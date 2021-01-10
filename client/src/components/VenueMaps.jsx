import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import googleMapStyles from '../GoogleMapStyles.js';
import axios from 'axios';

export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    axios
      .get('/api/map')
      .then((res) => {
        this.setState({
          map: res.data
        });
      })
      .catch((err) => console.log(err));
  }

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
        apiKey={this.state.map}
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
  // apiKey: this.state.map
})(Maps);
