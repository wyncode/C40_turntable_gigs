import Navbar from '../components/Navbar';
import DjSearchBar from '../components/DjSearchBar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import FindDjsCard from '../components/FindDjsCard';
import FeatDjs from '../components/FeatDjs';
import Footer from '../components/Footer';

const FindDjs = () => {
  return (
    <>
      <Navbar />
      <div className="djs-hero-image"></div>

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
      </div>
      <div>
        <DjSearchBar />
        <div className="dj-card">
          <FindDjsCard />
        </div>
        <FeatDjs />
      </div>
      <Footer />
    </>
  );
};

export default FindDjs;
