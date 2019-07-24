import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Redirect } from 'react-router-dom'
import { sizing } from '@material-ui/system';

class Landing extends Component {
  render() {
    return (
      <>
        <Container 
        maxWidth="xs"
        style={{ marginTop: 200}}
        >
          <Grid
            container spacing={2}
            alignItems="center"
            justify="center"
            direction="row"
          >
          <Grid item xs={1.75}>
            <img alt="node" 
              src="nodejs-icon.svg"
              width="50"
            />
          </Grid>
          <Grid item xs={1.75}>
            <img alt="express" 
              src="express.svg"
              width="50"
            />
          </Grid>
          <Grid item xs={1.75}>
            <img alt="brent" 
              src="/brentphoto.png"
              width="90"
              style={{ borderRadius: 50 }}
            />
          </Grid>
          <Grid item xs={1.75}>
            <img alt="react" 
              src="react.svg"
              width="50"
            />
          </Grid>
          <Grid item xs={1.75}>
            <img alt="mongo" 
              src="mongo.svg"
              width="50"
            />
          </Grid>
            <Box style={{ textAlign: "center"}} >
              <Typography
                variant='body2'
                component="body">
                Brent Abruzese - Web Developer
              </Typography>
              <Typography 
              variant="caption"
              color="textSecondary">
                Mongo, Express, React, Node
              </Typography>
            </Box>
          </Grid>
        </Container>
      </>
    )
  }
}


export default Landing;