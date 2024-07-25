import React from 'react'
import './project.css'
const Project = () => {
  return (
    <div>
      <div className="container">
        <h1 className='head' id='nav4'>Projects</h1>
        <div class="gallery">
                 <a href="#" class="gallery-link" title="View Project">
                     <img src="https://tse2.mm.bing.net/th?id=OIP.UpcbF8sGJ3PkvOyYdLbb8gHaFj&pid=Api&P=0&h=180" class="project-img"  />
                     <h3 class="project-name">Maza Maharastra</h3>
                     <p class="project-description">
                     Maza Maharastra is a project that showcases the state of Maharashtra's diversity, history, culture, and tourism. 
                     </p>
                 </a>
                 <a href="#" class="gallery-link" title="View Project">
                     <img src="https://tse3.mm.bing.net/th?id=OIP.zYruZZsegGBgu1dvU66bMQHaE8&pid=Api&P=0&h=180" class="project-img" />
                     <h3 class="project-name">MY PORTFOLIO</h3>
                     <p class="project-description">
                        Project Showcasing my skills,contacts,projects and all about me
                     </p>
                 </a>
                 <a href="#" class="gallery-link" title="View Project">
                     <img src="https://tse4.mm.bing.net/th?id=OIP.Pth5TEBQOuFncRM6kzMGmgHaE5&pid=Api&P=0&h=180" class="project-img" />
                     <h3 class="project-name">Dice Project</h3>
                     <p class="project-description">
                        A project which is a Dice throwing game play by two player
                     </p>
                 </a>
               
                
              
             </div>
      </div>
    </div>
  )
}

export default Project
