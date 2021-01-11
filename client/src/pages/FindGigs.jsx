import Navbar from '../components/Navbar';
import GigsSearchbar from '../components/GigsSearchBar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import EventIcon from '@material-ui/icons/Event';
import FeatVenues from '../components/FeatVenues';
import Footer from '../components/Footer';
// import Venues from '../components/Venues';

import VenueCards from '../components/VenueCards';

const FindGigs = () => {
  return (
    <>
      <Navbar />
      <div className="gigs-hero-image"></div>
      <div className="exploreGigs">
        <h2 className="explore-title">Explore</h2>
        <p className="filterBy">Filter by: </p>
        <LocationOnIcon
          fontSize="small"
          id="explore-icon"
          className="filterBy"
        />
        <p className="filterBy">Location</p>
        <MusicNoteIcon
          fontSize="small"
          id="explore-icon"
          className="filterBy"
        />
        <p className="filterBy">Genre</p>
        <AlbumIcon fontSize="small" id="explore-icon" className="filterBy" />
        <p className="filterBy">Equipment</p>
        <EventIcon fontSize="small" id="explore-icon" className="filterBy" />
        <p className="filterBy">Date</p>
      </div>
      <GigsSearchbar />
      <div className="featGigs">
        <h2>Upcoming Gigs</h2>
      </div>
      <div className="venue-card">
        <VenueCards />
      </div>
      <FeatVenues />
      <Footer />
    </>
  );
};

export default FindGigs;
