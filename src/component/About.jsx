import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-12 px-6 md:px-16 lg:px-24 mt-20'>

      
      <div className='w-full lg:w-1/2'>
        <h3 className='uppercase font-semibold mb-4'>
          About Us
        </h3>

        <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl text-green-900 leading-tight'>
          Our journey of compassion and hope
        </h1>

        <p className='mt-6 text-gray-700'>
          Join us on a journey towards compassion and hope. Through our non-profit organisation, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
        </p>

        <p className='mt-6 text-gray-700'>
          A transformational journey towards bringing hope and compassion to the world.
        </p>

        <button className='mt-8 px-6 py-3 rounded-xl border font-bold text-green-900 border-green-900 hover:bg-black hover:text-white transition'>
          Read More
        </button>
      </div>

     
      <div className='w-full lg:w-1/2 grid grid-cols-2 gap-4'>
        <img className='rounded-2xl w-full h-auto shadow-xl' 
          src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0001.jpg" 
          alt="" 
        />
        <img className='rounded-2xl w-full h-auto shadow-xl' 
          src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-03.jpg" 
          alt="" 
        />
        <img className='rounded-2xl w-full h-auto shadow-xl' 
          src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-02.jpg" 
          alt="" 
        />
        <img className='rounded-2xl w-full h-auto shadow-xl' 
          src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0004.jpg" 
          alt="" 
        />
      </div>

    </div>
  )
}

export default About
