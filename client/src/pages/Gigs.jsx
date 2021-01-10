import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/AppContext';
import AvatarDefault from '../default_avatar.png';
import Divider from '@material-ui/core/Divider';
import CoverDefault from '../cover-default.png';
import Footer from '../components/Footer';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import EditIcon from '@material-ui/icons/Edit';

//TODO this is basically venue profile

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none'
  }
}));

//   <h1>Venue Name</h1>
{
  /* <p>Venue Avatar</p>
<p>Venue Location</p>
<h2>Description</h2>
<p>Timeframe, pay, equipment provided, genre, dates, payment method</p>
<h3>Images</h3>
<h4>reviews</h4> */
}

const Gigs = () => {
  const [preview, setPreview] = useState(null);
  const { currentUser } = useContext(AppContext);
  const { id } = useParams();
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className="profile-cover-img">
        <img className="cover-img" src={CoverDefault} alt="cover-photo" />
        {currentUser?._id === id && (
          <div className="cover-img-icon">
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="default"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
        )}
        <div className="user-profile-avatar">
          <img
            className="user-avatar"
            src={AvatarDefault}
            // src={preview || djs?.avatar || AvatarDefault}
            alt="profile-picture"
          />
          {currentUser?._id === id && (
            <div className="avatar-photo-icon">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="default"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          )}
        </div>
        <div className="contact-me-button">
          <button>Contact</button>
        </div>
      </div>

      <div className="profile-block">
        <div className="profile-block-row">
          <div className="profile-info-column">
            <div className="user-info-row" style={{ textAlign: 'center' }}>
              <h4>name</h4>
              <p>location</p>
              <Divider variant="middle" />
              <div className="user-social-row" style={{ textAlign: 'center' }}>
                <h4>Connect</h4>
                <IconButton
                  aria-label="instagram profile"
                  style={{ color: '#c34893' }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  aria-label="facebook profile"
                  style={{ color: '#1677f2' }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  aria-label="twitter profile"
                  style={{ color: '#1fa1f2' }}
                >
                  <TwitterIcon />
                </IconButton>
                <Divider variant="middle" />
                <div className="profile-music-row">
                  <h4>Images</h4>
                  {currentUser?._id === id && (
                    <div className="edit-icon">
                      <IconButton aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="profile-about-column">
            <div className="profile-about-row">
              <h4>About</h4>
              <Divider variant="middle" />
              <div className="profile-experience-row">
                <h4>Something</h4>
                <Divider variant="middle" />
                <div className="profile-experience-row">
                  <h4>Venue reviews</h4>
                  <p>"review"</p>
                  {currentUser?._id === id && (
                    <div className="edit-icon">
                      <IconButton aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="open-gigs-column">
          <h1>open gigs</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gigs;
