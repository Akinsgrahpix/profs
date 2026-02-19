import React from 'react'

const Inspiring = () => {
  return (
        <section className="bg-[#F9F8F3] py-24 px-6">
      
      <div className="text-center max-w-3xl mx-auto mb-32">
        <h2 className="text-5xl font-bold text-[#2D3A1B] mb-6">
          Inspiring tales of transformation
        </h2>
        <p className="text-gray-600 text-lg">
          Get inspired by the remarkable stories through our non-profit organization. 
          Join us in making a positive impact today.
        </p>
      </div>

      
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-[40px] shadow-sm flex flex-col md:flex-row relative">
        
        
        <div className="flex-1 flex flex-col items-center p-8 md:border-r border-gray-200">
          
          <div className="-mt-32 mb-8">
            <img 
              src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-05.jpg" 
              alt="Community Support" 
              className="rounded-3xl w-full h-64 object-cover shadow-lg"
            />
          </div>
          
          <div className="bg-[#E6F0DC] text-[#2D3A1B] px-6 py-2 rounded-full font-medium inline-block">
            Community Support
          </div>
        </div>

        
        <div className="flex-1 flex flex-col items-center p-8">
          <div className="-mt-32 mb-8">
            <img 
              src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-05.jpg" 
              alt="Education for Kids" 
              className="rounded-3xl w-full h-64 object-cover shadow-lg"
            />
          </div>
          <div className="bg-[#D1E9F0] text-[#1B3A3A] px-6 py-2 rounded-full font-medium inline-block">
            Education for Kids
          </div>
        </div>

      </div>
    </section>
  )
}

export default Inspiring


