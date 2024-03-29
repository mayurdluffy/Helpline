import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { globalStateContext } from '../../contexts/globalStateContext'
import { toast } from 'react-hot-toast';
import { HashLink } from 'react-router-hash-link';


function UserLogin({ }) {

  const navigate = useNavigate();
  const { userName, setUserName, userId, setUserId, setUserLoggedIn } = useContext(globalStateContext);

  //state management for user 
  const [contactNo, setContactNo] = useState('');
  const [otp, setOtp] = useState('');

  const handleClick = async () => {
    //getting user refresh_token from localstorage
    const user_refresh_token = localStorage.getItem('helpline_refresh_token');

    if (user_refresh_token === null) {
      toast.error("You are not registered, registere yourself first");

    } else {
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/verifyrefreshtoken`, {
          RefreshToken: user_refresh_token,
        });

        const UserData = res.data;
        localStorage.setItem('helpline_access_token', UserData.accessToken);
        setUserName(UserData.userName);
        setUserId(UserData.regdId);
        setUserLoggedIn(true);
        // toast.success(`Welcome ${UserData.userName}`);
        navigate('/#hero', { replace: true });
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleChange = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setContactNo(value);
    } else {
      toast.error('Enter number only');
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='w-auto h-[40vh] mb-[8vh] p-4 text-center bg-white rounded-xl'>
        <p className='text-2xl md:text-3xl font-semibold text-gray-600 my-[4vh] flex justify-center hover:text-violet-800'>User Login</p>
        <div className='flex flex-col w-[40vh] h-auto mt-[8vh] mb-[4vh]'>
          <p className='text-xl font-semibold text-gray-600 flex justify-center' >Already have an account</p>
          <p className='flex justify-end mx-3'><button className='btn w-[80px] md:mx-[2vw] my-2' onClick={handleClick}>Login</button></p>
          <p className='flex justify-center text-sm mt-8'>Haven't registered yet?<HashLink smooth to='/#userRegister ' className='hover:text-violet-600 mx-2'>Register Now</HashLink></p>
        </div>
      </div>
    </div>
  )
}

export default UserLogin