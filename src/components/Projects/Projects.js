import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '../Card'

const Projects = () => {
  let projects = [
    {
      title: 'example',
      github: 'https://github.com/',
      heroku: 'https://dashboard.heroku.com/',
      image: 'https://images.unsplash.com/photo-1653333220719-00559f8b3460?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456'
    },
    {
      title: 'example',
      github: 'https://github.com/',
      heroku: 'https://dashboard.heroku.com/',
      image: 'https://images.unsplash.com/photo-1653333220719-00559f8b3460?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456'
    },
    {
      title: 'example',
      github: 'https://github.com/',
      heroku: 'https://dashboard.heroku.com/',
      image: 'https://images.unsplash.com/photo-1653333220719-00559f8b3460?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456'
    },
    {
      title: 'example',
      github: 'https://github.com/',
      heroku: 'https://dashboard.heroku.com/',
      image: 'https://images.unsplash.com/photo-1653333220719-00559f8b3460?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456'
    },
    {
      title: 'example',
      github: 'https://github.com/',
      heroku: 'https://dashboard.heroku.com/',
      image: 'https://images.unsplash.com/photo-1653333220719-00559f8b3460?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456'
    },
    {
      title: 'example',
      github: 'https://github.com/',
      heroku: 'https://dashboard.heroku.com/',
      image: 'https://images.unsplash.com/photo-1653333220719-00559f8b3460?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456'
    }
  ]


  return (
    <>
      <Grid container justifyContent='center'>
        <h1>My Projects</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent='center'>

        {projects.map(project =>
          <Card></Card>
          )}
      </Grid>
    </>
  )
}

export default Projects