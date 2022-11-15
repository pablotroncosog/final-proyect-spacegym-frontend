import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import injectContext from "./store/Context.js";
import Registration from "./views/Registration";

function App() {
  return  <BrowserRouter>
              <Routes>
                <Route path="/registration" element={<Registration />}/>
              </Routes>
          </BrowserRouter>
}     

export default App;
