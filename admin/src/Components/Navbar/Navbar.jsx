import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/shopbazaar_logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' style={{ width: '4rem', height: '4rem' }} alt="" />
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
