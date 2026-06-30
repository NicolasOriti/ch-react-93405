import { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';
import DetailProductPage from '../pages/DetailProductPage';

import { AuthProvider } from '../context/AuthProvider';
import { CartProvider } from '../context/CartProvider';

const App = () => {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/products/:productId' element={<DetailProductPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default App;
