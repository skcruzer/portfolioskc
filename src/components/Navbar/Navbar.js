import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Resume from '../../assets/other/SeanKennethCruz_Resume.pdf'
import './navbar.css'


const ResponsiveAppBar = ({ pageState, setPageState }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenAbout = () => {
    setPageState({ ...pageState, about: true, projects: false, contact: false })
  }

  const handleOpenProjects = () => {
    setPageState({ ...pageState, about: false, projects: true, contact: false})
  }

  const handleOpenContact = () => {
    setPageState({ ...pageState, about: false, projects: false, contact: true })
  }

  return (
    <AppBar position="static" style={{ background: '#284B63'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            style={{ color: 'FFFCFE' }}
          >
            Sean Cruz
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem onClick={handleOpenAbout}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenProjects}>
                <Typography textAlign="center">Portfolio</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <a href={Resume} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">Resume</Typography>
                </a>
              </MenuItem>
              <MenuItem onClick={handleOpenContact}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Sean Cruz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button

              onClick={handleOpenAbout}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About
            </Button>
            <Button

              onClick={handleOpenProjects}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Projects
            </Button>
            <a href={Resume} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Resume
            </Button>
            </a>
            <Button

              onClick={handleOpenContact}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contact
            </Button>

          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;