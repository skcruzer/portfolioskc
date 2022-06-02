import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

const ProjectCompCard = ({title, github, heroku, image, description}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title= {title}
      />
      <CardMedia
        component="img"
        border="2px solid black"
        height="194"
        // pull projects image
        image= {image}
        alt="Project Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Repo">
          {/* github icon and link to repo */}
          <a href={github} target="_blank" rel='noopener noreferrer'>
            <GitHubIcon />
          </a>
          
        </IconButton>
        <IconButton aria-label="Deployed">
          {/* icon and link to deployed application */}
          <a href={heroku} target="_blank" rel='noopener noreferrer'>
            <WebIcon />
          </a>
          
        </IconButton>
        
      </CardActions>
    </Card>
  );
}
export default ProjectCompCard