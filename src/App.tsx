import React, { FC } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/cart/:id?' element={<CartPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
