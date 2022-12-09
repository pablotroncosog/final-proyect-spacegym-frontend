import React from 'react';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import injectContext from "./store/Context";


import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { NavbarUser } from './components/NavbarUser';

import { Main } from "./views/Main"

import { Product } from './views/Product';
import Login from "./views/Login";
import Admin from './views/Admin';
import Registration from "./views/Registration";
import Account from './views/Account';
import Shopping from './views/Shopping';
import Combat from './views/Combat';



function App() {


  return (
    <div className="App">
      <div className='row'>
        <div className='col-12'>
          <Navbar />     
        </div>
      </div>
      
      <div className='row'> 
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Main />}> </Route>
          <Route path='/:id' element={<Product />}> </Route>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/shopping" element={<Shopping/>} />
          <Route path="/combat" element={<Combat/>} />
        </Routes>
      </BrowserRouter>
      </div> 
      
      <div className='col-12'>
        <Footer />
      </div>

    </div>
  );
}




export default injectContext(App);