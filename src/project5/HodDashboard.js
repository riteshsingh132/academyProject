import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';


function HodDashboard() {

  const { state } = useContext(UserContext);
  

  
  const [apprData, setApprData] = useState([])
  const [empname, setEmpname] = useState([])
  const [blogin, setBlogin] = useState([])
  const [toggle,stetoggle]=useState(true)
  
  const location = useLocation();
  const logFind = location.state.logFind;

  const [leaveCount1,setLeaveCount1]=useState(0)
  const [leaveCount2,setLeaveCount2]=useState(0)
  

  console.log(logFind)
  // console.log(apprData.leavestatus)
  useEffect(() => {
    const hodData = JSON.parse(localStorage.getItem("leavedata"))
    const hodData1 = JSON.parse(localStorage.getItem("user1"))
    const hodData2 = JSON.parse(localStorage.getItem("user"))

    setApprData(hodData)
    setEmpname(hodData1)
    setBlogin(hodData2)
  }, [toggle])
  console.log(apprData)

  

  const handleaprove = (id) => {
    const filterStatus=apprData.filter((res)=>res.id!==id)
      const ritesh= apprData.find((item)=>{
        return (
          item.id===id
        )
      } )
      localStorage.setItem("leavedata",JSON.stringify([...filterStatus,{...ritesh,leavestatus:"Approved",leavestatus1:""
 
      }]))
      stetoggle(true)
     alert("Leave" + apprData.leavestatus )
      
  }

  const handleReject = (id) => {
    const filterStatus=apprData.filter((res)=>res.id!==id)
      const ritesh= apprData.find((item)=>{
        return (
          item.id===id
        )
      } )
      localStorage.setItem("leavedata",JSON.stringify([...filterStatus,{...ritesh,leavestatus1:"Rejected",leavestatus:""
 
      }]))
      stetoggle(false)
    // setBossdata({
    //   aprovestatus: "Approve",
    //   rejectstate: "Rejected"
    // })
    // localStorage.setItem("leavestate", JSON.stringify(bossdata))
    console.log(id)
   

  }

  

  return (
    <div style={{marginTop:"100px"}}>
      {/* {apprData?.map((item)=>{
      return <>
      {empname.map((det)=>{
        return<>
          <h2>Emp Name :{det.firstname}</h2>
        </>
      })}
      <h2>{item.leavereason}</h2>
      <h2>{item.formdate}</h2>
      <h2>{item.todate}</h2>
     </> 
    })} */}
      <div className=' mb-5 d-flex' style={{ border: "1px solid #ccc" }}>

        {/* <h4>Welcome Mr {blogin.map((r) => { return <> <span>{r.firstname} {r.lastname}</span></> })}</h4> */}
        <h4>Welcome Mr {logFind.firstname} {logFind.lastname}</h4>

      </div>
      <div className='container d-flex mb-5 justify-content-center col-12 flex-wrap gap-3 flex-direction-row' style={{ textAlign: "center" }}>
      {apprData !==[] && apprData?.map((item) => {
        return <>

            <div style={{ border: "1px solid #ccc", padding: "5px 15px", borderRadius: "10px" }}>
              <h2>Emp Name:<span>{item.apEmpName}</span>
                {/* {empname.map((det, i) => {
                  return <>

                    <span>{det.firstname} {det.lastname}</span>
                  </>
                })} */}
              </h2>
              <h5>Reason: {item.leavereason}</h5>
              <h5>from :{item.fromdate}</h5>
              <h5>To {item.todate}</h5>
              
              <Button onClick={()=>handleaprove(item.id)}  variant="contained" sx={{ background: "green", color: "white" }}>Approve</Button>
              <Button onClick={()=>handleReject(item.id)} variant="contained" sx={{ background: "red", color: "white" }}>Reject</Button>
            </div>

        </>
      })}
      </div>


    </div>
  )
}

export default HodDashboard