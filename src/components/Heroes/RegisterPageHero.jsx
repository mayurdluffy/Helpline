import React from 'react'
import { motion } from 'framer-motion'

function RegisterPageHero() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-white'>
      <div className='grid md:grid-cols-2 mx-0 md:mx-[25vh] mt-0 md:mt-[4vh]'>
        <motion.img src='assets/img7.webp' className='w-[90vw] h-[75vw] md:ml-[4vw] md:w-[100vw] md:h-[80vh]'
          initial={{ x: -400 }} animate={{ x: -10 }} transition={{ delay: 0.1 }} />
        <motion.div className='flex justify-start text-start md:ml-[4vw]'
          initial={{ x: 400 }} animate={{ x: 30 }} transition={{ delay: 0.1 }}>
          <div className='flex flex-col justify-start md:justify-center mx-8 mb-[12vh] md:mb-0 md:mt-[14vh]'>
            <p className='text-3xl md:text-4xl font-bold self-center w-[50vw] md:w-[30vw] p-2  hover:text-violet-600'>By registering your</p>
            <p className='text-3xl md:text-4xl font-bold self-center w-[50vw] md:w-[30vw] p-2  hover:text-violet-600'>service your can help</p>
            <p className='text-3xl md:text-4xl font-bold self-center w-[50vw] md:w-[30vw] p-2  hover:text-violet-600'>to more needful</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RegisterPageHero