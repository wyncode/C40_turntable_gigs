import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '3rem 0',
    alignItems: 'center'
  },
  right: {
    flex: '1'
  },
  left: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    backgroundRepeat: 'no-repeat',
    height: '400px',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  para: {
    maxWidth: '450px'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    marginBottom: '0px',
    backgroundColor: theme.palette.secondary.main,
    display: 'inline-block'
  }
}));

export default function SecCard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid sm={12} md={6} item className={classes.right}>
        <img src={'Zach.png'} className={classes.image} />
      </Grid>
      <Grid item sm={12} md={6} className={classes.left}>
        <Typography variant="h3" component="h3" gutterBottom>
          <Avatar className={classes.avatar} alt="Remy Sharp" src="Zach.png" />
          Désir
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom noWrap>
          Developer at{' '}
          <span style={{ color: 'rgb(171 52 125)', fontWeight: '600' }}>
            Turntable Gigs
          </span>
        </Typography>
        <Typography
          variant="p"
          component="p"
          gutterBottom
          className={classes.para}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          molestiae placeat distinctio est, quia nam voluptatum obcaecati, rerum
          quam quaerat non, libero dolores deserunt. Expedita, consectetur nam.
          Eius, vel expedita.
        </Typography>
        <Typography variant="h2" component="div" noWrap>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <LanguageIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <FacebookIcon />
          </IconButton>
          <IconButton edge="start" aria-label="menu">
            <InstagramIcon />
          </IconButton>
        </Typography>
      </Grid>
    </Grid>
  );
}
