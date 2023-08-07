
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import { useState } from 'react';


export default function Navbar() {

  
  const navigateR=useNavigate()

  
  const staffhandle=(newRole)=>{
    navigateR("/login")
    
  }
  const hodhandle=()=>{
    
    localStorage.removeItem("serverlogin")
    navigateR("/")
    
    
  }
  const homeHandle=()=>{
    navigateR("/")
  }

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >RITESH
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button onClick={homeHandle} color="inherit">HOME</Button>
          <Button onClick={staffhandle} color="inherit">LOGIN</Button>
          <Button onClick={hodhandle} color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}