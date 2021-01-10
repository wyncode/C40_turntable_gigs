import { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Controller, useForm } from 'react-hook-form';

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
  const fileUploadRef = useRef();
  const { handleSubmit, register, control, errors, setValue } = useForm();
  const classes = useStyles();

  const onFileUpload = () => {
    fileUploadRef.current.click();
  };
  const onSubmit = (data) => {
    const formData = {
      fullName: `${data.firstName} ${data.lastName}`,
      birthDate: `${data.month} ${data.day} ${data.year} `,
      streetAddress: data.streetAddress,
      streetAddressLine2: data.streetAddressLine2,
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      email: data.email,
      soundcloud: data.soundcloud,
      phoneNumber: data.phoneNumber,
      position: data.phoneNumber,
      hear: data.hear,
      startDate: data.startDate,
      resume: data.startDate
    };
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <Grid container justify="center">
        <Grid item>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  Full Name
                </Typography>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="First Name"
                    name="firstName"
                    margin="dense"
                    inputRef={register({ required: true })}
                    error={errors.firstName && true}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    margin="dense"
                    inputRef={register({ required: true })}
                    error={errors.lastName && true}
                  />
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Birth Date
                </Typography>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item sm>
                  <Controller
                    select
                    label="Month"
                    fullWidth
                    name="month"
                    id="month"
                    rules={{ required: true }}
                    error={errors.month && true}
                    variant="outlined"
                    margin="dense"
                    defaultValue=""
                    control={control}
                    as={
                      <TextField>
                        {months.map((month) => (
                          <MenuItem key={month} value={month}>
                            {month}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                  />
                </Grid>
                <Grid item sm>
                  <Controller
                    select
                    label="Day"
                    fullWidth
                    name="day"
                    id="day"
                    rules={{ required: true }}
                    error={errors.day && true}
                    variant="outlined"
                    margin="dense"
                    defaultValue=""
                    control={control}
                    as={
                      <TextField>
                        {days.map((day) => (
                          <MenuItem key={day} value={day}>
                            {day}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                  />
                </Grid>
                <Grid item sm>
                  <Controller
                    select
                    label="Year"
                    fullWidth
                    name="year"
                    id="year"
                    rules={{ required: true }}
                    error={errors.year && true}
                    variant="outlined"
                    margin="dense"
                    defaultValue=""
                    control={control}
                    as={
                      <TextField>
                        {years.map((year) => (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                  />
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Current Business Address
                </Typography>
              </Grid>
              <Grid item sm>
                <TextField
                  name="streetAddress"
                  variant="outlined"
                  label="Street Address"
                  fullWidth
                  margin="dense"
                  inputRef={register({ required: true })}
                  error={errors.streetAddress && true}
                />
              </Grid>
              <Grid item sm>
                <TextField
                  name="streetAddressLine2"
                  variant="outlined"
                  label="Street Address Line 2"
                  fullWidth
                  margin="dense"
                  inputRef={register({ required: true })}
                />
              </Grid>

              <Grid item container spacing={3}>
                <Grid item sm>
                  <TextField
                    name="city"
                    variant="outlined"
                    label="City"
                    margin="dense"
                    inputRef={register({ required: true })}
                  />
                </Grid>
                <Grid item sm>
                  <TextField
                    name="state"
                    variant="outlined"
                    label="State or Province"
                    margin="dense"
                    inputRef={register({ required: true })}
                  />
                </Grid>
              </Grid>
              <Grid item sm>
                <TextField
                  name="postalCode"
                  variant="outlined"
                  label="Post / Zip Code"
                  margin="dense"
                  fullWidth
                  inputRef={register({ required: true })}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Email Address
                </Typography>
              </Grid>
              <Grid item sm>
                <TextField
                  name="email"
                  variant="outlined"
                  label="E-mail"
                  margin="dense"
                  placeholder="ex: myname@example.com"
                  type="email"
                  inputRef={register({
                    required: true,
                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                  })}
                  error={errors.email && true}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  SoundCloud URL
                </Typography>
              </Grid>
              <Grid item sm>
                <TextField
                  name="soundcloud"
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
                  Phone Number
                </Typography>
              </Grid>
              <Grid item sm>
                <TextField
                  name="phoneNumber"
                  variant="outlined"
                  label="Phone Number"
                  margin="dense"
                  inputRef={register({
                    required: true,
                    pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                  })}
                />
              </Grid>

              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Type of DJ
                </Typography>
              </Grid>
              <Grid item sm>
                <Controller
                  select
                  label="Position Applied"
                  name="position"
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
                      <MenuItem value="dj">DJ</MenuItem>
                      <MenuItem value="djLights">DJ + Lights</MenuItem>
                      <MenuItem value="dlLightsMusician">
                        DJ + Lights + Live Musician
                      </MenuItem>
                    </TextField>
                  }
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  How did you hear about gig?
                </Typography>
              </Grid>
              <Grid item sm>
                <TextField
                  name="hear"
                  label="Tell us!"
                  variant="outlined"
                  margin="dense"
                  inputRef={register({ required: true })}
                  error={errors.hear && true}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Available Start Date
                </Typography>
              </Grid>
              <Grid item sm>
                <Controller
                  name={'startDate'}
                  control={control}
                  rules={{ required: true }}
                  error={errors.startDate && true}
                  defaultValue={''}
                  inputVariant="outlined"
                  margin="dense"
                  InputAdornmentProps={{ position: 'end' }}
                  label="Start Date"
                  variant="inline"
                  onChange={(value) => setValue('startDate', value)}
                  format="dd-mm-yyyy"
                  as={<KeyboardDatePicker autoOk />}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.formLabelTop}>
                  Upload Your DJ Résumé
                </Typography>
              </Grid>
              <Grid item sm className={classes.textField}>
                <Grid
                  container
                  className={classes.fileButtonContainer}
                  onClick={onFileUpload}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{
                    border: errors.resume ? '1px solid red' : undefined
                  }}
                >
                  <CloudUploadIcon
                    style={{ fontSize: 48, color: 'rgba(52, 49, 76, 0.54) ' }}
                  />
                  <span>Upload Files Here</span>
                  <input
                    type="file"
                    name="resume"
                    hidden
                    id="file"
                    accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                    autoComplete="off"
                    ref={(e) => {
                      register(e, { required: true });
                      fileUploadRef.current = e;
                    }}
                  />
                </Grid>
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
