import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from '../Home'


import ApplyLeave from '../ApplyLeave'
import HodDashboard from '../HodDashboard'
import StaffLogin from '../StaffLogin'
import StaffSignUp from '../StaffSignUp'

import HodSignIn from '../HodSignIn'
import HodSignUp from '../HodSignUp'
import Dashbord from '../Dashbord'
import AuthLogin from '../AuthLogin'
import AuthSignUp from '../AuthSignUp'
import ProtectedRoute from './layout/ProtectedRoute'



export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home />} />
            {/* <Route path='emplogin' element={<StaffLogin />} />
            <Route path='staffsignup' element={<StaffSignUp />} />
            <Route path='hodlogin' element={<HodSignIn/>} ></Route>
            <Route path='hodsignup' element={<HodSignUp/>} ></Route> */}
            <Route path='login' element={<AuthLogin/>}/>
            <Route path='register' element={<AuthSignUp/>}/>
            
            <Route path='applyleave' element={<ApplyLeave />} />
            <Route path='home/HOD' element={
                <ProtectedRoute allowedRoles={"HOD"}>
                    <HodDashboard />
                </ProtectedRoute>
            } />
            <Route path='home/EMP' element={
                <ProtectedRoute allowedRoles={"EMP"}>
                    <Dashbord />
                </ProtectedRoute>
            } />

            {/* <Route path='dashbord' element={<Dashbord />} /> */}
            {/* <Route path='applyleave' element={<ApplyLeave />} />
            <Route path='hoddashbord' element={<HodDashboard />} /> */}
        </Route>
    )
)