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
        <a href="https://github.com/" target='_blank'>
        <GitHubIcon>
        </GitHubIcon>  
        </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <a href="https://linkedin.com/" target='_blank'>
            <LinkedInIcon>
            </LinkedInIcon>
          </a>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer