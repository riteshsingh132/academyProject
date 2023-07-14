import { Box, Button, FormLabel, TextField, TextareaAutosize } from '@mui/material'
import { margin } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Dashbord from './Dashbord'

import { useLocation, useNavigate } from 'react-router';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import moment from 'moment';
import uuid from 'react-uuid';

function ApplyLeave() {

  const navigateR = useNavigate()

  const { state } = useContext(UserContext);
  const { user } = state;
  console.log(user)
  // const location = useLocation();
  // const logFind = location.state.logFind;



  const [toggle, setToggle] = useState(false)
  const [apprData, setApprData] = useState([])


  const [leave, setLeave] = useState({
    apEmpName: user,
    fromdate: "",
    todate: "",
    leavereason: "",
    leavestatus: "Pending",
    leaveDays: 0,

  })
  console.log(leave.apEmpName)
  const fromdateobj = new Date(leave.fromdate)
  const toDateobj = new Date(leave.todate)
  const diffTime = Math.abs(fromdateobj - toDateobj)
  const diffDays = Number(Math.ceil(diffTime / (1000 * 60 * 60 * 24)))
  
let leaveshow;
  if(diffDays> 0){
    leaveshow=diffDays
  }else{
    leaveshow=0
  }
  
  useEffect(() => {
    let hodData;
    try {
      hodData = JSON.parse(localStorage.getItem("leavedata")) || [];
    } catch (error) {
      hodData = null
    }

    setApprData(hodData)
  }, [toggle])

  
  
  const [data, setData] = useState([])

  console.log(data)
  const handleChange = (e) => {
    
    setLeave((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log(leave)

  const handleSubmit = (e) => {
    e.preventDefault()
    leave.leaveDays=diffDays
    setData([...data, leave])

    if (leave.fromdate === "") {
      alert("Please fill the From data")
    } else if (leave.todate === "" && leave.todate < leave.fromdate) {

      alert("Please fill the TO data")

    } else if (leave.leavereason === "") {

      alert("Please fill all the field")

    }else if(user === null){
      navigateR("/emplogin")
    }
     else {
      localStorage.setItem("leavedata", JSON.stringify([...apprData, { ...leave, id: uuid() }]))
      setToggle(!toggle)
      setLeave({
        fromdate: "",
        todate: "",
        leavereason: "",
      })

      navigateR("/dashbord")
    }
  }


  const handleCancel = () => {

    if (leave.fromdate && leave.todate && leave.leavereason) {

      navigateR("/dashbord")
    } else {
      setLeave({
        fromdate: "",
        todate: "",
        leavereason: ""
      })

    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <Box borderRadius="15px" border={"0.25px solid #ccc"} alignItems={"center"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"450px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>

          <Box display={"flex col-6"} >
            <FormLabel><p>From</p>
              <TextField onChange={handleChange} size='small' type='date' sx={{ mb: 2 }} name='fromdate' value={leave.fromdate} />
            </FormLabel>

            <FormLabel sx={{ ml: 2 }}><p>To</p>
              <TextField onChange={handleChange} size='small' type='date' sx={{ mb: 2, }} name='todate' value={leave.todate} />
            </FormLabel>
            <div onChange={handleChange} style={{margin:"10px 0"}} type='number' name='leaveDays' value={diffDays} >Count Of Leave: {leaveshow}</div>
            <FormLabel sx={{ mb: 3 }}><p>Reason</p>
              <TextareaAutosize onChange={handleChange} minRows={3} style={{ width: "400px" }} name='leavereason' value={leave.leavereason} />
            </FormLabel>
            <h2 onChange={handleChange} style={{ width: "400px" }} name='leavestatus'></h2>


            <Box style={{ width: "75%", margin: " 0 auto", textAlign: "center" }}>
              <Button onClick={handleSubmit} size={"medium"} sx={{ mt: 2 }} type='submit' variant="contained">Submit</Button>
              <Button onClick={handleCancel} style={{ marginLeft: "15px" }} variant="outlined" size={"medium"} sx={{ mt: 2 }} >Cancel</Button>
            </Box>
          </Box>
        </Box>
      </form>
      {/* <Dashbord toggle={toggle}/> */}
    </>
  )
}

export default ApplyLeave