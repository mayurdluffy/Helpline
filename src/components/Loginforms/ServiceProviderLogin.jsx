import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginFormDropdown from '../Dropdowns/LoginFormDropdown'
import { HashLink } from 'react-router-hash-link'
import toast from 'react-hot-toast'
import { globalStateContext } from '../../contexts/globalStateContext'

function ServiceProviderLogin() {

  const options = [
    { label: 'Ambulance Service Provider', id: 1 },
    { label: 'Blood Bank Service Provider', id: 2 },
    { label: 'Oxygen Cylinder Provider', id: 3 }
  ]

  const [formNo, setFromNo] = useState(0);
  const navigate = useNavigate();
  // state management for ambulance service provider
  const [providerName, setProviderName] = useState('');
  const [regdNo, setRegdNo] = useState('');
  const [password, setPassword] = useState('');
  const { isProviderLoggedIn, setProviderLoggedIn } = useContext(globalStateContext);

  const handleClick = () => {

    if (providerName === '' || regdNo === '' || password === '') {
      toast.error('All fields are mendatory');
    } else {
      setProviderLoggedIn(true);
      toast.success(`Welcome ${providerName}`)
      if (formNo === 1) {
        // check if user is logged in or not
        navigate(`/ambulance-service-provider-panel/${providerName}`, { replace: true });
      } else if (formNo === 2) {
        // check if user is logged in or not
        navigate(`/blood-bank-service-provider-panel/${providerName}`, { replace: true });
      } else if (formNo === 3) {
        // check if user is logged in or not
        navigate(`/oxygen-cylinder-provider-panel/${providerName}`, { replace: true });
      }
    }
  }

  useEffect(() => {
    setProviderLoggedIn(false);
  })

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-auto h-[60vh] mb-[8vh] p-4 text-center bg-white rounded-xl'>
          <p className='text-3xl font-bold text-gray-600 my-[4vh] flex justify-center hover:text-violet-600'>Service Provider Login</p>
          <div className='flex flex-col w-[50vh] h-auto mt-[8vh] mb-[4vh]'>
            <LoginFormDropdown title={'Register as'} options={options} setFromNo={setFromNo} />
            <input type='text' placeholder='Service Provider Name' className='border-2 border-gray-600 rounded-full px-4 py-1 my-2' onChange={(e) => { setProviderName(e.target.value) }}></input>
            <input type='text' placeholder='Regd Id' className='border-2 border-gray-600 rounded-full px-4 py-1 my-2' onChange={(e) => { setRegdNo(e.target.value) }}></input>
            <input type='text' placeholder='Password' className='border-2 border-gray-600 rounded-full px-4 py-1 my-2' onChange={(e) => { setPassword(e.target.value) }}></input>
            <p className='flex justify-end'><button className='btn w-[100px] m-2' onClick={handleClick}>Submit</button></p>
            <p className='flex justify-start text-sm'>Haven't registered yet?<HashLink smooth to='/register#registerForm' className='hover:text-violet-600 mx-2'>Register Now</HashLink></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceProviderLogin