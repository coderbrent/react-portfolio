import React from 'react';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { __values } from 'tslib';
import Icon from '@material-ui/core/Icon';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import GitHubButton from 'react-github-btn'

const useStyles = makeStyles({
    card: {
      // maxHeight: 'auto',
      maxWidth: 'auto',
      margin: 30,
    },
    media: {
      maxHeight: 100
    }
  })

  export default function ProjCard(props) {
    const classes = useStyles();

    React.useEffect(() => {
      loadCSS(
        'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
        document.querySelector('#font-awesome-css'),
      );
    }, []);
  
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
          <GitHubButton href={props.github} data-icon="octicon-repo-forked" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
        </CardActions>
          </Grid>
      </Card>
    );
  }