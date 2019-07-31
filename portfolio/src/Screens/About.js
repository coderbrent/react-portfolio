import React, { Component } from 'react'
import { Grid, Box, Container, Typography, CssBaseline, Icon } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Redirect } from 'react-router-dom'
import SocialLinks from '../Components/SocialLinks'
import nu from '../public/nu.jpg'

class About extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const name = 'Brent Abruzese'
    return (
      <>
      <Container maxWidth="lg" style={{ marginTop: 85, textAlign: "flex-start"}}>
        <Typography variant="h3" 
        style={{ 
          fontWeight: 'bolder', 
          marginBottom: 10, 
          color: 'darkslateblue'
          }}>
        A Little Bit About Me...
        </Typography>
          <Box>
            <Container>
            <Typography variant="body2" color="textSecondary" paragraph="true" component="p" gutterBottom="true" style={{marginBottom: 40}}>
            <Typography variant="h6" gutterBottom="true" style={{ fontWeight: 'bold' }}>Where I've Been...</Typography>
            I've spent the better part of my life with a deep love for technology. My first experience with a computer (and I'm going to
            really date myself here) was attempting to fix a broken Tandy 2000. My grandmother had brought it home from work one day for some reason and I was
            obsessed with trying to figure out how to turn it on. I was around 6 at the time, but I knew what it was capable of (they'd just built a computer room 
            at my elementary school full of Tandys). I wanted to get it running to use LOGO and draw with that turtle! I never did fix the Tandy, but that got me
            hooked on computers. My teen years I spent on dialup AOL "hacking" (AKA building progs and punters with Visual Basic). My love for computers was always only a hobby,
            however. As I grew up, I began working for my family's cab company. In the back of my mind, everything we did I felt like we could be doing better with
            the right software. On 03/20/2012, after finally getting fed up with the stagnation where I was, I started a Limo service called "Black Rock Limo".
            I envisioned a small personable car service with a heavy lean on tech. Uber already existed, but I believed I could still survive if I offered similar conveniences with
            a small business approach. That strategy led me from a start up with one car and one employee (myself), to a business that four years later would crack $1 million in
            revenue with 22 employees and 10 vehicles.
            </Typography>
            </Container>

            <Container>
            <Typography variant="h6" gutterBottom="true" color="textSecondary" style={{ fontWeight: 'bold' }}>..Where I Want To Go.</Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 10}}>
            While I've had some success in business, I did not want to rest on my laurels. Looking forward, I knew that autonomous vehicles were coming faster down the pipeline. The
            driverless car movement is essentially one of the four horsemen for my industry. So I decided to enroll in a "Code Bootcamp" at Rutgers to learn to code. I figured, worst case,
            I could build some sweet software for myself to set my business further apart from the pack. After enrolling I knew I was where I was supposed to be. The vibe from everyone
            was contagious. This was a group of people eager to learn, innovate and create new things. I started to envision myself in the tech industry working with teams of
            other passionate individuals like this. Halfway through the course, I decided to alter my path. I wanted to be apart of this movement full time. I took on a partner with my business
            and assumed a silent role. As I write this, I'm three days away from graduating with a certificate of completion and I couldn't be more excited to pursue a career in this field!
            </Typography>
            </Container>

            <img href="/nu.jpg" />
            
        </Box>
      </Container>
    </>
    )
  }
}


export default About;