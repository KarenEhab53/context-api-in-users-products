import React, { useContext} from 'react';
import { BsEye, BsPlus } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { LoginContext } from '../contexts/LoginContext';

const Product = ({ product }) => {
  // console.log(product);

  const { user } = useContext(LoginContext)
  const { id, image, title, price, category } = product;
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
const navigateto =()=>{
  if(!user){
    navigate('/login')
    
  }
}
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center' >
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={image} alt={title} className='max-h-[160px] group-hover:scale-110 transation duration-300' />
          </div>
        </div>
        {/* buttons */}
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transation-all duration-300'>
      
          <button >
            <div onClick={user?(()=>addToCart(product,id)):(navigateto)}  className='flex justify-center items-center text-white w-12 h-12 bg-red-500'><BsPlus className='text-3xl' /></div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEye /></Link>
        </div>
      </div>
      {/* category &  title & price*/}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}><h2 className='font-semibold mb-1'>{title}</h2></Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
