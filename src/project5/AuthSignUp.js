import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, FormLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import uuid from 'react-uuid'
import { v4 as uuidv4 } from 'uuid';


function AuthSignUp() {

    const [isSignup, setIsSignup] = useState(false)

    const [empdata1, setEmpData1] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        username: "",
        password: "",
        role:"",
    })

    const navigateR = useNavigate()

    const [newEmpData1, setNewEmpData1] = useState([])
    console.log(empdata1.role)

    const [radionav, setRadionav] = useState()


    // const handleEmpRadio = (e) => {
    //     setRadionav(e.target.value)
    //     // navigateR("/staffsignup")

    // }

    // const handleHodRadio = (e) => {
    //     setRadionav(e.target.value)
    //     // navigateR("/hodsignup")
    // }

    // code udpated on 14 july 2023
    useEffect(() => {
        const storedData = localStorage.getItem('serverdata');
        if (storedData) {
            setNewEmpData1(JSON.parse(storedData));
        }
    }, []);

    //   useEffect(() => {
    //     localStorage.setItem('user1', JSON.stringify([...newEmpData1, empdata1]));
    //   }, [newEmpData1]);

    //jl

    const handleSubmit = (e) => {

        e.preventDefault()
    }

    const handleLogin = (e) => {


        if (empdata1.firstname == "") {
            alert("Please filld First Name")

        } else if (empdata1.lastname == "") {
            alert("Please fill the last name")

        } else if (empdata1.email == "") {
            alert("Please fill the correct email")
        } else if (empdata1.contact == "") {
            alert("Please fill the correct email")
        } else if (empdata1.username == "") {
            alert("Please fill the correct email")
        } else if (empdata1.password == "") {
            alert("Please fill the passrowd")
        } else {
            const employeeData = { ...empdata1, id: uuidv4() };
            setNewEmpData1([...newEmpData1, employeeData])
            localStorage.setItem("serverdata", JSON.stringify([...newEmpData1, employeeData]))
            alert("You are Successfully registered")
            // navigateR("/emplogin")
            setEmpData1({
                firstname: "",
                lastname: "",
                email: "",
                contact: "",
                username: "",
                password: "",
                role:""
            })
            navigateR("/login")
        }
    }
    // console.log(newEmpData1);

    const handleChange = (e) => {
        const valDAta = { [e.target.name]: e.target.value }
        // console.log(valDAta)
        setEmpData1((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = () => {
        // navigateR("/emplogin")
    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <Box borderRadius="15px" border={"0.25px solid #ccc"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"550px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>
                    <div style={{ gap: "10px" }} className='d-flex'>
                        <div>
                                <input  type='radio' name="role" id='empRadio' onChange={handleChange} size='small' value="EMP" margin='normal' sx={{ mb: 2 }} />
                            <FormLabel sx={{margin:"0 10px"}} htmlFor='empRadio'> Employee
                                {/* <input type='radio' name='role' onChange={handleChange} value="EMP" checked={radionav === "EMP"}/> */}
                            </FormLabel>
                        </div>

                        <div>
                                <input style={{ margin: "0 10px" }} id='hodRadio' type='radio' name="role" onChange={handleChange} size='small' value="HOD" margin='normal' sx={{ mb: 2 }} />
                            <FormLabel htmlFor='hodRadio'>HOD
                            {/* <input type='radio' name='role' onChange={handleChange} value="HOD"/> */}
                            </FormLabel>
                        </div>

                    </div>


                    <> <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>First Name
                            <TextField onChange={handleChange} size='small'  margin='normal' name='firstname' value={empdata1.firstname} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Last Name
                            <TextField onChange={handleChange} size='small'  margin='normal' name='lastname' value={empdata1.lastname} sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormLabel>Email
                                <TextField onChange={handleChange} size='small'  margin='normal' name='email' value={empdata1.email} sx={{ mb: 2 }} />
                            </FormLabel>
                            <FormLabel>Contact
                                <TextField onChange={handleChange} size='small'  margin='normal' name='contact' value={empdata1.contact} sx={{ mb: 2 }} />
                            </FormLabel>
                        </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormControl fullWidth>

                                <FormLabel id="demo-simple-select-label">Dipartment</FormLabel>
                                <Select size='small'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    sx={{ mt: 2, mb: 2 }}>
                                    <MenuItem value={"0"}>Sales</MenuItem>
                                    <MenuItem value={"1"}>Finace</MenuItem>
                                    <MenuItem value={"2"}>Admin</MenuItem>
                                    <MenuItem value={"3"}>Marketing</MenuItem>
                                    <MenuItem value={"4"}>IT</MenuItem>
                                    <MenuItem value={"5"}>Operation</MenuItem>
                                </Select>

                            </FormControl>
                        </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormLabel>Username
                                <TextField onChange={handleChange} size='small'  margin='normal' name='username' value={empdata1.username} sx={{ mb: 2 }} />
                            </FormLabel>
                            <FormLabel>Password
                                <TextField onChange={handleChange} type='password' size='small'  margin='normal' name='password' value={empdata1.password} sx={{ mb: 2 }} />
                            </FormLabel>
                        </Box>
                    </>

                    <Button onClick={() => handleLogin(empdata1.id)} sx={{ mt: 2 }} type='submit' variant="contained">SIGN UP</Button>
                    <Button onClick={handleClick} sx={{ mt: 2 }} >LOG IN</Button>

                </Box>

            </form>



        </>
    )

}

export default AuthSignUp