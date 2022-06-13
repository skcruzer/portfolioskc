import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import proPic from '../../assets/pics/small.png'
import Avatar from '@mui/material/Avatar'
import './about.css'

const About = () => {
  return (
    <>
      <Box>
        <Grid justifyContent='center' className="about" container padding={2} spacing={2}>
          {/* grid item sizing for mobile responsiveness */}
          <Grid item md={2}></Grid>
          <Grid item xs={7} md={4}>
            <Avatar alt='profile picture of me' src={proPic} sx={{ width: .9, height: .9 }}></Avatar>
          </Grid>

          <Grid item xs={12} md={5}>
            <h1>About Me</h1>
            <p>Hi, I'm Sean, a solutions-driven full stack web developer with a previous career in the food industry holding managerial positions at several companies, I was known for having a passion for analyzing problems and building systems and processes to solve them.</p>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <p align="left">
                <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="50" height="50" />
                </a>
                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="50" />
                </a>
                <a href="https://bulma.io/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg" alt="bulma" width="50" height="50" />
                </a>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" />
                </a>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="50" height="50" />
                </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50" />
                </a>
                <a href="https://github.com/about" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/github.svg" alt="github" width="50" height="50" />
                </a>
                <a href="https://graphql.org" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="50" height="50" />
                </a>
                <a href="https://heroku.com" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="50" height="50" />
                </a>
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50" />
                </a>
                <a href="https://www.w3schools.com/java/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/java.svg" alt="java" width="50" height="50" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50" />
                </a>
                <a href="https://jestjs.io" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="50" height="50" />
                </a>
                <a href="https://materializecss.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="materialize" width="50" height="50" />
                </a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50" />
                </a>
                <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="50" height="50" />
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50" />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50" />
                </a>
                <a href="https://webpack.js.org" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="50" height="50" />
                </a>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default About