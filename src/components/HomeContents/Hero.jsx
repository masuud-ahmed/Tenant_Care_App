import React from 'react'
import { Link } from 'react-router-dom'
import House from "../../assets/images/House.png"

function Hero() {
  return (
    <div className="flex items-center p-8 md:px-[10%] bg-[#ECF1F8] flex-col-reverse md:flex-row justify-between" >
     <div className="md:w-1/2 space-y-5 p-8 mt-6 md:mt-0 text-center md:text-left">
      <h1 className="md:text-6xl text-5xl font-medium max-[434px]:text-4xl font-sans ">Easy Way To Manage</h1>
      <h2 className="text-4xl font-normal max-[366px]:text-3xl font-mono">Your Property</h2>
      <p className="text-lg text-gray-500">
        We take the guess out of managing <br />
        your property
      </p>
      <Link to='/GetStarted'>
        <button 
        className='bg-[#4949DB] mt-4 p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-[#0D025E] 
        shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3]'>GET STARTED</button>
      </Link>
    </div>
    <div className='house1'>
      <img className='rounded-xl' src={House} alt="" width={600} height={700}/>
    </div>
  </div>
  )
    
}

export default Hero