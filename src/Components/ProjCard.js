import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { __values } from 'tslib';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GitHubButton from 'react-github-btn'

const useStyles = makeStyles({
    card: {
      maxWidth: 'auto',
      margin: 30,
    },
    media: {
      maxHeight: 100
    }
  })

  export default function ProjCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia image={props.img} 
          style={{ 
              minHeight: 150,
              minWidth: 150, 
              borderBottom: '1px solid lightgrey' 
              }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5" style={{fontWeight: 'bold', color: 'darkblue'}}>
            {props.name}
            {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
          <Grid>
        <CardActions style={{ maxHeight: 50 }}>
          <Router>
            <GitHubButton href={props.github} data-icon="octicon-repo-forked" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
          </Router>
        </CardActions>
          </Grid>
      </Card>
    );
  }