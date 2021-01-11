import React from 'react';
import Rating from '@material-ui/lab/Rating';

const GrampsSlider = ({ src }) => {
  return (
    <>
      <section className="gramps-slide">
        <img className="gramps-img" src={src} alt="gramps-wynwood-location" />
        <p style={{ textAlign: 'center' }} className="slide-text">
          Gramps
        </p>
        <p className="slide-text" style={{ textAlign: 'center' }}>
          176 NW 24th St, Miami, FL 33127
        </p>
        <div className="venue-rating" style={{ textAlign: 'center' }}>
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        </div>
        <p style={{ textAlign: 'center', fontStyle: 'oblique' }}>
          "Event coordinators were amazing and always updated me if there were
          any changes."
        </p>
        <a className="slide-link" href="#">
          view profile
        </a>
      </section>
    </>
  );
};

export default GrampsSlider;
