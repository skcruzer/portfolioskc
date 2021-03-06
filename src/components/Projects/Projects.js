import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '../Card'
import Cinema from '../../assets/pics/cinema&sip.png'
import StackUp from '../../assets/pics/stackup.png'
import HMS from '../../assets/pics/hms.png'
import ReadMe from '../../assets/pics/readmeGenerator.png'
import Weather from '../../assets/pics/weatherDashboard.png'
import Code from '../../assets/pics/codeQuiz.png'
import News from '../../assets/pics/justTechNews.png'
import './projects.css'

const Projects = () => {
  let projects = [
    {
      title: 'Cinema & Sip',
      github: 'https://github.com/ST12345678910/CinemaAndSip',
      heroku: 'https://st12345678910.github.io/CinemaAndSip/',
      image: Cinema,
      description: 'Website that utilizes 2 server side APIs to create a pairing of Movie and Beverage based on user preferences.'
    },
    {
      title: 'Stack Up',
      github: 'https://github.com/skcruzer/StackUp',
      heroku: 'https://stackupapp.netlify.app/',
      image: StackUp,
      description: 'An application inviting developers to flex their talents by posting their projects to receive real, honest feedback from community members.'
    },
    {
      title: 'HMS',
      github: 'https://github.com/skcruzer/GHW--Hospital-Management-System',
      heroku: 'https://hosp-man-sys.herokuapp.com/dashboard.html',
      image: HMS,
      description: 'A Hospital Management System that helps health care providers manage the information related to their staff and patients effectively.'
    },
    {
      title: 'Just Tech News',
      github: 'https://github.com/skcruzer/python-newsfeed',
      heroku: 'https://just-tech-news-python-skc.herokuapp.com/',
      image: News,
      description: 'A Python website where users can post, upvote, and comment on links to news articles related to tech.'
    },
    {
      title: 'README Generator',
      github: 'https://github.com/skcruzer/readMe-Generator',
      heroku: 'https://github.com/skcruzer/readMe-Generator',
      image: ReadMe,
      description: "This Node.js application uses Inquirer package to take a user's input and generate them a good README file for their projects."
    },
    {
      title: 'Weather Dashboard',
      github: 'https://github.com/skcruzer/weather-Dashboard',
      heroku: 'https://skcruzer.github.io/weather-Dashboard/',
      image: Weather,
      description: 'Web application to check weather forecasts in different cities across the country utilizing the OpenWeather API.'
    },
    {
      title: 'Code Quiz',
      github: 'https://github.com/skcruzer/code-quiz',
      heroku: 'https://skcruzer.github.io/code-quiz/',
      image: Code,
      description: 'A coding quiz consisting of 10 questions designed to test your knowledge on the world of Web Development.'
    }
  ]


  return (
    <>
      <Grid container className='projects'>
        <Grid container justifyContent='center'>
          <h1>My Projects</h1>
        </Grid>
        <Grid container spacing={4} padding={2} justifyContent='center'>

          {projects.map(project =>
            <Grid item>
              <Card title={project.title} github={project.github} heroku={project.heroku} image={project.image} description={project.description}></Card>
            </Grid>
          )}
        </Grid>
      </Grid>

    </>
  )
}

export default Projects 