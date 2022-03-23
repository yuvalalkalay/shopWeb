import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import SignIn from './components/SignInPage';
import CreateAccount from './components/CreateAccountPage';
import Cart from './components/CartPage';
import UsersManeger  from './components/UsersManegerPage';
import UsersManegerUpdate from './components/UsersManegerUpdate';
import ProductManeger from './components/ProductManegerPage';
import ProductManegerUpdate from './components/ProductManegerUpdatePage';
import AddProduct from './components/AddProductPage';
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
          <Route path='/usersManeger' element={<UsersManeger />} />
          <Route path='/usersManegerUpdate' element={<UsersManegerUpdate />} />
          <Route path='/productManeger' element={<ProductManeger />} />
          <Route path='/productManegerUpdate' element={<ProductManegerUpdate />} />
          <Route path='/addProduct' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
