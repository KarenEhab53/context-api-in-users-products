import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Regiter from './pages/Regiter';
import LoginProvider from './contexts/LoginContext';
const App = () => {
  return <div className='overflow-hidden'>
    <BrowserRouter>
    <LoginProvider>
    <Header/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/product/:id' element={<ProductDetails/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Regiter/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
      </LoginProvider>
    </BrowserRouter>
  </div>;
};

export default App;
