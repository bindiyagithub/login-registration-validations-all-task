import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  class ='app-bar' position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            
          <Link to='/'>
          <Button style={{color:'black'}}>Home </Button>
          </Link>

          
          </Typography>
          

          <Link to='/Registration'>
          <Button style={{color:'black' }}>Sign Up</Button>
          </Link>

          <Link to='/Login'>
          <Button style={{color:'black'}}>Sign In </Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>

    
  );
}





