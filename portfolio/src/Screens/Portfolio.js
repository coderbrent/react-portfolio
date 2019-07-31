import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline, Icon } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Redirect } from 'react-router-dom'
import SocialLinks from '../Components/SocialLinks'
import projects from '../data/projects.json';
import ProjCard from '../Components/ProjCard';
import { textAlign } from '@material-ui/system';

class Portfolio extends Component {
constructor(props) {
  super(props);

  this.state = {
    projects
  }
}

  render() {
    return (
      <>
      <Container fluid maxWidth="md" style={{ marginTop: 85}}>
      <Typography variant="h3" style={{ 
          fontWeight: 'bolder',
          marginBottom: 15, 
          color: 'darkslateblue',
          textAlign: 'center'
          }}>
          My Portfolio
          </Typography>
          <Typography variant="h6" color="primary" style={{ textAlign: 'center' }}>
            "Here's a nice piece of shit!"
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
            Boy oh boy, I hope that's not what you think when you look at my folio!!
          </Typography>
          <Grid container spacing={1} direction="row" alignContent="flex-start" justify="center" >
            {this.state.projects.map(Project => {
              return <ProjCard
                key={Project.id}
                id={Project.id}
                name={Project.proj_name}
                desc={Project.description}
                img={Project.img}
                links={Project.links.github}
                links2={Project.links.heroku}
              />
            })}
          </Grid>
        <SocialLinks />
      </Container>
    </>
    )
  }
}

export default Portfolio;