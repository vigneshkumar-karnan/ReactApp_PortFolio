import React from 'react'
import './About.css'
import dp1 from '../../assets/dp1.png'

const About = () => {
  return (
    <section id='about'>
      <h5><br/>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

          <div className='aboutme'>
            <div className="aboutmeimg">
              <img src={dp1} alt="About Me Image" />
            </div>
          </div>

          <div className="about_content">
            <p> I'm a Software Engineer with 1year of relevant experience in UI Development with React JS. 
              Designed Web-based application using ReactJS and Redux as front end and analysed software 
              development process and suggested alternative technologies. Having good knowledge in Software 
              Development Lifecycle, Source Code Management, CI/CD pipelines and Cloud Services.</p>
            
            <a href='#contact' className='btn btn-1'>Let's Talk</a>
            <p></p>
           </div>
        </div>
    </section>
  )
}

export default About