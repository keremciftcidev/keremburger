import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

import './App.css'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
 <div className="App">
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  <Footer/>
 </div>
  )
}

export default App
