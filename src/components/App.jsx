import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';
import DetailProductPage from '../pages/DetailProductPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/products/:productId' element={<DetailProductPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
