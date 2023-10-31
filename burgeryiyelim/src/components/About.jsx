import React from 'react'
import Burger from "../assets/burger.jpeg"
import  "../styles/About.css"

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${Burger})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur repudiandae consectetur molestias magni veritatis laudantium minus, ratione explicabo ullam inventore labore sequi adipisci error earum voluptatum tempore itaque eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad consequuntur corrupti praesentium commodi necessitatibus modi fugit, quibusdam earum corporis quasi tenetur minus animi delectus deleniti ab rerum, asperiores voluptate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus corporis quasi qui pariatur est molestiae nobis praesentium, et beatae recusandae a perspiciatis nemo? Inventore dicta ducimus molestiae laboriosam nostrum!</p>
      </div>

    </div>
  )
}
