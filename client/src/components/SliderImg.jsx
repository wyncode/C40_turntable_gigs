import React from 'react';
import PlayerDruiid from './PlayerDruiid';

const SliderImg = ({ src }) => {
  return (
    <>
      <section className="druiid-slide">
        <img className="druiid-slide-img" src={src} alt="dj druiid" />
        <p className="slide-text">Synth Wizard.</p>
        <a className="slide-text" href="#">
          view profile
        </a>
        <PlayerDruiid />
      </section>
    </>
  );
};

export default SliderImg;
