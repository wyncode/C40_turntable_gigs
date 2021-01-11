import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

export default function BookingDialog(props) {
  const { setBooking } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [formData, setFormData] = useState(null);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: ''
  });

  const handleAmountChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookings', formData);
      setBooking(response.data);
      sessionStorage.setItem('booking', response.data);
      // history.push('/');
    } catch (error) {
      alert('Booking Error: ', error.error);
    }
  };

  return (
    <div className="booking-form">
      <Button
        variant="contained"
        color="default"
        onClick={handleClickOpen}
        style={{ fontWeight: 600 }}
      >
        Book me
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <div className="top-dialog-form">
          <DialogTitle id="form-dialog-title">Apply for Gig</DialogTitle>
          <Button id="close-dialog-form" onClick={handleClose} color="primary">
            <CloseIcon />
          </Button>
        </div>
        <form className={classes.root} onSubmit={handleCreateBooking}>
          <DialogContent>
            <TextField
              onChange={handleChange}
              autoFocus
              required
              margin="dense"
              id="name"
              label="Dj name"
              fullWidth
              autoComplete="off"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              required
              margin="dense"
              id="name"
              label="Your Main Genre"
              fullWidth
              autoComplete="off"
            />
            <TextField
              id="event-date"
              label="Event Date"
              type="date"
              defaultValue="01-01-2021"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="timeframe"
              label="Start time"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
            <TextField
              id="timeframe"
              label="End time"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
            <div
              className="text-field-booking-amount"
              style={{ marginTop: '15px' }}
            >
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.amount}
                  onChange={handleAmountChange('amount')}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </div>
          </DialogContent>
          <Typography>
            <Checkbox defaultChecked color="primary" variant="body1" />I agree
            to the Terms and Conditions
          </Typography>

          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="Primary"
              size="large"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
