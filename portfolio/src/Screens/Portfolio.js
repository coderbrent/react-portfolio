import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline, Icon } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Redirect } from 'react-router-dom'
import SocialLinks from '../Components/SocialLinks'
import projects from '../data/projects.json';
import ProjCard from '../Components/ProjCard';

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
        <Typography variant="h2" style={{ 
          fontWeight: 'bolder',
          marginBottom: 40, 
          color: 'darkblue'}}>
          Portfolio
          </Typography>
          <Grid container spacing={1} direction="row" alignContent="flex-start" justify="flex-start" > 
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