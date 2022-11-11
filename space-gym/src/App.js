import React from 'react';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
/* import { BrowserRouter, Routes, Route, Form } from "react-router-dom"; */
/* import injectContext from "./store/Context.js"; */

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer" 



function App() {
  return (
    <div className="App">
      <Navbar />

      <Footer/>
    </div>
  );
}

export default App;
