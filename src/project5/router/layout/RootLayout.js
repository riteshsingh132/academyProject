import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Navbar'
import Footer from '../../Footer'

function RootLayout() {
  return (
    
    <div>

        <Navbar/>
        <Outlet/>
        
       

    </div>
  )
}

export default RootLayout