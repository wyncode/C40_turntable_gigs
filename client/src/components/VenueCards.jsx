import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginTop: 30,
    marginLeft: '10%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  button: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  }
}));

export default function VenueCards() {
  const classes = useStyles();

  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch('/api/users/venues')
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setVenues(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="venue-cards">
      {venues.map((venue) => {
        return (
          <Card key={venue.id} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="venue avatar" className="venue-avatar">
                  <img src={venue.avatar} alt="user-avatar" />
                </Avatar>
              }
              action={
                <IconButton aria-label="add to favorite">
                  <FavoriteIcon />
                </IconButton>
              }
              title={venue.name}
              subheader={venue.location}
            />
            <div className="venue-card-img">
              <CardMedia
                className="venue-img"
                className={classes.media}
                image={
                  'https://images.unsplash.com/photo-1485872299829-c673f5194813?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGFydHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                }
                title=""
              />
              <div className="fab">
                <Button
                  className={classes.button}
                  size="small"
                  variant="contained"
                  color="default"
                  component={Link}
                  to="/applygig"
                >
                  Apply
                </Button>
              </div>
            </div>
            <div className="cardSub">
              <IconButton className="cardSub" aria-label="genre">
                <MusicNoteIcon fontSize="small" />
                <p className="cardSub">Various</p>
              </IconButton>
              <IconButton className="cardSub" aria-label="music equipment">
                <AlbumIcon fontSize="small" />
                <p className="cardSub">Provided</p>
              </IconButton>
              <IconButton className="cardSub" aria-label="pay">
                <AttachMoneyIcon fontSize="small" />
                <p className="cardSub">$400</p>
              </IconButton>
            </div>
            <div className="venue-card-button">
              <CardActions disableSpacing>
                <Link to={`/profile/${venue._id}`} style={{ color: 'black' }}>
                  view profile{' '}
                </Link>
              </CardActions>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
