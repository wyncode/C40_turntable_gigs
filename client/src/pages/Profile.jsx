import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BookingDialog from '../components/BookingDialog';
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

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none'
  }
}));

const Profile = () => {
  var { currentUser } = useContext(AppContext);
  // const {
  //   currentUser: { name }
  // } = currentUser;
  let name = 'default';
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    console.log('name ' + name);

    if (currentUser !== null) {
      name = currentUser.name;
      console.log('name ' + name);
    }
  }, [currentUser]);

  // const { currentUser, setCurrentUser, setLoading } = useContext(AppContext)

  return (
    <>
      <Navbar />
      <AppContext.Consumer>
        {(context) => (
          <>
            <div className="profile-cover-img">
              <img className="cover-img" src={CoverDefault} alt="cover-photo" />
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
              <div className="user-profile-avatar">
                <img
                  className="user-avatar"
                  src={AvatarDefault}
                  alt="profile-picture"
                />
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
              </div>
              <div className="book-me-button">
                <BookingDialog />
              </div>
            </div>

            <div className="profile-block">
              <div className="profile-block-row">
                <div className="profile-info-column">
                  <div className="user-info-row">
                    <h4>name</h4>
                    {context.currentUser &&
                    context.currentUser.name !== undefined ? (
                      <span>{context.currentUser.name}</span>
                    ) : (
                      <div>Dummy name</div>
                    )}
                    {context.currentUser &&
                    context.currentUser.location !== undefined ? (
                      <div>{context.currentUser.location}</div>
                    ) : (
                      <div>Dummy Location</div>
                    )}
                    <Divider variant="middle" />
                    <div className="user-social-row">
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
                        <h4>Music</h4>
                        {context.currentUser?._id === id && (
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
                    {context.currentUser &&
                    context.currentUser.About !== undefined ? (
                      <p>{context.currentUser.About}</p>
                    ) : (
                      <p>Dummy About</p>
                    )}
                    <Divider variant="middle" />
                    <div className="profile-experience-row">
                      <h4>Experience</h4>
                      {context.currentUser &&
                      context.currentUser.experience !== undefined ? (
                        <p>{context.currentUser.experience}</p>
                      ) : (
                        <p>Dummy experience</p>
                      )}
                      <Divider variant="middle" />
                      <div className="profile-experience-row">
                        <h4>Commendations</h4>
                        {context.currentUser &&
                        context.currentUser.Commendations !== undefined ? (
                          <p>{context.currentUser.Commendations}</p>
                        ) : (
                          <p>Dummy Commendations</p>
                        )}
                        <div className="edit-icon">
                          <IconButton aria-label="edit">
                            <EditIcon />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </AppContext.Consumer>

      <Footer />
    </>
  );
};

export default Profile;
