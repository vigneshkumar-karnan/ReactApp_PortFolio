import React from 'react'
import './Header.css'
import Link from './Link'
import DP from '../../assets/dp.png'
import About from '../About/About'

const Header = () => {
  return (
    <header>
      <div className='container container_H'>
          <h3>Hello I'm</h3>
          <h1>Vigneshkumar Karnan</h1>
          <h5 className="text-light">Software Developer</h5>
          <Link />
          
          <div className="dp">
            <img src={DP} alt='Vigneshkumar Karnan'/>
          </div>
          
          <a href={About} className='scroll'>Scroll Down</a>
        </div>
    </header>
    
  )
}

export default Header