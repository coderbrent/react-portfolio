import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline, Icon } from '@material-ui/core'
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
          Projects I'm Currently Working On
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
          The projects I post on here are some examples of work I've done solo as well as with groups.
        </Typography>
        <Grid container spacing={1} direction="row" alignContent="flex-start" justify="center" >
          {this.state.projects.map(Project => {
            return <ProjCard
              key={Project.id}
              id={Project.id}
              name={Project.proj_name}
              desc={Project.description}
              img={Project.img}
              links={Project.github}
              links2={Project.heroku}
            />
          })}
        </Grid>
      </Container>
    </>
    )
  }
}

export default Portfolio;