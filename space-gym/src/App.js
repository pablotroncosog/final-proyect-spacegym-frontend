import React from 'react';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
=======
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route} from "react-router-dom";
>>>>>>> 5cf2abbfe77373924450fa836fac4aa2928b7243
import injectContext from "./store/Context";


import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { NavbarUser } from './components/NavbarUser';

import { Main } from "./views/Main"

<<<<<<< HEAD
import Login from "./views/Login";
import Admin from './views/Admin';
import Registration from "./views/Registration";
=======
import { Product } from './views/Product';
import Login from "./views/Login";
import Admin from './views/Admin';
import Registration from "./views/Registration";
import Account from './views/Account';
import Shopping from './views/Shopping';
import Combat from './views/Combat';

>>>>>>> 5cf2abbfe77373924450fa836fac4aa2928b7243


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
<<<<<<< HEAD
         
=======
          <Route path="/account" element={<Account />} />
          <Route path="/shopping" element={<Shopping/>} />
          <Route path="/combat" element={<Combat/>} />
>>>>>>> 5cf2abbfe77373924450fa836fac4aa2928b7243
        </Routes>
      </BrowserRouter>
      <div className='col-12'>
        <Footer />
      </div>

    </div>
  );
}




export default injectContext(App);