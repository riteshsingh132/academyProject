import { Box, Button, FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'



function HodSignIn() {
    const navigateR = useNavigate()

    const [empdata, setEmpData] = useState({
      username: "",
      password: "",
    })
  // console.log(empdata)
    const handleChange = (e) => {
     
      // console.log(valDAta)
      setEmpData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  
  
    const [newEmpData, setNewEmpData] = useState([])
  
    const handleSubmit = (e) => {
  
      e.preventDefault()
      setNewEmpData([...newEmpData, empdata])
  // console.log(empdata)
      const logdata = JSON.parse(localStorage.getItem("user")) ||[]
      console.log(logdata)
      const logFind = logdata.find((item)=>item.username===empdata.username && item.password ===empdata.password) 
      
      console.log(logFind)
  
      // localStorage.setItem("userdetails",JSON.stringify([...newEmpData, empdata]))
      if(logFind !== undefined){    
      // if(empdata.username===logdata.username){
        navigateR("/hoddashbord",{state:{logFind}})
        console.log(logFind.firstname)
      }else {
            alert("Please fill the correct data")
            
      }
    }
  
    const handleClick = () => {
      navigateR("/hodsignup")
    }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <Box borderRadius="15px" border={"0.25px solid #ccc"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"550px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>
        
          <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
            <FormLabel>Username
              <TextField onChange={handleChange} size='small' placeholder='Enter username' margin='normal' name='username' value={empdata.username} sx={{ mb: 2 }} />
            </FormLabel>

            <FormLabel>Password
              <TextField onChange={handleChange} type='password' size='small' placeholder='Enter Password' margin='normal' name='password' value={empdata.password} sx={{ mb: 2 }} />
            </FormLabel>
          </Box>

          <Button sx={{ mt: 2 }} type='submit' variant="contained">Login</Button>
          <Button onClick={handleClick} sx={{ mt: 2 }} >SIGN UP</Button>
        </Box>
      </form>
    </>
  )
}


export default HodSignIn