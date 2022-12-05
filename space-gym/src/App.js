import React from 'react';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import injectContext from "./store/Context.js";

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

import { Main } from "./views/Main"
import { Offerts } from "./views/Offerts"
import { Product } from './views/Product';
import Login from "./views/Login";
import Admin from './views/Admin';
import Registration from "./views/Registration";
import Account from './views/Account';

function App() {


  return (
    <div className="App">
      <div className='row'>
        <div className='col-12'>
          <Navbar />
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}> </Route>
          <Route path='/:id' element={<Product />}> </Route>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}




export default injectContext(App);