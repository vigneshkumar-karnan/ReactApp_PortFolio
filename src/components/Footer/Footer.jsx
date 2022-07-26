import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Vigneshkumar Karnan</a>

      <ul className='footlinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Home</a></li>
        <li><a href='#career'>Career</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      
      <div className="footer_cr">
        <small>&copy; Vigneshkumar Karnan. All rights reserved.</small>
    </div>
    </footer> 
  )
}

export default Footer