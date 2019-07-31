import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline, Icon } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Redirect } from 'react-router-dom'
import SocialLinks from '../Components/SocialLinks'

class About extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const name = 'Brent Abruzese'
    return (
      <>
      <Container maxWidth="sm" style={{ marginTop: 125}}>
        <Typography variant="h4" 
        style={{ 
          fontWeight: 'bolder', 
          marginBottom: 10, 
          color: 'darkblue'
          }}>
        About Me
        </Typography>
        <Box style={{ textAlign: "center"}}>
          <Typography variant="body1" color="textSecondary" component="p">
          <Typography variant="body1" style={{ fontWeight: 'bold', marginBottom: 10}}>Hi there!</Typography>
          My name is {name} - I'm an ambitious and creative Software Engineer from Central New Jersey!
          Although my background is in ground transportation and logistics (I started and ran a successful black car service for
          about 7 years)
          </Typography>
        </Box>
        <SocialLinks />
      </Container>
    </>
    )
  }
}


export default About;