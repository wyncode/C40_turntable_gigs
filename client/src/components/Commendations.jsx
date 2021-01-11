import React from 'react';
import Divider from '@material-ui/core/Divider';

const Commendations = () => {
  return (
    <>
      <h4>Commendations</h4>
      <div className="commendations">
        <p>"An amazing DJ for a memorable night!"</p>
        <Divider variant="middle" />
        <p>"Such a talented DJ, would recommend for any event."</p>
        <Divider variant="middle" />
        <p>"Communication was very easy and the event was very successful."</p>
        <Divider variant="middle" />
        <p>
          "A talented DJ that was able to get a large crowd vibe the whole night
          and play a variety of underground tracks."
        </p>
        <Divider variant="middle" />
        <p>"10/10!"</p>
      </div>
    </>
  );
};

export default Commendations;
