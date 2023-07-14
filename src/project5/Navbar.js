
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
    navigateR("/emplogin")
    
  }
  const hodhandle=()=>{
    navigateR("/hodlogin")
    
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
          >Hello
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button onClick={homeHandle} color="inherit" style={{backgroundColor:"red"}}>HOME</Button>
          <Button onClick={staffhandle} color="inherit">STAFF</Button>
          <Button onClick={hodhandle} color="inherit">HOD</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}