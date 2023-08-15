import React from 'react'
import Checkbox from '../components/inputs/Checkbox/Checkbox'
import FadeInAnimation from '../components/motion/fadeIn/FadeIn'
import projects from './projects.json'
import CardProjects from '../components/projects/CardProjects/CardProjects'
import AnimatedElement from '../components/motion/slideInPushIn'


function Projects() {
  return (
    <FadeInAnimation>

    <main>
      <div className='subhead flex flex-col gap-6 lg:flex-row lg-4 lg:my-8 py-8 lg:py-8 px-5 lg:px-20 w-full justify-between	align-center'>
        <div className='flex flex-col align-center justify-center'>
          <h1 className='text-lg lg:text-3xl font-bold '>My Projects</h1>
          <p>Checkout a collection of some of my work 👇 </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-medium'>Filter By:</h3>
          <fieldset className='flex flex-row flex-wrap gap-2'>
          <Checkbox name='UX Design'></Checkbox>
          <Checkbox name='Frontend'></Checkbox>
          <Checkbox name='Design'></Checkbox>
          <Checkbox name='Others'></Checkbox>

          </fieldset>
        </div>
        
      </div>


      <div className='max-w-full gap-0.5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
        {projects.map((project,index)=>{
            return(
              <AnimatedElement key={index} index={index}>
                
                <CardProjects key={index} project={project}></CardProjects>

              </AnimatedElement>
            )
          })}
         
      </div>
    </main>
    </FadeInAnimation>
  )
}

export default Projects