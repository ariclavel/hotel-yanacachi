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

const App = () => {
  
  return (
    <div>
      <Header  />
      <Routes>   
        <Route exact path = "/" element = {<HomePage />}></Route>
        <Route path = "/book" element = {<ShopPage />}></Route>
        <Route path = "/auth" element = {<AuthenticationPage />}></Route>
      </Routes>
    </div>
  );
  
}

export default App;
