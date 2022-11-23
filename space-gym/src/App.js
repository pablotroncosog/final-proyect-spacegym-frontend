import React from 'react';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import injectContext from "./store/Context.js";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
/* import { BrowserRouter, Routes, Route, Form } from "react-router-dom"; */
/* import injectContext from "./store/Context.js"; */

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Main } from "./views/Main"
import { Offerts } from "./views/Offerts"
import { Product } from './views/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className='col-10 g-4 mt-2 p-2'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Offerts />}> </Route>
            <Route path='/:id' element={<Product />}> </Route>
          </Routes>
        </BrowserRouter> 
        </div>
      
      <Footer />
    </div>
  );
}

export default injectContext(App);
