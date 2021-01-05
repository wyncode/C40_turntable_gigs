import React from 'react';
import PlayerGraphyte from './PlayerGraphyte';

const GraphyteSliderImg = ({ src }) => {
  return (
    <>
      <div className="graphyte-slide">
        <img className="graphyte-slide-img" src={src} alt="dj graphyte" />
        <p className="slide-text">Proud Junglist.</p>
        <a className="slide-text" href="#">
          view profile
        </a>
        <PlayerGraphyte />
      </div>
    </>
  );
};

export default GraphyteSliderImg;
