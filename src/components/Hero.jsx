import React, { useState, useEffect } from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[92vh] bg-white flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 mx-[35vh] mt-[18vh]'>
        <div className='flex flex-col justify-center md:items-start w-full mt-[18vh]'>
          <h1 className='p-2 text-5xl md:text-6xl text-gray-400 font-bold'>Book Your</h1>
          <h1 className='px-6 text-5xl md:text-8xl font-bold hover:text-violet-600 hover:scale-110'>Service</h1>
        </div>
        <div className='w-[90vh]'>
          <img className='w-[80vh] h-[50vh] rounded-md' src={'assets/img1.jpg'} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Hero;