import React from 'react'
import Grid from '@mui/material/Grid'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

const Footer = () => {
  return (
    <>
      <Grid className='footer' container justifyContent='center' padding={2}>
        <Grid item xs={12} md={3}>
          <a href="https://github.com/skcruzer" target='_blank' rel='noopener noreferrer'>
            <GitHubIcon>
            </GitHubIcon>
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <a href="https://www.linkedin.com/in/seankennethcruz/" target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon>
            </LinkedInIcon>
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <a href="mailto:seankennethcruz@gmail.com" target='_blank' rel='noopener noreferrer'>
            Email: seankennethcruz@gmail.com
          </a>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer