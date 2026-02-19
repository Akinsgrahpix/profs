import React from 'react'

const Donate = () => {
  return (
<section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      
      <div className="relative">
        <img 
          src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-05.jpg"
          alt="Volunteers" 
          className="rounded-3xl w-full object-cover shadow-xl"
        />
      </div>

      
      <div>
        <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
          GET INVOLVED
        </p>
        <h2 className="text-5xl font-bold text-[#2D3A1B] leading-tight mb-6">
          Join our movement for change
        </h2>
        <div className="text-white space-y-4 text-lg mb-8">
          <p>
            Join our non-profit organisation and be a part of our movement for positive change. 
            We empower communities, support vulnerable individuals and strive towards building 
            an equitable society. Together we can create a better world. Join us now!
          </p>
          <p>
            Become part of a transformative movement by supporting our non-profit organization. 
            Together we can make lasting change.
          </p>
        </div>
        
        
        <button className="border-2 border-[#2D3A1B] text-[#2D3A1B] px-8 py-3 rounded-xl font-bold hover:bg-[#2D3A1B] hover:text-white transition-all">
          Register Now
        </button>
      </div>

    </section>
  );
};

export default Donate