import React from 'react';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
/* import { BrowserRouter, Routes, Route, Form } from "react-router-dom"; */
/* import injectContext from "./store/Context.js"; */

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer" 
import { Main } from "./views/Main"

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Main/> 
      <Footer/>
    </div>
  );
}

export default App;
