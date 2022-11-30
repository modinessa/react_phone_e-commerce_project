import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  render() {
      return (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/details" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Default />} />
          </Routes>
          <Modal />
        </>
  );
  }
}

export default App;
