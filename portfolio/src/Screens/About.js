import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Redirect } from 'react-router-dom'
import { sizing } from '@material-ui/system';

class About extends Component {
  render() {
    return (
      <>
        <Typography variant="h1">About</Typography>
      </>
    )
  }
}


export default About;