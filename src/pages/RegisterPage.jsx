import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegisterPageHero from '../components/Heroes/RegisterPageHero';
import ServiceProviderRegister from '../components/Registers/ServiceProviderRegister';

function RegisterPage() {

  return (
    <div className='flex bg-gray-200  flex-col justify-evenly'>
      <Navbar />
      <div className='bg-white w-full h-[100vh] '>
        <RegisterPageHero />
      </div>
      <div className='min-h-[90vh] p-4 flex flex-col items-center' id='registerForm'>

        <div className='h-[20vh] w-full flex justify-end items-center'>
          <h1 className='text-2xl md:text-3xl font-semibold m-auto hover:text-violet-600'>Register your service</h1>
          <div className='flex'>
          </div>
        </div>

        <div className='flex mt-[4vh] bg-white rounded-xl mb-[10vh]'>
          <ServiceProviderRegister />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RegisterPage