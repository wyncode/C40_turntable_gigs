import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';

const GigsSearchbar = ({ setSearchResults }) => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="containerSearch">
      <div className="dj-searchbar">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            id="dj-search-input"
            type="text"
            label="search"
            placeholder="Search for local gigs"
          />
        </form>
      </div>
    </div>
  );
};

export default GigsSearchbar;
