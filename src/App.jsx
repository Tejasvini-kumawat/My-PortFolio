import React from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Intro from './assets/components/Intro'
import Skills from './assets/components/Skills'
import About from './assets/components/About'
import Project from './assets/components/Project'
import Contact from './assets/components/Contact'

function App() {
  

  return (
    <>
     <div>
      <Navbar/>
     <Intro/>
     <About/>
     <Skills/>
     <Project/>
   <Contact/>
      </div> 
    </>
  )
}

export default App
