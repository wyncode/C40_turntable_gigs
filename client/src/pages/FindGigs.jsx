import Navbar from '../components/Navbar';
import GigsSearchbar from '../components/GigsSearchBar';
import UpcomingGigs from '../components/UpcomingGigs';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import EventIcon from '@material-ui/icons/Event';
import Pagination from '@material-ui/lab/Pagination';
import FeatVenues from '../components/FeatVenues';
import Footer from '../components/Footer';
import Venues from '../components/Venues';

const FindGigs = () => {
  return (
    <>
      <Navbar />
      <div className="gigs-hero-image"></div>
      <div className="exploreDjs">
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
        <p className="filterBy">Format</p>
        <EventIcon fontSize="small" id="explore-icon" className="filterBy" />
        <p className="filterBy">Date</p>
      </div>
      <GigsSearchbar />
      <UpcomingGigs />
      <Venues />
      <div className="pagination">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>
      <FeatVenues />
      <Footer />
    </>
  );
};

export default FindGigs;
