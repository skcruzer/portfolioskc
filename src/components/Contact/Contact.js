import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css'

const Contact = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    nameNeeded: false,
    messageNeeded: false,
    invalidEmail: false
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  // use handleNameBlur to let user know name input field must be entered if clicked away
  const handleNameBlur = () => {
    if (formState.name === '') {
      setFormState({ ...formState, nameNeeded: true, messageNeeded: false, invalidEmail: false })
    }
  }

  // use handleMessageBlur to let user know message input field must be entered if clicked away
  const handleMessageBlur = () => {
    if (formState.message === '') {
      setFormState({ ...formState, messageNeeded: true, nameNeeded: false, invalidEmail: false })
    }
  }

  // function to validate email address inputted by user
  const validateEmail = (inputText) => {
    var mailformat = /^\w+([\•-]?\w+)*@\w+([\•-]?\w+)*(\.\w{2,3})+$/
    if (inputText.match(mailformat)) {
      return true
    } else {
      return false
    }
  }

  // use handleEmailBlur to let user know email input field must be entered if clicked away
  const handleEmailBlur = () => {
    if(validateEmail(formState.email)) 
    {
      console.log('valid email')
    } else {
      setFormState({ ...formState, invalidEmail: true, nameNeeded: false, messageNeeded: false })
    }
  }

  return (
    <>
      <Grid container className='contact' justifyContent='center' padding={5}>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={2}>
          <a href="https://github.com/skcruzer" target='_blank' rel='noopener noreferrer'>
            <GitHubIcon fontSize='large' color='info'>
            </GitHubIcon>
          </a>
        </Grid>
        <Grid item xs={12} md={2}>

          <a href="https://www.linkedin.com/in/seankennethcruz/" target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon fontSize='large' color='info'>
            </LinkedInIcon>
          </a>
          
        </Grid>
        <Grid item xs={12} md={2}>
          <a href="mailto:seankennethcruz@gmail.com" target='_blank' rel='noopener noreferrer'>
            <EmailIcon fontSize='large' color='info'>
            </EmailIcon>
          </a>
        </Grid>
      </Grid>
      
      {/* form for contacting me */}
      <Grid container className='contact' justifyContent='center'>
        <Grid item>
          <h1>Contact</h1>
        </Grid>
      </Grid>
      <Grid container className='contact' justifyContent='center' spacing={3} padding={2}>
        <Grid item xs={12} md={8} lg={7}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              name='name'
              onChange={handleInputChange}
              aria-describedby="my-helper-text"
              onBlur={handleNameBlur}
            />

          </FormControl>
        </Grid>
        <Grid item xs={12} md={8} lg={7}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              name='email'
              onChange={handleInputChange}
              aria-describedby="my-helper-text"
              onBlur={handleEmailBlur}
            />

          </FormControl>
        </Grid>
        <Grid item xs={12} md={8} lg={7}>
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            name='message'
            onChange={handleInputChange}
            onBlur={handleMessageBlur}
          />
        </Grid>
      </Grid>
      <Grid container className='contact' justifyContent='center'>
        <Grid item>
          <Button>Submit</Button>
        </Grid>
      </Grid>
      <Grid container className='contact' justifyContent='center'>
        {/* Clicking away from input fields will render a notification on page to user if left blank or invalid */}
        {
          formState.nameNeeded ? <p> Name is required. </p> : ''
        }
        {
          formState.messageNeeded ? <p> Message is required. </p> : ''
        }
        {
          formState.invalidEmail ? <p> Email is invalid. </p> : ''
        }
      </Grid>

    </>
  )
}

export default Contact