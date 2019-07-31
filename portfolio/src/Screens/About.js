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
      <Container maxWidth="sm" style={{ marginTop: 85, textAlign: "flex-start"}}>
        <Typography variant="h3" 
        style={{ 
          fontWeight: 'bolder', 
          marginBottom: 10, 
          color: 'darkslateblue'
          }}>
        A Little Bit About Me...
        </Typography>
          <Box>
            <Typography variant="body2" color="textSecondary" component="p">
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: 10}}>First off - I F*#@ing Love Coding.</Typography>
            I've spent the better part of my life with a deep love for technology. My first experience with a computer (and I'm going to
            really date myself here) was attempting to fix a broken Tandy 2000. My grandmother brought it home from work one day for some reason and I was
            obsessed with trying to figure out how to turn it on. I was around 6 at the time, but I knew what it was capable of (they'd just built a computer room at my elementary school full of
            Tandys). I wanted to get it running to use LOGO and draw with that turtle! Tinkering with the Tandy turned into a full time obsession when
            when AOL rolled around. I spent pretty much all of my free time reading up on Visual Basic so I could build a rock solid warez mass mailer
            and wreak havok in the chatrooms like my hero CooLziE. But as much as I enjoyed the glow of the screen, as time went on, I began to veer away from computers. Around 2001, I wasn't really into
            spending time on my PC anymore. I was getting close to graduating high school and I had to decide what to do with myself. I wasn't the greatest student, so college
            wasn't attractive to me. I spent the following years bouncing around retail jobs. In 2005, my Dad passed away and I had to work full time at that point to help out the family, so education took a back seat.

            
            </Typography>
            {/* <SocialLinks /> */}
        </Box>
      </Container>
    </>
    )
  }
}


export default About;