import React from 'react'
import Navbar from './Navbar'

const Account = () => {
  return ( 
    <div className="full-screen nav_vote_container">

    <Navbar/>
    <div className='text-start mx-5'>
    <br /><br />
    <h3 style={{ fontSize: "40px" }}>Under the guidance of </h3>
    <br />
    <h3 style={{ fontSize: "45px" }}>Dr. Pradeep Kanchan</h3>
    </div>
    <div className='text-end mx-5'>
    <h3 style={{ fontSize: "40px" }}>Development Team </h3>
    <br />
    <h3 style={{ fontSize: "45px" }}>Chirag B S <br />Ahlad Shetty </h3>
    </div>
    </div>
    
  )
}

export default Account