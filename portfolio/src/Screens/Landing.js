import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline } from '@material-ui/core' 

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
                variant='h6'
                component="h6"
                style={{ color: '#555'}}
                >
                I'm Brent Abruzese!
              </Typography>
              <Typography 
              variant="body2"
              color="textSecondary">
                I'm a Software Engineer Focused in the MERN Stack.
              </Typography>
            </Box>
            </Container>
          </Grid>
        </Container>
      </>
    )
  }
}


export default Landing;