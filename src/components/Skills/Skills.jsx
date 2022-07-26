import React from 'react'
import './Skills.css'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const Skills = () => {
  return (
    <section id='skills'>
      <h5 className='S_Head'> <br/> My Competence Scale</h5>
      <h2 className='S_title'>Skills</h2>
      <h4 className='S_sub'>IT Skills</h4>
          <div className="container container_skill">
          <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>HTML</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={60} duration={2} easingFunction={easeQuadInOut} >
                   
                  {value => {
                    const roundedValue = Math.round(value);
                    return (

                      <CircularProgressbar value={value} text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })} />
                    );
                  }}
                </AnimatedProgressProvider>
              </article>
            </div>

            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>CSS</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={50} duration={2} easingFunction={easeQuadInOut} >
                   
                  {value => {
                    const roundedValue = Math.round(value);
                    return (

                      <CircularProgressbar value={value} text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })} />
                    );
                  }}
                </AnimatedProgressProvider>
              </article>
            </div>
            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>JavaScript</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={60} duration={2} easingFunction={easeQuadInOut} >
                   
                  {value => {
                    const roundedValue = Math.round(value);
                    return (

                      <CircularProgressbar value={value} text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })} />
                    );
                  }}
                </AnimatedProgressProvider>
              </article>
            </div>

            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>ReactJS</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={40} duration={2} easingFunction={easeQuadInOut} >
                   
                  {value => {
                    const roundedValue = Math.round(value);
                    return (

                      <CircularProgressbar value={value} text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })} />
                    );
                  }}
                </AnimatedProgressProvider>
              </article>
            </div>

            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>NodeJS</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={40} duration={2} easingFunction={easeQuadInOut} >
                   
                  {value => {
                    const roundedValue = Math.round(value);
                    return (

                      <CircularProgressbar value={value} text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })} />
                    );
                  }}
                </AnimatedProgressProvider>
              </article>
            </div>

            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>GIT & GitHub</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={60} duration={2} easingFunction={easeQuadInOut} >
                   
                  {value => {
                    const roundedValue = Math.round(value);
                    return (

                      <CircularProgressbar value={value} text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })} />
                    );
                  }}
                </AnimatedProgressProvider>
              </article>
            </div>

            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>Jenkins</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={50} duration={2} easingFunction={easeQuadInOut} >
                   
                  {value => {
                    const roundedValue = Math.round(value);
                    return (

                      <CircularProgressbar value={value} text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })} />
                    );
                  }}
                </AnimatedProgressProvider>
              </article>
            </div>

            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>Docker</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={30} duration={2} easingFunction={easeQuadInOut} >
                   
                  {value => {
                    const roundedValue = Math.round(value);
                    return (

                      <CircularProgressbar value={value} text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })} />
                    );
                  }}
                </AnimatedProgressProvider>
              </article>
            </div>

            

          </div>

          <h4 className='S_sub'>UI & UX Design</h4>
          <div className="container container_skill">
            
            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>Figma</h4>

                <AnimatedProgressProvider valueStart={0} valueEnd={50} duration={2} easingFunction={easeQuadInOut}>
                    
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })}
                    />
                 );
                }}
                </AnimatedProgressProvider>
              </article>
            </div>
            
            <div className="skillcards">
              <article className='skilllevel'>
                <h4 className='S_sub'>Storybook</h4>

                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={40}
                  duration={2}
                  easingFunction={easeQuadInOut}
                  >
                    
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none" })}
                    />
                 );
                }}
                </AnimatedProgressProvider>
              </article>
            </div>

          </div>
    </section>
  )
}

export default Skills