import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {
  Routes,
  Route
} from "react-router-dom";
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/Authentication';
import ContactPage from './pages/ContactPage/ContactPage';

const App = () => {
  
  return (
    <div>
      <Header  />
      <Routes>   
        <Route exact path = "/home" element = {<HomePage />}></Route>
        <Route path = "/home/book" element = {<ShopPage />}></Route>

        <Route path = "/" element = {<AuthenticationPage />}></Route>
        <Route path = "/contact" element = {<ContactPage />}></Route>
      </Routes>
    </div>
  );
  
}

export default App;
