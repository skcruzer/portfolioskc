import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import proPic from '../../assets/pics/small.png'
import Avatar from '@mui/material/Avatar'

const About = () => {
  return (
    <>

      <Grid justifyContent='center' container padding={2} spacing={2}>
        {/* grid item sizing for mobile responsiveness */}
        <Grid item md={2}></Grid>
        <Grid item xs={12} md={4}>
          <Avatar alt='self pic' src={proPic} sx={{ width: 1, height: 1 }}></Avatar>
        </Grid>

        <Grid item md={1}></Grid>

        <Grid item xs={12} md={3}>
          <h1>Sean Cruz</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa placeat, dolorem reprehenderit corrupti doloremque soluta architecto saepe? Dignissimos, facere nihil odio eveniet illum qui tempora voluptatibus quaerat, doloremque alias maiores.</p>
        </Grid>
      </Grid>


    </>
  )
}

export default About