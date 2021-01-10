import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 300,
    marginTop: 30
  },
  img: {
    height: 250
  }
});

export default function FindDjsCard({ dj }) {
  const classes = useStyles();
  const [djs, setDjs] = useState([]);

  useEffect(() => {
    fetch('/api/users/djs')
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setDjs(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="findDjs-cards">
      {djs.map((dj) => {
        return (
          <Card key={dj.id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.img}
                square
                component="img"
                alt="DJ avatar"
                image={dj.avatar}
                title="DJs performing"
              ></CardMedia>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography
                  style={{ marginBottom: 0 }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {dj.name}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  {dj.location}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body1" component="p">
                <Link
                  to={`/profile/${dj._id}`}
                  style={{ color: 'black', textAlign: 'center' }}
                >
                  view profile{' '}
                </Link>
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
