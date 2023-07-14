
import React from 'react'
import "./Home.css"
import { Outlet, useNavigate } from 'react-router'
import Navbar from './Navbar'
import HeroPage from './router/HeroPage'

function Home() {

    
  return (
   <>
   <HeroPage/>
  
   </>
  )
}

export default Home