import React from 'react';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import injectContext from "./store/Context.js";
import Admin from './views/Admin';
import Registration from "./views/Registration";

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer" 
import { Main } from "./views/Main"

function App() {
  return  <BrowserRouter>
         <Navbar /> 
              
              <Routes>
                <Route path="/registration" element={<Registration />}/>
                <Route path="/" element={<Main/>}/>
                <Route path="/admin" element={<Admin/>}/>
              </Routes>

              <Footer/>
          </BrowserRouter>
}     




export default App;
