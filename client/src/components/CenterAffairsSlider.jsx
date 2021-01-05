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
        <p className="slide-text">Center for Subtropical Affairs</p>
        <p className="slide-text">7145 NW 1st Ct, Miami, FL 33150</p>
        <div className="venue-rating">
          <Rating name="read-only" value={5} readOnly />
        </div>
        <p>
          "A very special and inspiring place in Miami that cares about small
          local artists."
        </p>
        <a className="slide-text" href="#">
          view profile
        </a>
      </section>
    </>
  );
};

export default CenterAffairsSlider;
