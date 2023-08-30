import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Nomatch from './components/Nomatch';
import Products from './Products';
import FeatureProducts from './components/FeatureProducts';
import NewProducts from './components/NewProducts';
import Users from './Users';
import UserDetails from './UserDetails';

function App() {
  return (
    <div className="">
     
     <>
     <Navbar />
     <Routes>
     <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='orderSummary' element={<OrderSummary />} />
        <Route path='products' element={<Products />} >
          <Route index element={<FeatureProducts />} />
        <Route path='feature' element={<FeatureProducts />} />
        <Route path='new' element={<NewProducts />} />
           </Route>
           <Route path='user' element={<Users />} />
           <Route path='users/:userId' element={<UserDetails />} />
        
        <Route path='*' element={<Nomatch />} />
      </Routes>
     </>

    </div>
  );
}

export default App;
