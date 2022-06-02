import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import proPic from '../../assets/pics/small.png'
import Avatar from '@mui/material/Avatar'

const About = () => {
  return (
    <>
      <Box minHeight='85vh'>
        <Grid justifyContent='center' container padding={2} spacing={2}>
          {/* grid item sizing for mobile responsiveness */}
          <Grid item md={2}></Grid>
          <Grid item xs={7} md={4}>
            <Avatar alt='profile picture of me' src={proPic} sx={{ width: 1, height: 1 }}></Avatar>
          </Grid>

          <Grid item md={1}></Grid>

          <Grid item xs={12} md={5}>
            <h1>About Me</h1>
            <p>Hi, I'm Sean. I am a solutions-driven full-stack web developer with a Web Development Certificate from the University of California, Irvine. With a previous career in the food industry holding managerial positions at several companies, I was known for having a passion for analyzing problems and building systems and processes to solve them.</p>
            <h4>Fun Facts:</h4>
            <l>
              <li>I played water polo for the Philippines National Team</li>
              <li>I helped start a cauliflower tater-tot company called <a
                href="https://www.facebook.com/NolitaNatural/" target="_blank" rel='noopener noreferrer'>Nolita Natural</a></li>
            </l>
          </Grid>

          <Grid item xs={12} md={10}>
            <h3>Technical Skills:</h3>
            <p>Frontend: HTML (HTML5), CSS (CSS3), jQuery, Javascript, Bootstrap, AJAX, ReactJS, Tailwind CSS, Material UI, Bulma CSS.</p>

            <p>Backend: MySQL, MongoDB (NoSQL), Mongoose, Express (Express.js), React, Node (Node.js), Java, Spring Framework, Handlebars, Webpack, Sequelize, ORM (Object Relational Mapping).</p>
              
            <p>Additional: GitHub, GitLab, Jest, Insomnia REST</p>

            <p>Operating Systems: Windows, macOS</p>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default About