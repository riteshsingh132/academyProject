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
  if (diffDays > 0) {
    leaveshow = diffDays
  } else {
    leaveshow = 0
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
    leave.leaveDays = diffDays
    setData([...data, leave])

    if (leave.fromdate === "") {
      alert("Please fill the From data")
    } else if (leave.todate === "" && leave.todate < leave.fromdate) {

      alert("Please fill the TO data")

    } else if (leave.leavereason === "") {

      alert("Please fill all the field")

    } else if (user === null) {
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
      <div className='container' style={{ margin: "150px auto 0 auto"  }}>

        <div className='card shadow col-sm-5 mt-5 ' style={{ margin: "0 auto",borderRadius:"10px" }}>
          <div className='card-body'>
            <div className='row'>
              <div className='col-sm-6 form-group'>
                <label>From</label>
                <input onChange={handleChange} type='date' className='form-control' name='fromdate' value={leave.fromdate}/>
              </div>
              <div className='col-sm-6'>
                <label>To</label>
                <input onChange={handleChange} type='date' className='form-control' name='todate' value={leave.todate} />
              </div>
            </div>

            <div className='row'>
              <div onChange={handleChange} className='col-sm-6 form-group' type='number' name='leaveDays' value={diffDays}>
                Count Of Leave: {leaveshow}
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 form-group'>
                <label >Resaon</label>
                <TextareaAutosize className='form-control' onChange={handleChange} minRows={3} name='leavereason' value={leave.leavereason} />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-7' style={{margin:"0 auto"}} >
           

                <Button className='btn' onClick={handleSubmit} size={"medium"} sx={{ mt: 2 }} type='submit' variant="contained">Submit</Button>
                <Button className='btn' onClick={handleCancel} variant="outlined" size={"medium"} sx={{ mt: 2 }} style={{marginLeft:"15px"}} >Cancel</Button>
          
              </div>
            </div>

          </div>
        </div>
       
      </div>

     
    </>
  )
}

export default ApplyLeave