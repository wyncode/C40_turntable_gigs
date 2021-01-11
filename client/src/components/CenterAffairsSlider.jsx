import React from 'react';
import Rating from '@material-ui/lab/Rating';

const CenterAffairsSlider = ({ src }) => {
  return (
    <>
      <section className="center-affairs-slide">
        <img
          className="center-affairs-img"
          src={src}
          alt="center-for-subtropical-affairs-location"
        />
        <p className="slide-text" style={{ textAlign: 'center' }}>
          Center for Subtropical Affairs
        </p>
        <p className="slide-text" style={{ textAlign: 'center' }}>
          7145 NW 1st Ct, Miami, FL 33150
        </p>
        <div className="venue-rating" style={{ textAlign: 'center' }}>
          <Rating name="read-only" value={5} readOnly />
        </div>
        <p style={{ textAlign: 'center', fontStyle: 'oblique' }}>
          "A very special and inspiring place in Miami that cares about small
          local artists."
        </p>
        <a className="slide-link" href="#">
          view profile
        </a>
      </section>
    </>
  );
};

export default CenterAffairsSlider;
