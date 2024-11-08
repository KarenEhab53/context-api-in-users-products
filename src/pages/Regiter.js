import React from 'react'
import { Link } from 'react-router-dom'
import { FaLock, FaUser } from 'react-icons/fa'
function Regiter() {
  return (
   
    <div className='flex justify-center items-center h-[100vh] bg-hero text-primary'>
    <div className='w-[420px] flex flex-col'>
        <form action='' method=''>
            <h1 className='text-[36px] text-center'>Register</h1>
            <div className='relative w-5/5 h-[50px] m-[30px]'>
                <input className='w-full h-full bg-transparent border border-gray-400 rounded-[30px] text-justify p-4 absolute' type='text' placeholder='Username' required />
                <FaUser className='absolute right-3 bottom-4' />
            </div>
            <div className='relative w-5/5 h-[50px] m-[30px]'>
                <input className='w-full h-full bg-transparent border border-gray-400 rounded-[30px] text-justify p-4 absolute' type='email' placeholder='Enter Your Email' required />
                <FaUser className='absolute right-3 bottom-4' />
            </div>
            <div className='relative w-5/5 h-[50px] m-[30px]'>
                <input type='password' placeholder='Password' required className='w-full h-full bg-transparent border border-gray-400 rounded-[30px] text-justify p-4 absolute' />
                <FaLock className='absolute right-3 bottom-4' />
            </div>
            <div className='relative w-5/5 h-[50px] m-[30px]'>
                <input type='password' placeholder='Confirm Password' required className='w-full h-full bg-transparent border border-gray-400 rounded-[30px] text-justify p-4 absolute' />
                <FaLock className='absolute right-3 bottom-4' />
            </div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className='flex justify-center items-center gap-5'>
                    <label><input type='checkbox' />Remember me <span className='w-3 bg-gray-400'></span></label>
                </div>
                <button type='submit' className="w-[200px] h-[40px] flex justify-center text-center text-white bg-gray-400 border text-[20px] cursor-pointer rounded-[30px]">Login</button>
                <div className='register-link '>
                    <p>Already have an Account<Link to={'/login'}><span className=' hover:text-[24px] hover:text-red-500'>Login </span></Link></p>
                </div>
            </div>

        </form>
    </div>

</div>
  )
}

export default Regiter
