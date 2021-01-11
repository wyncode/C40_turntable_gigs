import React from 'react';

import ReactMapboxGl, { Layer, Feature, Marker, Popup } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiaW1wb3N0b3IiLCJhIjoiY2s1eDk5aWl0MGZreTNtdGJuMW14cTkyciJ9.mP7ka4ZAU-sVooC4Ljg3_g'
});

const MyMap = (props) => {
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '20rem',
          width: '20rem'
        }}
        center={[-80.2792583, 25.9237979]}
        zoom={[4]}
      >
        <Marker
          coordinates={[-80.2792583, 25.9237979]}
          anchor="bottom"
          style={{ position: 'absolute', top: 200 }}
          flyToOptions={{ center: [-80.2792583, 25.9237979] }}
        >
          <img
            style={{ width: '3rem' }}
            src={
              'http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png'
            }
            alt="fix me!"
          />
        </Marker>
      </Map>
    </div>
  );
};

export default MyMap;
