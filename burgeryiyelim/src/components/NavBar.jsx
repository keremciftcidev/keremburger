import React from 'react'
import BurgerLogo from '../assets/2.png'
import { Link } from 'react-router-dom'
import Navbar from '../styles/Navbar.css'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={BurgerLogo} alt="" />
            <div className='mainLink'>
                <Link to={"/"}>Anasayfa 
                </Link>
                <Link to={"/menu"}>Menu 
                </Link>
                <Link to={"/about"}>About 
                </Link>
                <Link to={"/contact"}>Contact 
                </Link>
            </div>
        </div>
    </div>
  )
}
