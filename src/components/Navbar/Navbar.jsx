import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {GiNotebook} from 'react-icons/gi'
import {TbMessageDots} from 'react-icons/tb'
import { useState } from 'react'

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNavbar('#')} className={activeNavbar === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#career' onClick={()=> setActiveNavbar('#career')} className={activeNavbar === '#career' ? 'active' : ''}><MdWorkOutline/></a>
      <a href='#skills' onClick={()=> setActiveNavbar('#skills')} className={activeNavbar === '#skills' ? 'active' : ''}><GiNotebook/></a>
      <a href='#contact' onClick={()=> setActiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active' : ''}><TbMessageDots/></a>
    </nav>
  )
}

export default Navbar