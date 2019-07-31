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

const useStyles = makeStyles({
    card: {
      maxWidth: 250,
      margin: 30,
    },
    media: {
      height: 150,
    },
    iconHover: {
      margin: 2,
      '&:hover': {
        color: red[800],
      }
  }})

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
            <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: 'bold', color: '#555'}}>
            {props.name}
            {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {props.desc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Router><Link to={props.links}>GitHub</Link></Router>
            </Typography>
          </CardContent>
        </CardActionArea>
          <Grid>
        <CardActions>
          <Icon className={clsx(classes.iconHover, 'fab fa-github-square')}>
          </Icon>
          <Button size="small" color="primary">
              Share
          </Button>
        </CardActions>
          </Grid>
      </Card>
    );
  }