import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import SignIn from './components/SignInPage';
import CreateAccount from './components/CreateAccountPage';
import Cart from './components/CartPage';
import React from 'react';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/shop-web' element={<HomePage />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/createAccount' element={<CreateAccount />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
