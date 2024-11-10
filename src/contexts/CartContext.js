import React, { createContext, useContext, useEffect, useState } from 'react';
import { LoginContext } from './LoginContext';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);


  const { user } = useContext(LoginContext);  


  
  // Load cart from localStorage when the user logs in
  useEffect(() => {
    if (user && user.id) {
      const storedCart = localStorage.getItem(`cart_${user.id}`);
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);  // Restore the cart to state
      }
    } else {
      setCart([]);  // Optionally clear the cart if the user logs out
    }
  }, [user]);  // Re-run this effect when the `user` object changes

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (user && user.id) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));  // Save cart to localStorage
    }
  }, [cart, user]);  // Re-run this effect when `cart` or `user` changes



  useEffect(()=>{
    const total =cart.reduce((accumulator,currentItem)=>{
      return accumulator + currentItem.price *currentItem.amount;
    },0);
    setTotal(total);
  },);
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount)
    }
  }, [cart])
  const addToCart = (product, id) => {
    // console.log(product);
    const newItem = { ...product, amount: 1 };

    // console.log(newItem);
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        }
        else {
          return item;
        }
      })
      setCart(newCart);
    }
    else {
      setCart([...cart, newItem]);

    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(newCart);
  }

  const clearCart = (id) => {
    setCart([]);
  }
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    addToCart(cartItem, id)

  }
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        }
        else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }


  }
  return (
    <CartContext.Provider value={{ user, cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
