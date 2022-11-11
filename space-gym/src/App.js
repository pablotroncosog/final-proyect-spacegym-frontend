import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import injectContext from "./store/Context.js";
import Admin from './views/Admin';

function App() {
  return (
    <div className="App">
      <Admin/>
      
     
    </div>
  );
}

export default App;
