import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-5 px-40'>
      <div>
        <img src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/site-logo-white.svg" alt="" />
      </div>
      <div>
        <ul className='flex gap-10 font-serif'>
          <li className=' hover:text-green-600 hover:cursor-pointer  hover:font-medium '>Home</li>
          <li className=' hover:text-green-600 hover:cursor-pointer  hover:font-medium'>About</li>
          <li className=' hover:text-green-600 hover:cursor-pointer  hover:font-medium'>Our Work</li>
          <li className=' hover:text-green-600 hover:cursor-pointer  hover:font-medium' >Stories</li>
          <li className=' hover:text-green-600 hover:cursor-pointer  hover:font-medium'>Contact</li>
          
        </ul>
      </div>
      <div>
        <button className='bg-amber-50 px-8 py-4 rounded-xl font-semibold hover:bg-green-700'>
          Donate
        </button>
      </div>
    </nav>
  )
}

export default Navbar;