import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Druiid from '../druiidSlide.png';
import Graphyte from '../graphyteSlide.png';

const useStyles = makeStyles({
  root: {
    width: 200
  }
});

export default function FindDjsCard() {
  const classes = useStyles();

  return (
    <>
      <div className="findDjs-row-1">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="DJs performing"
              height="140"
              image={Druiid}
              title="DJs performing"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <Typography
                style={{ marginBottom: 0 }}
                gutterBottom
                variant="h6"
                component="h2"
              >
                Druiid
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                Fort Lauderdale, FL
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography variant="body1" component="p">
              <a href="#" style={{ color: 'black' }}>
                view profile
              </a>
            </Typography>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="DJs performing"
              height="140"
              image={Graphyte}
              title="DJs performing"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <Typography
                style={{ marginBottom: 0 }}
                gutterBottom
                variant="h6"
                component="h2"
              >
                Graphyte
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                Fort Lauderdale, FL
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography variant="body1" component="p">
              <a href="#" style={{ color: 'black' }}>
                view profile
              </a>
            </Typography>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
