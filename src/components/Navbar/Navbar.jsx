import React from 'react'
import "./Navbar.css"
import {AiOutlineHome} from "react-icons/ai" 
import {AiOutlineUser} from "react-icons/ai" 
import {BiBook} from "react-icons/bi" 
import {RiServiceLine} from "react-icons/ri" 
import {BiMessageSquareDetail} from "react-icons/bi" 

import { useState } from 'react'

const Navbar = () => {
  const [acticeNav, setacticeNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setacticeNav('#')}  className={acticeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setacticeNav('#about')} className={acticeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience"  onClick={()=>setacticeNav('#experience')} className={acticeNav==='#experience'?'active':''}><BiBook/></a>
      <a href="#portfolio" onClick={()=>setacticeNav('#portfolio')} className={acticeNav==='#portfolio'?'active':''}><RiServiceLine/></a>
      <a href="#contact"  onClick={()=>setacticeNav('#contact')} className={acticeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar