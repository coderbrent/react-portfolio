import React, { Component } from 'react'
import { Grid, Box, Container, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Redirect } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <>
        <Grid>
          <Typography>Hello my name is Brent</Typography>
        </Grid>
      </>
    )
  }
}


export default Landing;