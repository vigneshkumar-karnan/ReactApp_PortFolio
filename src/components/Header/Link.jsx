import React from 'react'
import CV from '../../assets/CV.pdf'
import Contact from '../Contact/Contact'

const Link = () => {
  return (
    <div className='link'>
        <a href={CV} className='btn' download> Download CV </a>
        <a href={Contact} className='btn btn-1'>Message</a>
    </div>
  )
}

export default Link