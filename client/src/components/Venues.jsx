import React, { useState, useEffect } from 'react';
import VenueCards from './VenueCards';
import axios from 'axios';

const Venues = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const callYelpAPI = async () => {
      try {
        const response = await axios.get('/api/yelp');
        setBusinesses(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    callYelpAPI();
  }, []);

  return (
    <div className="venues">
      {businesses.map((business) => {
        return (
          <div key={business.id}>
            <VenueCards business={business} />
          </div>
        );
      })}
    </div>
  );
};

export default Venues;
