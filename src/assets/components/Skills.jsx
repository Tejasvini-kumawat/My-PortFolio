import React from 'react'
import './skills.css'
const Skills = () => {
  return (
  <div>
     <section class="section-2">
       
       <h1 class="section-2-heading" id='nav3'>Skills</h1>
       <div class="progress-bars-wrapper">
           <div class="progress-bar">
              
               <div class="progress-percent"> <p class="progress-text">
                   HTML
                   <span>97</span>%
               </p></div>
           </div>
           <div class="progress-bar">
               <p class="progress-text">
                   CSS
                   <span>89</span>%
               </p>
               <div class="progress-percent"></div>
           </div>
           <div class="progress-bar">
               <p class="progress-text">
                   Javascript
                   <span>85</span>%
               </p>
               <div class="progress-percent"></div>
           </div>
           <div class="progress-bar">
               <p class="progress-text">
                 React
                   <span>80</span>%
               </p>
               <div class="progress-percent"></div>
           </div>
           <div class="progress-bar">
               <p class="progress-text">
                   Bootsrap
                   <span>95</span>%
               </p>
               <div class="progress-percent"></div>
           </div>
           <div class="progress-bar">
               <p class="progress-text">
                  NodeJs
                   <span>60</span>%
               </p>
               <div class="progress-percent"></div>
           </div>

       </div>
       </section>
  </div>  
  )
}

export default Skills
