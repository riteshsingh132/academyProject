import { Box, Button, FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useContext } from 'react';
import { UserContext } from '../project5/context/UserContext';


function AuthLogin() {

  const navigateR = useNavigate()

  const { dispatch } = useContext(UserContext);
  const { state } = useContext(UserContext);
  console.log(state)

  //   const handleSubmit1 = (e) => {
  //     e.preventDefault();
  //     // Assuming you have the staff data to pass
  //     const staffData = {
  //       // ...
  //     };
  //     // Dispatch an action to set the user data
  //     // dispatch({ type: 'SET_USER', payload: staffData });

  //     // Navigate to the HodDashbord component


  //   }

  //help


  const [empdata, setEmpData] = useState({
    username: "",
    password: "",
    role: ""
  })

  // for use the name in leave  i will send the props to get the uer name who is login
  const [loginName, setLoginName] = useState("")

  const handleChange = (e) => {
    const valDAta = { [e.target.name]: e.target.value }

    setEmpData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const [newEmpData, setNewEmpData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setNewEmpData([...newEmpData, empdata])

    const logdata = JSON.parse(localStorage.getItem("serverdata")) || []
    const logFind = logdata.find((item) => item.username === empdata.username && item.password === empdata.password)
    console.log(logFind)

    if (logFind) {
      alert("login Successfull")
      localStorage.setItem('serverlogin', JSON.stringify(logFind));
      const staffData = logFind.firstname + " " + logFind.lastname;

      dispatch({ type: 'SET_USER', payload: staffData });
      navigateR(`/home/${logFind.role}`)

    } else {
      alert("You are not Registered")
    }
  }


  const handleClick = () => {
    navigateR("/register")
  }


  return (
    <>
      <form onSubmit={handleSubmit}>

        <Box borderRadius="15px" border={"0.25px solid #ccc"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"550px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>

          <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
            <FormLabel>Username
              <TextField onChange={handleChange} size='small' margin='normal' name='username' value={empdata.username} sx={{ mb: 2 }} />
            </FormLabel>

            <FormLabel>Password
              <TextField onChange={handleChange} type='password' size='small' margin='normal' name='password' value={empdata.password} sx={{ mb: 2 }} />
            </FormLabel>
          </Box>

          <Button sx={{ mt: 2 }} type='submit' variant="contained">Login</Button>
          <Button onClick={handleClick} sx={{ mt: 2 }} >SIGN UP</Button>
        </Box>
      </form>
    </>
  )
}

export default AuthLogin