import React from 'react'
import { Link } from 'react-router-dom'
import Burger from "../assets/burger.jpeg"
import "../styles/Home.css"

export const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${Burger})`}}>
      <div className='order'>
        
        <Link to={"/menu"}>
          <button>SİPARİŞ VER</button>
        </Link>
        
      </div>
    </div>
  )
}
