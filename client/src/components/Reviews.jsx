import React from 'react';
import Divider from '@material-ui/core/Divider';

const Reviews = () => {
  return (
    <>
      <h4>Reviews</h4>
      <div className="commendations">
        <p>"An amazing venue for a memorable night!"</p>
        <Divider variant="middle" />
        <p>
          "The booking agents were amazing and made sure I had everything I
          needed."
        </p>
        <Divider variant="middle" />
        <p>"Communication was very easy and the event was very successful."</p>
        <Divider variant="middle" />
        <p>
          "An amazing venue and team that let me play a variety of genres and
          underground tracks."
        </p>
        <Divider variant="middle" />
        <p>"10/10!"</p>
      </div>
    </>
  );
};

export default Reviews;
