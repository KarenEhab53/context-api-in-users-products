import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { FaLock, FaUser } from 'react-icons/fa'
import { LoginContext } from '../contexts/LoginContext'
function Login() {
    const { login } = useContext(LoginContext);
    const navigate = useNavigate();

    // Local state for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const valid = await login(username, password);
    
    if (valid) {
      navigate('/'); // Redirect to home page on successful login
    } else {
      setError('Invalid username or password');
    }
  };


    return (
        <div className='flex justify-center items-center h-[100vh] bg-hero text-primary'>
            <div className='w-[420px] flex flex-col'>
                <form action='' method='' onSubmit={handleSubmit}>
                    <h1 className='text-[36px] text-center'>Login</h1>
                    <div className='relative w-5/5 h-[50px] m-[30px]'>
                        <input value={username} onChange={(e) => setUsername(e.target.value)}  className='w-full h-full bg-transparent border border-gray-400 rounded-[30px] text-justify p-4 absolute' type='text' placeholder='Username' required />
                        <FaUser className='absolute right-3 bottom-4' />
                    </div>
                    <div className='relative w-5/5 h-[50px] m-[30px]'>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required className='w-full h-full bg-transparent border border-gray-400 rounded-[30px] text-justify p-4 absolute' />
                        <FaLock className='absolute right-3 bottom-4' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex justify-center items-center gap-5'>
                            <label><input type='checkbox' />Remember me <span className='w-3 bg-gray-400'></span></label>
                            <Link to={'/'} className='text-red-400' >Forgot Password ?</Link>
                        </div>
                        <button type='submit' className="w-[200px] h-[40px] flex justify-center text-center text-white bg-gray-400 border text-[20px] cursor-pointer rounded-[30px]">Login</button>
                        {error && <p>{error}</p>}

                        <div className='register-link '>
                            <p>Don't have an account <Link to={'/register'}><span className=' hover:text-[24px] hover:text-red-500'>Register</span></Link></p>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login
