
import React from 'react'
import "./Home.css"
import { Outlet, useNavigate } from 'react-router'
import Navbar from './Navbar'
import HeroPage from './router/HeroPage'
import heroImage from './assets/heroimage.jpg';
import Footer from './Footer'


function Home() {

    
  return (
   <>
   <HeroPage/>
   <div className='background-image'>
      {/* {heroImage} */}
   </div>
   <Footer/>
   </>
  )
}

export default Home