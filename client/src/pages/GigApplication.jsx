import { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { KeyboardDatePicker } from '@material-ui/pickers';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'November',
  'December'
];
const days = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31'
];

const years = [
  '1960',
  '1961',
  '1962',
  '1963',
  '1964',
  '1965',
  '1966',
  '1967',
  '1968',
  '1969',
  '1970',
  '1971',
  '1972',
  '1973',
  '1974',
  '1975',
  '1976',
  '1977',
  '1978',
  '1979',
  '1980',
  '1981',
  '1982',
  '1983',
  '1985',
  '1986',
  '1987',
  '1988',
  '1989',
  '1990',
  '1991',
  '1992',
  '1993',
  '1994',
  '1995',
  '1996',
  '1997',
  '1998',
  '1999',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021'
];
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
        'Content-Type': 'application/json',
      },
      body: un),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
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
                  inputRef={register({ required: true })}
                  error={errors.soundclound && true}
                />
              </Grid>
              

              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Music Equipment
                </Typography>
              </Grid>
              <Grid item sm>
                <Controller
                  select
                  label="Music Equipment"
                  name="equipment"
                  id="equipment"
                  fullWidth
                  rules={{ required: true }}
                  error={errors.position && true}
                  variant="outlined"
                  margin="dense"
                  defaultValue=""
                  control={control}
                  as={
                    <TextField>
                      <MenuItem value="Turntable">Turntablelights</MenuItem>
                      <MenuItem value="Turntablelights">Turntable + Lights</MenuItem>
                      <MenuItem value="Turntablelightsband">
                        Turntable + Lights + Band
                      </MenuItem>
                    </TextField>
                  }
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Genre
                </Typography>
              </Grid>
              <Grid item sm>
                <Controller
                  select
                  label="Music Genre"
                  name="genre"
                  id="position"
                  fullWidth
                  rules={{ required: true }}
                  error={errors.position && true}
                  variant="outlined"
                  margin="dense"
                  defaultValue=""
                  control={control}
                  as={
                    <TextField>
                      <MenuItem value="Housedj">House DJ</MenuItem>
                      <MenuItem value="HipHopDj">Hip Hop DJ</MenuItem>
                      <MenuItem value="Top40Dj">
                        Top 40 DJ
                      </MenuItem>
                    </TextField>
                  }
                />
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
                  inputRef={register({ required: true })}
                  error={errors.hear && true}
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
