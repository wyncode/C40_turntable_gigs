import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

export default function ContactButtonDialog(props) {
  const { setBooking } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);
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
      console.log('Booking Error: ', error);
    }
  };

  return (
    <div>
      <Button variant="contained" color="default" onClick={handleClickOpen}>
        Contact me
      </Button>

      <form className={classes.root} onSubmit={handleCreateBooking}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
        >
          <div className="top-dialog-form">
            <DialogTitle id="form-dialog-title">Book djname</DialogTitle>
            <Button
              id="close-dialog-form"
              onClick={handleClose}
              color="primary"
            >
              <CloseIcon />
            </Button>
          </div>
          <DialogContent>
            <TextField
              onChange={handleChange}
              autoFocus
              required
              margin="dense"
              id="name"
              label="Subject"
              fullWidth
              autoComplete="off"
              required
            />
            <TextField
              onChange={handleChange}
              autoFocus
              required
              margin="dense"
              id="name"
              label="Message"
              fullWidth
              autoComplete="off"
              required
            />
          </DialogContent>

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
        </Dialog>
      </form>
    </div>
  );
}
