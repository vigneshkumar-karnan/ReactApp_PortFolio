import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Career from './components/Career/Career'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Career/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App