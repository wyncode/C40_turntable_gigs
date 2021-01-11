import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
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
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function VenueCards({ business }) {
  const classes = useStyles();

  return business ? (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="venue avatar" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorite">
            <FavoriteIcon />
          </IconButton>
        }
        title={business.name}
        subheader={business.city}
      />
      <CardMedia
        className={classes.media}
        image={business.image_url}
        title=""
      />
      <IconButton aria-label="genre">
        <MusicNoteIcon fontSize="small" />
        <p className="cardSub">Genre</p>
      </IconButton>
      <IconButton aria-label="music format">
        <AlbumIcon fontSize="small" />
        <p className="cardSub">Format</p>
      </IconButton>
      <IconButton aria-label="pay">
        <AttachMoneyIcon fontSize="small" />
        <p className="cardSub">Pay</p>
      </IconButton>

      <CardActions disableSpacing>
        <Button
          className={classes.button}
          variant="outlined"
          color="default"
          component={Link}
          to="/applygig"
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  ) : null;
}
