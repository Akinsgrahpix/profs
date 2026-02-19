import React, { useState } from 'react'

const Hero = () => {
  const [donate, setDonate] = useState(false);
  const donated =() => {
    setDonate(true);
  }
  return (
 <div className="flex flex-col gap-6 items-center justify-center min-h-screen text-center px-6">
  {donate ? (
      <h1 className="text-8xl font-medium -mt-3 text-white">
    thank you, for Donation
  </h1>
  ) : (
      <h1 className="lg:text-8xl text-2xl font-medium -mt-3 text-white">
    Empowering Change, One Step at a Time
  </h1>
  )}


  <p className="lg:px-75 px-2 text-2xl text-white">
    Every small act of kindness creates a ripple of positive change.
    Join us in making a difference in lives together.
  </p>

  <button onClick={donated} className="px-8 py-3 bg-green-800 text-white rounded-xl hover:bg-green-300 transition">
    {donate ? "Donated" : "Donate Now"}
  </button>
</div>

  )
}

export default Hero;
