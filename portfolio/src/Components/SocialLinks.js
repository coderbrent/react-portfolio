import React, { Component } from 'react';
import { Grid, Box } from '@material-ui/core'

class SocialLinks extends Component {
  render() {
    return (
    <>
    <Box style={{ textAlign: "flex-start"}}>     
      <Box style={{ marginTop: 15, }}>
        <Grid container direction="row" alignItems="flex-start" justify="flex-start">
          <Grid item sm={1}>
            <a href="https://www.github.com/coderbrent"><img width="35px" src="/github.svg"/></a>
          </Grid>
          <Grid item sm={1}>
            <a href="mailto:brent.abruzese@gmail.com"><img width="35px" src="/envelope-solid.svg"/></a>
          </Grid>
          <Grid item sm={1}>
            <a href="https://www.linkedin.com/in/brent-abruzese"><img width="35px" src="/linkedin-in-brands.svg"/></a>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </>
      )
   }
}

export default SocialLinks;