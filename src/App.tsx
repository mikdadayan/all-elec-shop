import React, { FC } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container } from 'react-bootstrap';
import HomePage from './pages/home/HomePage';

const App: FC = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to the All Electronics Shop</h1>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
