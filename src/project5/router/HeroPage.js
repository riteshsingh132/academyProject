import React, { useState } from 'react';
import heroImage from '../assets/heroimage.jpg';

import { useNavigate } from 'react-router';
const HeroPage = () => {

  const navigate = useNavigate()

  const handleEmpClick = () => {
    navigate("/emplogin")
  }
  const handleHodClick = () => {
    navigate("/hodlogin")
  }

  return (
    <div style={{ position: "relative"}}>

      <div>

        <img style={{ width: "100%" }} src={heroImage} />
        <div className='overlay' style={{ position: "absolute", top: "5%", left: "auto" }}>
          {/* <div className='container mt-5' style={{ textAlign: "center",border:"1px solid red" }}>
            <button onClick={handleEmpClick} className='m-5'>Employee Login</button>
            <button onClick={handleHodClick} className='m-5'>HOD Login</button>
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default HeroPage;
