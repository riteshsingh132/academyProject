import React, { useContext, useEffect, useState } from 'react'
import ApplyLeave from './ApplyLeave'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { UserContext } from './context/UserContext';



function Dashbord({ toggle }) {


    // const location = useLocation();
    // const logFind = location.state.logFind;
    const { state } = useContext(UserContext);
    const { user } = state;

    const nameofEmp = JSON.parse(localStorage.getItem("serverlogin")) || []


    console.log(user)

    const navigateR = useNavigate()
    const [apldata, setaplData] = useState([])
    console.log(apldata)
    useEffect(() => {
        const leaveaplydata = JSON.parse(localStorage.getItem("leavedata")) || []
        setaplData(leaveaplydata)
    }, [toggle])



    // console.log(apldata)
    // console.log(btnapprovedata)

    const applyLeaveHandle = () => {
        navigateR("/applyleave")
    }

    const approveCount = apldata.filter((item) => item.leavestatus == "Approved").length
    const rejectCount = apldata.filter((item) => item.leavestatus1 == "Rejected").length
    const pendingCount = apldata.filter((item) => item.leavestatus == "Pending").length

    return (
        <>
            <div className='container col-sm-12' style={{ margin: "100px 0 0 0" }}>
                <div className='card'>
                    <div className='card-body'>
                        <div className=''>
                            <div className='row'>
                                <div>
                                    <h3 style={{ color: "blueviolet" }}>Welcome {nameofEmp.firstname + " " + nameofEmp.lastname}</h3>
                                    <Button onClick={applyLeaveHandle} style={{ margin: "20px 20px" }} variant='contained'>ApplyLeave</Button>
                                </div>
                            </div>
                            <div className='row' style={{ gap: "5px" }}>

                                <div className='col-sm-3 col-md-2' style={{ textAlign: "center", border: "1px solid #ccc", borderRadius: "5px", padding: "5px 10px" }}>
                                    <h4>{apldata.length}</h4>
                                    <h4>Total Leave</h4>
                                </div>
                                <div className='col-sm-3 col-md-2' style={{ textAlign: "center", color: "green", border: "1px solid #ccc", borderRadius: "5px", padding: "5px 10px" }}>
                                    <h4>{approveCount}</h4>
                                    <h4>Approved</h4>
                                </div>
                                <div className='col-sm-3 col-md-2' style={{ textAlign: "center", color: "red", border: "1px solid #ccc", borderRadius: "5px", padding: "5px 10px" }}>
                                    <h4>{rejectCount}</h4>
                                    <h4>Cancelled</h4>
                                </div>
                                <div className='col-sm-3 col-md-2' style={{ textAlign: "center", color: "purple", border: "1px solid #ccc", borderRadius: "5px", padding: "5px 10px" }}>
                                    <h4>{pendingCount}</h4>
                                    <h4>Pending</h4>
                                </div>

                               


                            </div>
                            {/* <hr></hr> */}

                        </div>

                    </div>


                </div>
                <div className=' col-sm-12 d-flex mb-5 mt-4 justify-content-center  flex-wrap'  >

                    {apldata !== [] && apldata?.map((item) => {
                        return <div className='col-sm-5 col-md-3 flex-direction-row m-1' style={{ border: "1px solid #ccc", borderRadius: "10px" }}>

                            <p>Leave for {item.fromdate} to {item.todate}</p>
                            <p>Number of days: {item.leaveDays}</p>
                            <p>From Date: {item.todate}:</p>
                            <p>Reason: <span>{item.leavereason}</span></p>
                            <p>Status: <span className='text-success h5'> {item.leavestatus} </span> 
                            <span className='text-danger mb-3 h5'> {item.leavestatus1} </span></p>

                        </div>


                    })}

                </div>


            </div>

            {/* <div className='container col-sm-10' style={{margin:"150px 0 0 0", border:"1px solid red"}}>abc
            <div className='col-sm-12' style={{border:"1px solid red"}}>
                <div className='row'>
                <div className='col-sm-12' style={{  border: "1px solid #ccc" }}>
                
                <h3 style={{ color: "blueviolet" }}>Welcome Mr/Mis: {nameofEmp.firstname + nameofEmp.lastname }</h3>
                <Button onClick={applyLeaveHandle} style={{ margin: "20px 20px" }} variant='contained'>ApplyLeave</Button>

            </div>
                </div>
            </div>
        </div> */}

            {/* <div className='container' style={{ marginTop: "100px" }}> */}

            {/* <h4>Welcome Mr/Mis {user}</h4> */}
            {/* <div className='col-sm-12' style={{  border: "1px solid #ccc" }}>
                
                <h3 style={{ color: "blueviolet" }}>Welcome Mr/Mis: {nameofEmp.firstname + nameofEmp.lastname }</h3>
                <Button onClick={applyLeaveHandle} style={{ margin: "20px 20px" }} variant='contained'>ApplyLeave</Button>

            </div> */}
            {/* <div className='container d-flex mt-4 mb-5' style={{ textAlign: "center", margin: " 0 auto", gap:"20px" }} >
                <div className='col-sm-2' style={{border:"1px solid #ccc",borderRadius:"5px",padding:"5px 10px"}}>
                    <h3>{apldata.length}</h3>
                    <h3>Total Leave</h3>
                </div>
                <div style={{color:"green" ,border:"1px solid #ccc",borderRadius:"5px",padding:"5px 10px" ,width:"200px"}}><h3>{approveCount}</h3>
                    <h3>Approved</h3>
                </div>
                <div style={{color:"red" ,border:"1px solid #ccc",borderRadius:"5px",padding:"5px 10px" ,width:"200px"}}><h3>{rejectCount}</h3>
                    <h3>Cancled</h3>
                </div>
                <div style={{color:"blue",border:"1px solid #ccc",borderRadius:"5px",padding:"5px 10px" ,width:"200px"}}><h3>{pendingCount}</h3>
                    <h3>Pending</h3>
                </div>
            </div> */}
            {/* <div className='container d-flex mb-5 justify-content-center col-12 flex-wrap' >

                {apldata !== [] && apldata?.map((item) => {
                    return <div 
                        
                        
                        
                        className='container flex-direction-row m-1' style={{ border: "1px solid #ccc", width: "300px", borderRadius: "10px" }}>
                       
                        <p>Leave for {item.fromdate} to {item.todate}</p>
                        <p>Number of days {item.leaveDays}</p>
                        <p>From Date:{item.todate}:</p>

                        <h5>Reason:<span>{item.leavereason}</span></h5>
                        <h6>Status</h6>
                        <p>{item.leavestatus} </p>
                        <p>{item.leavestatus1}</p>
                    </div>
                            

                })}

            </div> */}


            {/* </div> */}

        </>
    )
}

export default Dashbord