import { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { Controller, useForm } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { KeyboardDatePicker } from '@material-ui/pickers';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: '0',
    marginBottom: '1rem'
  },
  divider: {
    marginBottom: '1.5rem'
  },
  fileButtonContainer: {
    border: `2px dashed #b8b8b8`,
    borderRadius: '4px',
    height: '9.875rem',
    width: '100%',
    cursor: 'pointer',
    transition: 'all 350ms ease-in-out',
    '&:hover': {
      backgroundColor: '#dbdbdb'
    }
  },
  formLabelTop: {
    marginTop: '0.875rem',
    marginBottom: '-0.175rem'
  }
}));

const GigApplication = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    fetch('/api/application/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <Grid container justify="center">
        <Grid item>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column">
              <Grid item sm style={{ padding: '3rem' }}>
                <Typography variant="h4">Apply for a DJ Gig</Typography>
                <Typography variant="subtitle1">
                  Please complete the form below to apply for a DJ gig.
                </Typography>
              </Grid>
              {/* <Grid item container direction="column"> */}

              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  SoundCloud URL
                </Typography>
              </Grid>
              <Grid item sm>
                <TextField
                  name="musicLink"
                  variant="outlined"
                  label="SoundCloud URL"
                  margin="dense"
                  type="url"
                />
              </Grid>

              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Music Equipment
                </Typography>
              </Grid>
              <Grid item sm>
                <label for="cars">Equipment:</label>

                <select name="equipment" id="cars">
                  <option value="Turntable">Turntable</option>
                  <option value="Turntablelights">Turntable and lights</option>
                  <option value="Turntablelightsband">
                    Turntable, lights and band.
                  </option>
                </select>
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Genre
                </Typography>
              </Grid>
              <Grid item sm>
                <label for="cars">Equipment:</label>

                <select name="genre" id="cars">
                  <option value="Housedj">House DJ</option>
                  <option value="HipHopDJ">Hip Hop DJ</option>
                  <option value="Top40Dj">Top 40 DJ</option>
                </select>
              </Grid>

              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Experience?
                </Typography>
              </Grid>
              <Grid item sm>
                <TextField
                  name="experience"
                  label="DJ Experience!"
                  variant="outlined"
                  margin="dense"
                />
              </Grid>

              <Grid item sm className={classes.textField}>
                <Grid
                  item
                  container
                  justify="center"
                  style={{ marginTop: '1rem' }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    disableElevation
                    type="submit"
                    size="large"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default GigApplication;
