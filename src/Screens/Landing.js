import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline } from '@material-ui/core'
import GitHubButton from 'react-github-btn'

class Landing extends Component {
  render() {
    return (
      <>
        <Container 
        maxWidth="sm"
        style={{ marginTop: 100 }}
        >
          <Grid
            container spacing={3}
            alignItems="center"
            justify="center"
            direction="row"
          >
        <Typography variant="h1" style={{ fontWeight: 'bolder', margin: 10, color: 'darkslateblue', textAlign: 'center'}}>
          Hello, World!
        </Typography>
          <Grid item xs={1.75}>
            <img alt="mongo" 
              src="/mongo.svg"
              width="65"
            />
          </Grid>
          <Grid item xs={1.75}>
            <img alt="express" 
              src="/express.svg"
              width="65"
            />
          </Grid>
          <Grid item xs={1.75}>
            <img alt="brent" 
              src="/brentphoto.png"
              width="75"
              style={{ borderRadius: 50, border: 'solid 2px lightgrey' }}
            />
          </Grid>
          <Grid item xs={1.75}>
            <img alt="react" 
              src="/react.svg"
              width="65"
            />
          </Grid>
          <Grid item xs={1.75}>
            <img alt="node"
              src="/nodejs-icon.svg"
              width="65"
            />
          </Grid>
          <Container>
            <Box style={{ textAlign: "center" }} >
              <Typography
                variant='h5'
                component="h5"
                style={{ color: '#555'}}
                >
                I'm Brent Abruzese!
              </Typography>
              <Typography 
              variant="body2"
              color="textSecondary"
              gutterBottom="true">
                I'm a Software Engineer Focused in the MERN Stack.
              </Typography>
              <GitHubButton
                href="https://github.com/coderbrent" 
                data-size="large" 
                data-show-count="false"
                aria-label="Follow @coderbrent on GitHub">
                Follow @coderbrent
              </GitHubButton>
            </Box>
            </Container>
          </Grid>
        </Container>
      </>
    )
  }
}


export default Landing;