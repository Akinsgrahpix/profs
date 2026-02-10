import React from 'react'


const About = () => {
  return (
    <div className='flex gap-20 justify-center mx-auto w-300 mt-36'>
      <div className='w-100'>
        <h3 className='uppercase font-semibold leading-15'>
          About Us
        </h3>
        <h1 className='font-semibold  leading-13 text-5xl text-green-900'>
          Our journey of compassion and hope
        </h1>
        <p className='mt-7'>
          Join us on a journey towards compassion and hope. Through our non-profit organisation, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
        </p>
        <p className='mt-8  '>
          A transformational journey towards bringing hope and compassion to the world.
        </p>
        <button className='mt-8 px-7 py-4 rounded-xl border font-bold text-green-900 border-green-900 hover:cursor-pointer hover:bg-black hover:text-white '>
          Read More
        </button>
      </div>
      <div className='150 flex gap-5'>
        <div className=' flex flex-col gap-3 -mt-20'>
          <img  className='rounded-2xl h-80 w-75 shadow-2xl' src="https://plus.unsplash.com/premium_photo-1732726651771-a0d5e5d79e49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBjYXJ0b29uJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww" alt="" />
          <img  className='rounded-2xl h-80 w-75 shadow-2xl' src="https://plus.unsplash.com/premium_photo-1732726651771-a0d5e5d79e49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBjYXJ0b29uJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww" alt="" />
        </div>
        <div className=' flex flex-col gap-3 -md-20'>
          <img  className='rounded-2xl h-70 w-80 shadow-2xl' src="https://plus.unsplash.com/premium_photo-1732726651771-a0d5e5d79e49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBjYXJ0b29uJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww" alt="" />
          <img  className='rounded-2xl h-70 w-80 shadow-2xl' src="https://plus.unsplash.com/premium_photo-1732726651771-a0d5e5d79e49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBjYXJ0b29uJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About