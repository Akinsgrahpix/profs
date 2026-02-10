import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import HowTo from './component/HowTo'
import About from './component/About'


const App = () => {
  return (
  <div className='bg-gray-600'>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-gray-600"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}>
        <Navbar />
        <Hero /> 
    
        
      </div>
      <HowTo />
          <About />
   </div>
  )
}

export default App

