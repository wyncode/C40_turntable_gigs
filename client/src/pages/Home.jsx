import React from 'react';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1)
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className="hero-image" style={{ marginBottom: 0 }}>
        <div className="hero-btn">
          <Button
            variant="contained"
            color="default"
            href="/search/gigs"
            className={classes.button}
          >
            Find a Gig
          </Button>
          <Button
            variant="contained"
            color="default"
            href="/search/djs"
            className={classes.button}
          >
            Find a DJ
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
