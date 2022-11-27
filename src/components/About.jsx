import React from 'react'

const About = () => {
    return (
        <div className='w-full flex items-center'>
            <div className='w-[80vw] m-auto'>

                <h2 className='text-6xl font-bold flex justify-center my-[6vh] hover:text-violet-600'>Our Services</h2>

                <div className='grid md:grid-cols-3 gap-4 text-center my-[10vh] mx-8'>
                    <div className='border bg-white m-4 p-5 rounded-xl shadow-xl' >
                        <img className='w-[80vw] h-[28vh]' src={'assets/img6.jpg'} alt="/" />
                        <p className='text-3xl font-bold m-6 hover:text-violet-600 hover:scale-110'>Basic Ambulance</p>
                        <p className='text-black-400 '>Basic Life Support Ambulance is for the patients who need medical transportation. It comprises of patient bed, pulse oximetry and oxygen delivery devices.</p>
                    </div>
                    <div className='border bg-white m-4 p-5 rounded-xl shadow-xl' >
                        <img className='w-[80vw] h-[28vh]' src={'assets/img5.webp'} alt="/" />
                        <p className='text-3xl font-bold p-6 hover:text-violet-600 hover:scale-110'>Advance Ambulance</p>
                        <p className='text-black-400 mt-2'>ALS ambulance is equipped with ventilator, ECG, monitoring devices and paramedic staff.</p>
                    </div>
                    <div className='border bg-white m-4 p-5 rounded-xl shadow-xl' >
                        <img className='w-full h-[28vh]' src={'assets/img4.webp'} alt="/" />
                        <p className='text-3xl font-bold p-6 hover:text-violet-600 hover:scale-110'>Mortuary Ambulance</p>
                        <p className='text-black-400 mt-2'>Mortuary ambulance services are used for the transportation of the dead body</p>
                    </div>
                </div>

                <div className='bg-white grid grid-cols-2 shadow-2xl text-center mt-[10vh] p-8 mx-[2.4vw] mb-[6vh] rounded-xl'>
                    <div className='py-4' >
                        <img className='w-[32vw] h-[50vh]' src={'assets/img2.webp'} alt="/" />
                    </div>
                    <div className='h-[30vh] py-4 px-8' >
                        <h1 className='text-2xl md:text-4xl font-bold my-[4vh] mx-5 text-start hover:text-violet-600 hover:scale-110'>How It Works?</h1>
                        <div className='text-gray-500 font-semibold my-2'>
                            <div className='flex'>
                                <span className='m-4 ml-3 w-12 h-12 p-1 bg-slate-300 text-sky-800 rounded-full text-4xl hover:bg-sky-800 hover:text-slate-400'>1</span>
                                <p className='text-3xl m-4 ml-4 hover:text-violet-600'>Add your location</p>
                            </div>
                            <div className='flex'>
                                <span className='m-4 ml-3 w-12 h-12 p-1 bg-slate-300 text-sky-800 rounded-full text-4xl hover:bg-sky-800 hover:text-slate-400'>2</span>
                                <p className='text-3xl m-4 ml-4 hover:text-violet-600'>Choose Nearest Ambulance</p>
                            </div>
                            <div className='flex'>
                                <span className='m-4 ml-3 w-12 h-12 p-1 bg-slate-300 text-sky-800 rounded-full text-4xl hover:bg-sky-800 hover:text-slate-400'>3</span>
                                <p className='text-3xl m-4 ml-4 hover:text-violet-600'>Book an Ambulance Easily</p>
                            </div>
                            <div className='flex'>
                                <span className='m-4 ml-3 w-12 h-12 p-1 bg-slate-300 text-sky-800 rounded-full text-4xl hover:bg-sky-800 hover:text-slate-400'>4</span>
                                <p className='text-3xl m-4 ml-4 hover:text-violet-600'>Track your Ambulance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About