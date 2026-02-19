import React from 'react';

const Impact = () => {

  const stats = [
    { number: "20M+", label: "People served worldwide" },
    { number: "142,790", label: "Projects funded" },
    { number: "1.8M", label: "People to take action" },
    { number: "5,246", label: "Partner organizations" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 font-sans">
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-start">
        <div>
          <p className="text-xs font-bold  text-gray-500 mb-4 uppercase">Our Impact</p>
          <h2 className="text-5xl font-bold text-[#2D3A1B] leading-tight">
            The impact we have made in our community
          </h2>
        </div>
        <div className="md:pt-14">
          <p className="text-white text-lg">
            We have made a significant impact in our community through our non-profit 
            organization. By providing services and support to those in need, we 
            have created a positive change. Our efforts have helped to improve the 
            lives of many and we are committed to continuing to make a difference.
          </p>
        </div>
      </div>

     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8  pt-12">
        
        {stats.map((item, index) => (
          <div key={index} className="text-center divide-x-1  ">
            <h3 className="text-4xl md:text-5xl font-bold text-[#2D3A1B] mb-2">
              {item.number}
            </h3>
            <p className="text-gray-500 text-sm italic">{item.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Impact;