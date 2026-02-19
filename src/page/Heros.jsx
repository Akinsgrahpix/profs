import React from 'react'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import HowTo from '../component/HowTo'
import About from '../component/About'
import Impact from '../component/Impact'
import Cardb from '../component/Cardb'
import Donate from '../component/Donate'
import Inspiring from '../component/Inspiring'


const Heros = () => {
  return (
    <div>
            <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-gray-600"
              style={{
                backgroundImage:
                  "url('')",
        }}>

    
          <Navbar />
        <Hero /> 
        <HowTo />
          <About />
          <Impact />
          <Cardb />
          <Donate />
          <Inspiring />
      </div>
      
    </div>
  )
}

export default Heros
