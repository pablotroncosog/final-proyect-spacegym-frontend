import React from 'react';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import injectContext from "./store/Context";

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

import { Main } from "./views/Main"

import Login from "./views/Login";
import Admin from './views/Admin';
import Registration from "./views/Registration";


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
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
         
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}




export default injectContext(App);