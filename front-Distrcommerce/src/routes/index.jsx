import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../screens/Home';
import User from '../screens/User';
import ProductDetails from '../screens/ProductDetails';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Orders from '../screens/Orders';

// Middleware para rotas protegidas
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" />;
};

const AppRoutes = ({ searchTerm }) => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<Home searchTerm={searchTerm} />} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<ProtectedRoute element={<User />} />} />
      <Route path="/product/:id" element={<ProtectedRoute element={<ProductDetails />} />} />
      <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
      <Route path="/checkout" element={<ProtectedRoute element={<Checkout />} />} />
      <Route path="/orders" element={<ProtectedRoute element={<Orders />} />} />
    </Routes>
  );
};

export default AppRoutes;
