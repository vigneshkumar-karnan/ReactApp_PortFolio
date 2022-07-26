import React from 'react'
import './Career.css'
import {VscCircleFilled} from 'react-icons/vsc'
import {BsCalendar3} from 'react-icons/bs'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const data = [
  {
    name: 'Business Website',
    tech: 'ReactJS, Redux, Reactstrap',
    desc: "A Business website to provide general information about the organization and to explain it's activities. Contains multiple pages dedicated to different aspects of your business, such as a detailed catalogue of the services, and a blog section for company updates.",
    rr1: 'Design and development the app layouts that match designer vision.',
    rr2: 'Collaborating with product owner to discuss the layout and design of the project.',
    rr3: 'Ensuring cross-platform compatibility of the website.',
    rr4: 'Troubleshooting the application errors.'
  },
  {
    name: 'Manufacturing and Quality Tracker',
    tech: 'ReactJS, Redux, SASS, NodeJS',
    desc: "A web-based application for manufacturing traceability and quality control solution which enables to easily store, retrieve, and report on manufacturing plant status, product category and production stability.",
    rr1: 'Design the UI blocks based on wireframes for the application.',
    rr2: 'Design and development of Components using React.',
    rr3: 'Used Redux library to make the components to communicate each other internally.',
    rr4: 'Involved in unit testing and deployment of the application.'
  }
]

const Career = () => {
  return (
    <section id='career'>
      <h5>Projects I worked</h5>
      <h2>Career Chronicle</h2>
      <h4>Software Engineer<br/>Simple Systems<br/></h4>
      <h5><i><BsCalendar3/> May'2021 - Present</i></h5>

      <Swiper 
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="container career_container">
        {
          data.map(({name, tech, desc, rr1, rr2, rr3, rr4}, index)=>{
            return(
              <SwiperSlide key={index} className="project">
              <h5 className='title'>Project Title: </h5><small>{name}</small>
              <h5 className='title'>Technology : </h5><small>{tech}</small>
              <h5 className='title'>Description</h5>
              <small className='description'>{desc}</small>
          <h5 className='title'>Roles and Responsibilities</h5>
          <small className='points'>
          <VscCircleFilled/>{rr1}<br/>
          <VscCircleFilled/> {rr2}<br/>
          <VscCircleFilled/> {rr3}<br/>
          <VscCircleFilled/> {rr4}
          </small>
        </SwiperSlide>


            )
          })
        }
        
        </Swiper>
    </section>
  )
}


export default Career