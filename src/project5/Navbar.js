
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import logo from './assets/newlogo.png';



export default function Navbar() {

  const [isLogin, setIsLogin] = useState(true)
  const [sepButton, setSepButton] = useState(null)

  const navigateR = useNavigate()

  const logbutton = JSON.parse(localStorage.getItem("serverlogin"))

  const staffhandle = (newRole) => {
    const nameofEmp = JSON.parse(localStorage.getItem("serverlogin")) || []
    console.log(nameofEmp.username)
    if (nameofEmp.username) {
      localStorage.removeItem("serverlogin")
      setIsLogin(false)
      navigateR("/")
    } else {
      navigateR("/login")


    }


  }
  const hodhandle = () => {

    localStorage.removeItem("serverlogin")
    navigateR("/")


  }
  const homeHandle = () => {
    navigateR("/")
  }





  // useEffect(()=>{

  //   const sepratLogButton=JSON.parse(localStorage.getItem("serverlogin"))

  //   setSepButton(sepratLogButton)

  //   if(sepratLogButton && sepratLogButton.username){
  //     setIsLogin(true)
  //   }else{

  //     setIsLogin(false)
  //   }

  // },[sepButton])


  return (

    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > RSINGH
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Button onClick={homeHandle} color="inherit">HOME</Button>
      
          {logbutton ? <Button onClick={hodhandle} color="inherit">LOGOUT</Button> : <Button onClick={staffhandle} color="inherit">login</Button>}

        </Toolbar>
      </AppBar>
    </Box>
  );
}