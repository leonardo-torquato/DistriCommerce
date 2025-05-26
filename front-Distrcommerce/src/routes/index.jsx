import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import User from '../screens/User';
import ProductDetails from '../screens/ProductDetails';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRoutes;
