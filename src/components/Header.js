import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Logo from '../img/logo.svg'
import { IoMdLogIn } from 'react-icons/io';
import { FaSignInAlt } from 'react-icons/fa';
import { LoginContext } from '../contexts/LoginContext';
const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount,clearCart } = useContext(CartContext);
  const{user , logout }=useContext(LoginContext);


  const handleLogout = () => {
    logout(); 
  
    };
 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
 

  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transation-all`}>
      <div className='container flex mx-auto items-center justify-between h-full '>
        <Link to={`/`}>
          <div>
            <img className='w-[40px]' src={Logo} alt='/' />
          </div>
        </Link>
        {user? ( <div className="flex justify-center items-center gap-2">
              <h2 className='text-[20px] text-semiblod'>Welcome,<span className='text-gray-600 text-2xl'> {user.username}</span></h2>
              <button
                className="flex items-center w-[100px] h-[30px] gap-1 border border-primary rounded-[15px] justify-center p-2 hover:bg-primary transition duration-300 hover:text-white"
                onClick={handleLogout}>Logout</button>
                  <div className='cursor-pointer flex relative max-w-[50px]' onClick={() => setIsOpen(!isOpen)}>
            <BsBag className='text-2xl' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
          </div>
            </div>):(
        <div className='w-[400px] flex justify-evenly'>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex w-[100px] gap-1 border border-primary rounded-[15px] justify-center items-center hover:bg-primary transation duration-300 hover:text-white'>
            <IoMdLogIn />
              <button><Link to={'/login'}>Login</Link></button>
            </div>
            <div className='flex w-[100px] gap-1 border border-primary rounded-[15px] justify-center items-center hover:bg-primary transation duration-300 hover:text-white'>
            <FaSignInAlt/>
              <button><Link to={'/register'}>Sign up</Link></button>
            </div>
          </div>
            {/* Cart */}
          <div className='cursor-pointer flex relative max-w-[50px]' onClick={() => setIsOpen(!isOpen)}>
            <BsBag className='text-2xl' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
          </div>
          </div>
            )
}
       
      </div>

    </header>
  )
};

export default Header;
