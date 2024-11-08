// src/contexts/LoginContext.js
import React, { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2';

// Create a Context for Login
export const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Track logged-in user

  const login = async (username, password) => {
    try {
      // Fetch users from the API
      const response = await fetch('https://fakestoreapi.com/users');
      const users = await response.json();

      // Find user by matching username and password
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        setUser(foundUser); // Set user in context if credentials match
        return true;
      } else {
        alert("username or password not found")
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logout = () => {
  
    Swal.fire({
        title: "Are you sure to logout ?",
        text: "You won't be able to continue shopping!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout !"
      }).then((result) => {
        if (result.isConfirmed) {
            setUser(null); 
          Swal.fire({
            title: "Logout!",
            text: "",
            icon: "success"
          });
        }
      });
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
